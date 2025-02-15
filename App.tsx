import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/loginScreen';
import HomeScreen from './screens/homeScreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';

enableScreens();

GoogleSignin.configure({
  webClientId:
    '368154632146-b6nlp09qevquedigdlegqumeg7ija209.apps.googleusercontent.com', // Ganti dengan Web Client ID dari Firebase
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

// ✅ Definisikan tipe navigasi
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
