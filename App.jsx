
import { SafeAreaProvider } from 'react-native-safe-area-context'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/splash_screen/SplashScreen';
import HomeScreen from './src/screens/home_screen/HomeScreen';
import UserListScreen from './src/screens/user_list_screen/UserListScreen';
import CounterScreen from './src/screens/counter_screen/CounterScreen'
import { NavigationContainer } from '@react-navigation/native';

const StackNavigator = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator.Navigator initialRouteName="Splash">

          <StackNavigator.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />

          <StackNavigator.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />

          <StackNavigator.Screen
            name="UserListScreen"
            component={UserListScreen}
            options={{ headerShown: false }}
          />

          <StackNavigator.Screen
            name="CounterScreen"
            component={CounterScreen}
            options={{ headerShown: false }}
          />

        </StackNavigator.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App