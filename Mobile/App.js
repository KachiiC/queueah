import AppNavigator from "./navigation/AppNavigator";
import { ThemeProvider } from "react-native-rapi-ui";

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
