import React from "react";
import { themeColor, useTheme } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default ({ icon, focused }) => {
  const { isDarkmode } = useTheme();
  const { white100, primary } = themeColor;

  return (
    <Ionicons
      name={icon}
      style={{ marginBottom: -7 }}
      size={24}
      color={focused ? (isDarkmode ? white100 : primary) : "rgb(143, 155, 179)"}
    />
  );
};
