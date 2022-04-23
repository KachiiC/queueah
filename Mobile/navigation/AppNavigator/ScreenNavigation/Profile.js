import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarText from "../../../components/TabBarText";
import TabBarIcon from "../../../components/TabBarIcon";
import Profile from "../../../screens/Profile";

const Screen = createBottomTabNavigator().Screen;

const ProfileNav = (
  <Screen
    name="Profile"
    component={Profile}
    options={{
      tabBarLabel: ({ focused }) => (
        <TabBarText focused={focused} title="Profile" />
      ),
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} icon={"person"} />
      ),
    }}
  />
);

export default ProfileNav;
