import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import SplashScreen from '../screens/SplashScreens/SplashScreen';
import FetchingDataScreen from '../screens/SplashScreens/FetchingDataScreen';
import QuoteScreen from '../screens/SplashScreens/QuoteScreen';
import Onboarding1 from '../screens/Onboarding/Onboarding1';
import Onboarding2 from '../screens/Onboarding/Onboarding2';
import Onboarding3 from '../screens/Onboarding/Onboarding3';
import Onboarding4 from '../screens/Onboarding/Onboarding4';
import Onboarding5 from '../screens/Onboarding/Onboarding5';
import SignInScreen from '../screens/LoginPages/SignInScreen';
import SignUpScreen from '../screens/LoginPages/SignUpScreen';
import ForgotPasswordScreen from '../screens/LoginPages/ForgotPasswordScreen';



const Stack = createStackNavigator();

const TestScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple' }}>
    <Text style={{ color: 'white', fontSize: 20 }}>Test Screen Renders ✅</Text>
  </View>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="FetchingData" component={FetchingDataScreen} />
      <Stack.Screen name="Quote" component={QuoteScreen} />
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
<Stack.Screen name="Onboarding2" component={Onboarding2} />
<Stack.Screen name="Onboarding3" component={Onboarding3} />
<Stack.Screen name="Onboarding4" component={Onboarding4} />
<Stack.Screen name="Onboarding5" component={Onboarding5} />
<Stack.Screen name="SignInScreen" component={SignInScreen} />
<Stack.Screen name="SignUpScreen" component={SignUpScreen} />
<Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />

    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;