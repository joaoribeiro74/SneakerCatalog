import { useRouter } from "expo-router";
import Sneaker from "../types/Sneaker";
import StyledButton from "./StyledButton";
import { Alert, Text, View } from "react-native";
import CardSneaker from "./CardSneaker";

interface ViewDetailsProps {
    sneaker: Sneaker;
}

export default function ViewDetails({ sneaker }: ViewDetailsProps) {
    const router = useRouter();
  
    return (
    <View>
      <CardSneaker sneaker={sneaker}>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <StyledButton
                title="Ver Detalhes →"
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
                style={{ width: "70%", marginTop: 30 }}
            />
        </View>
        </CardSneaker>
      </View>
    );
  }