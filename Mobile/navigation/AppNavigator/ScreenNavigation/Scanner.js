import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarText from "../../../components/TabBarText";
import TabBarIcon from "../../../components/TabBarIcon";
import Scanner from "../../../screens/Scanner";

const Screen = createBottomTabNavigator().Screen;

const ScannerNav = (
  <Screen
    name="Scanner"
    component={Scanner}
    options={{
      tabBarLabel: ({ focused }) => (
        <TabBarText focused={focused} title="Scanner" />
      ),
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} icon="qr-code-sharp" />
      ),
    }}
  />
);

export default ScannerNav;
