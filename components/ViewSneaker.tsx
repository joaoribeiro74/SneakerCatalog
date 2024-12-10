import { useRouter } from "expo-router";
import { Alert, Text, View } from "react-native";

import Sneaker from "../types/Sneaker";
import StyledButton from "./StyledButton";

interface ViewSneakerProps {
  sneaker: Sneaker;
  onDelete: Function;
  onEdit: Function;
}

export default function ViewSneaker({ sneaker, onDelete, onEdit }: ViewSneakerProps) {
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
          title="Editar"
          onPress={() => {
            if (sneaker.id) {
              // Confirmação antes de editar
              Alert.alert("Editar informações", "Você tem certeza?", [
                {
                  text: "Sim",
                  onPress: () => {
                    // Passando o ID do sneaker para a função onEdit
                    onEdit(sneaker.id);
                  },
                },
                {
                  text: "Não",
                  style: "cancel",
                },
              ]);
            } else {
              Alert.alert(
                "Erro de visualização",
                "Não é possível acessar os detalhes do sneaker porque ele não tem um ID!"
              );
            }
          }}
          style={{ width: "50%" }}
        />

        <StyledButton
          title="Deletar"
          onPress={() => {
            if (sneaker.id) {
              Alert.alert("Delete Sneaker", "Are you sure?", [
                {
                  text: "Yes",
                  onPress: async () => {
                    onDelete();
                  },
                },
                {
                  text: "No",
                  style: "cancel",
                },
              ]);
            } else {
              Alert.alert(
                "delete error",
                "cannot delete Sneaker because it does not have an id!"
              );
            }
          }}
          style={{ width: "50%", backgroundColor: "red" }}
        />
      </View>
    </View>
  );
}
