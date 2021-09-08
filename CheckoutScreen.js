import * as React from "react";
import { StyleSheet, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { VStack, Button, Text } from "native-base";
import { Address, CreditCard, Filler } from "./CheckoutComponents";

export default function CheckoutScreen({ navigation, route }) {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    const { params: creditCard } = route;
    if (creditCard) {
      setCards([...cards, creditCard.creditCard]);
    }
  }, [route.params]);

  const handleAddCard = () => {
    navigation.navigate("AddCard");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <VStack style={styles.container} space={2}>
          <Filler />
          <Text style={[styles.title]}>Select Card for Payment</Text>
          {cards.length === 0 && (
            <Text style={{ textAlign: "center" }}>
              You have no cards on file
            </Text>
          )}
          <Button variant="ghost" onPress={handleAddCard}>
            Add New Card
          </Button>
          {cards.length > 0 && cards.map((card) => <CreditCard {...card} />)}

          <Text style={styles.title}>Select Address</Text>
          <Address />
          <Address />
          <Button
            onPress={() => {
              Alert.alert("Turn Back", "Nothing else works");
            }}
          >
            Next
          </Button>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  content: {
    backgroundColor: "#d8d8d8",
    width: "100%",
    height: 80,
    borderRadius: 16,
  },
});
