import { faker } from "@faker-js/faker";
import { Stack, usePathname, useRouter } from "expo-router";
import { Alert, FlatList, Text, TextInput, View, StyleSheet, ScrollView } from "react-native";

import HeaderRight from "../../components/HeaderRight";
import Loading from "../../components/Loading";
import StyledButton from "../../components/StyledButton";
import ViewSneaker from "../../components/ViewSneaker";
import useCollection from "../../firebase/hooks/useCollection";
import globalStyles from "../../styles/globalStyles";
import Sneaker from "../../types/Sneaker";
import { useState } from "react";
import ViewDetails from "@/components/ViewDetails";

export default function Home() {
  const { data, create, update, remove, refreshData, loading } =
    useCollection<Sneaker>("sneakers");

    const router = useRouter();
    
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Home",
          headerRight: () => <HeaderRight />,
        }}
      />

      <Text style={globalStyles.title}>Sneaker CRUD</Text>

      <StyledButton
        title="Create sneaker"
        onPress={async () => {
          try {
            await create({
              brand: faker.lorem.words(1),
              name: faker.lorem.words(4),
              size: faker.number.int({max: 46}),
              color: faker.lorem.words(2),
              price: faker.number.int({min: 1000, max: 40000}),
              image: faker.image.url(),
            });

            await refreshData();
          } catch (error: any) {
            Alert.alert("Create Sneaker error", error.toString());
          }
        }}
      />

{loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 20 }}>
              {/* ViewDetails component - Botão para ver os detalhes */}
              <ViewDetails sneaker={item} />
            </View>
          )}
          style={{ width: "100%" }}
        />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  editForm: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 5,
    backgroundColor: "#f6f6f6",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "flex-start",
    borderWidth: 2,
    borderColor: "#323232",
    boxShadow: '4px 4px #323232',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderColor: "#323232",
    borderWidth: 2,
    boxShadow: "4px 4px #323232",
    fontSize: 15,
    fontWeight: "600",
    backgroundColor: "#f6f6f6",
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 3,
  },
  titleInput: {

  }
});
