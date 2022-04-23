import React from "react";
import { View, StyleSheet } from "react-native";
import { Layout, Text } from "react-native-rapi-ui";

export default ({ navigation }) => {
  const { event, eventsText } = eventsStyle;
  return (
    <Layout>
      <View style={event}>
        <Text fontWeight="bold" style={eventsText}>
          This is where the events will be.
        </Text>
      </View>
    </Layout>
  );
};

const eventsStyle = StyleSheet.create({
  event: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  eventsText: {
    textAlign: "center",
  },
});
