import React from "react";
import { Text, themeColor, useTheme } from "react-native-rapi-ui";

export default (props) => {
  const { isDarkmode } = useTheme();
  const { focused, title } = props;

  const tabBarTextStyles = {
    marginBottom: 5,
    color: focused
      ? isDarkmode
        ? themeColor.white100
        : themeColor.primary
      : "rgb(143, 155, 179)",
    fontSize: 10,
  };

  return (
    <Text fontWeight="bold" style={tabBarTextStyles}>
      {title}
    </Text>
  );
};
