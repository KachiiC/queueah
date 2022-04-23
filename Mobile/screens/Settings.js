import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <View
        style={settingsStyle.settings}
      >
        <Section>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Settings
            </Text>
            <Button
              text="Screen 2"
              onPress={() => navigation.navigate("SecondScreen")}
              style={{
                marginTop: 10,
              }}
            />

            <Button
              text={isDarkmode ? "Light Mode" : "Dark Mode"}
              status={isDarkmode ? "success" : "warning"}
              onPress={() => {
                if (isDarkmode) {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
              style={{
                marginTop: 10,
              }}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}

const settingsStyle = StyleSheet.create({
  settings: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  }
})