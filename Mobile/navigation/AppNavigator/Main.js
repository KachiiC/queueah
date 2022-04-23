import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabs from "./MainTabs";
import SecondScreen from '../../screens/SecondScreen'

const MainStack = createNativeStackNavigator();

const Main = () => {

  const { Navigator, Screen } = MainStack;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="MainTabs" component={MainTabs} />
      <Screen name="SecondScreen" component={SecondScreen} />
    </Navigator>
  );
};

export default Main;
