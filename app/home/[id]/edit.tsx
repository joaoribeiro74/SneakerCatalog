import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import { Alert, TextInput, View, StyleSheet } from "react-native";
import StyledButton from "../../../components/StyledButton";
import { useState } from "react";
import useCollection from "../../../firebase/hooks/useCollection";
import Sneaker from "../../../types/Sneaker";
import { query } from "firebase/firestore";

export default function Edit() {
  const router = useRouter();
  const { id, brand: initialBrand, name: initialName, size: initialSize, color: initialColor, price: initialPrice, image: initialImage } = useGlobalSearchParams();

  const { update, refreshData } = useCollection<Sneaker>("sneakers");

  const [brand, setBrand] = useState(initialBrand as string || "");
  const [name, setName] = useState(initialName as string || "");
  const [size, setSize] = useState(initialSize?.toString() || "");
  const [color, setColor] = useState(initialColor as string || "");
  const [price, setPrice] = useState(initialPrice?.toString() || "");
  const [image, setImage] = useState(initialImage as string || "");

  const handleUpdate = async () => {
    if (!id) return;
    try {
      await update(id.toString(), {
        brand,
        name,
        size: parseInt(size),
        color,
        price: parseInt(price),
        image,
      });
      await refreshData();
      if (router.canDismiss()) {
        router.replace(`/`); // Usando replace para evitar que a página de edição seja mantida no histórico
      } // Voltar para a tela principal após a atualização
    } catch (error: any) {
      Alert.alert("Update Sneaker error", error.toString());
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Edit Sneaker" }} />

      <TextInput
        style={styles.input}
        placeholder="Brand"
        value={brand}
        onChangeText={setBrand}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Size"
        value={size}
        keyboardType="numeric"
        onChangeText={setSize}
      />
      <TextInput
        style={styles.input}
        placeholder="Color"
        value={color}
        onChangeText={setColor}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        keyboardType="numeric"
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
      />
      <StyledButton title="Update Sneaker" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    width: "100%",
    height: 50,
    marginBottom: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
