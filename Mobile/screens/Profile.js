import { StyleSheet, View } from "react-native";
import { Layout, Text } from "react-native-rapi-ui";

export default function ({ navigation }) {
  return (
    <Layout>
      <View style={profileStyles.profile}>
        <Text>This is where the profile will be</Text>
      </View>
    </Layout>
  );
}

const profileStyles = StyleSheet.create({
  profile: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
