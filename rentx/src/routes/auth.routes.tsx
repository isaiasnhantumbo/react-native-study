import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Confirmation } from "../screens/Confirmation";
import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "../screens/SignUp/FirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SecondStep";
import { Splash } from "../screens/Splash";

export function AuthRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
       <Screen name="Splash" component={Splash} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
    </Navigator>
  );
}
