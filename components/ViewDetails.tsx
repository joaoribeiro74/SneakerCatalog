import { useRouter } from "expo-router";
import Sneaker from "../types/Sneaker";
import StyledButton from "./StyledButton";
import { Alert, Text, View } from "react-native";

interface ViewDetailsProps {
    sneaker: Sneaker;
}

export default function ViewDetails({ sneaker }: ViewDetailsProps) {
    const router = useRouter();
  
    return (
    <View
      style={{ borderTopColor: "darkblue", borderTopWidth: 1, marginTop: 12 }}
    >
      <Text>id: {sneaker.id}</Text>
      <Text>Nome: {sneaker.brand} {sneaker.name}</Text>
      <Text>Size: {sneaker.size}</Text>
      <Text>Cor(es): {sneaker.color}</Text>
      <Text>Preço: {sneaker.price}</Text>
      <Text>Imagem: {sneaker.image}</Text>

        <View style={{ flexDirection: "row" }}>
            <StyledButton
                title="Ver Detalhes"
                onPress={() => {
                if (sneaker.id) {
                    router.push(`/home/${sneaker.id}/`);
                } else {
                    Alert.alert(
                    "View error",
                    "cannot access sneaker details because it does not have an id!"
                    );
                }
                }}
                style={{ width: "50%" }}
            />
        </View>
      </View>
    );
  }