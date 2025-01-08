import { GestureResponderEvent, StyleSheet, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
interface CardProps {
  option: {
    id: number;
    name: string;
  };
  onPress: (event: GestureResponderEvent) => void; // Function called when the card is pressed
}
const Cards: React.FC<CardProps> = ({ option, onPress }) => {
  return (
    <TouchableOpacity key={option.id} style={styles.card} onPress={onPress}>
      <Text style={styles.cardText}>{option.name.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "40%",
    height: 150,
    backgroundColor: "#DA6727",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  cardText: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "900",
  },
});
export default Cards;
