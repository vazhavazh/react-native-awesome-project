import 'react-native-gesture-handler';
import React from "react";
import { useFonts } from 'expo-font';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/HomeScreen/HomeScreen';
import MapScreen from './src/screens/MapScreen/MapScreen';
import PostsScreen from './src/screens/PostsScreen/PostsScreen';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto 400': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto 500': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto 700': require('./assets/fonts/Roboto-Bold.ttf')
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="MapScreen" component={MapScreen} />
        <MainStack.Screen name="PostsScreen" component={PostsScreen} />
        <MainStack.Screen name="CommentsScreen" component={CommentsScreen}
          />

      </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}






