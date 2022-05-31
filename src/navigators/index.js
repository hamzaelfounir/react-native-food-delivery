import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SplashScreen, WelcomeScreen, SigninScreen, SignupScreen} from "../screens";

const Stack = createStackNavigator();

const Navigators = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="signin" component={SigninScreen} />
            <Stack.Screen name="signup" component={SignupScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigators;