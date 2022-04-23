import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { themeColor, useTheme } from "react-native-rapi-ui";
import EventsNav from "./ScreenNavigation/Events";
import ScannerNav from "./ScreenNavigation/Scanner";
import SettingsNav from "./ScreenNavigation/Settings";
import ProfileNav from "./ScreenNavigation/Profile";

const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  const { isDarkmode } = useTheme();
  const { Navigator } = Tabs;
  const darkMode = {
    borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
    backgroundColor: isDarkmode ? themeColor.dark200 : "#ffffff",
  };

  const screenOptions = {
    headerShown: false,
    tabBarStyle: darkMode,
  };

  return (
    <Navigator screenOptions={screenOptions}>
      {EventsNav}
      {ProfileNav}
      {ScannerNav}
      {SettingsNav}
    </Navigator>
  );
};
export default MainTabs;
