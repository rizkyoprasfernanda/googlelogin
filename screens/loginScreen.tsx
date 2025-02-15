import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {signInWithGoogle} from '../lib/auth';
import {styles} from '../styles/loginStyles';

// ✅ Definisikan tipe navigasi
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = async () => {
    const result = await signInWithGoogle();

    if (result) {
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Login Failed',
        'Google Sign-In did not return a valid response.',
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
