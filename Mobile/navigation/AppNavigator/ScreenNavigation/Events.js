import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarText from "../../../components/TabBarText";
import TabBarIcon from "../../../components/TabBarIcon";
import Events from '../../../screens/Events'

const Screen = createBottomTabNavigator().Screen;

const EventsNav = (
  <Screen
    name="Events"
    component={Events}
    options={{
      tabBarLabel: ({ focused }) => (
        <TabBarText focused={focused} title="Events" />
      ),
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} icon="calendar" />
      ),
    }}
  />
);

export default EventsNav