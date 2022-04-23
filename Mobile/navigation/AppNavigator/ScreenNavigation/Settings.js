import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarText from "../../../components/TabBarText";
import TabBarIcon from "../../../components/TabBarIcon";
import Settings from "../../../screens/Settings";

const Screen = createBottomTabNavigator().Screen;

const SettingsNav = (
  <Screen
    name="Settings"
    component={Settings}
    options={{
      tabBarLabel: ({ focused }) => (
        <TabBarText focused={focused} title="Settings" />
      ),
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} icon="settings" />
      ),
    }}
  />
);

export default SettingsNav