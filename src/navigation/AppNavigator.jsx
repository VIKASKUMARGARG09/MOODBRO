import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import SplashScreen from '../screens/SplashScreen';
import FetchingDataScreen from '../screens/FetchingDataScreen';
import QuoteScreen from '../screens/QuoteScreen';



const Stack = createStackNavigator();

const TestScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple' }}>
    <Text style={{ color: 'white', fontSize: 20 }}>Test Screen Renders ✅</Text>
  </View>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="FetchingData" component={FetchingDataScreen} />
      <Stack.Screen name="Quote" component={QuoteScreen} />

    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;