import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import React from 'react';

import styles from './styles';
import colors from '../../theme/colors';
import {useSigninUserMutation} from '../../store/services/authApi';
import {MaterialIcons} from '@expo/vector-icons';

import {pw} from '../../constant/responsive';
const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [signinUser, { isLoading, error}] = useSigninUserMutation();
  const handleLogin = async () => {
    if (email === '' || password === '') {
      Alert.alert('Please enter email and password');
    } else {
      const sendData = {
        email,
        password,
      };
      const resData = await signinUser(sendData);

      if (!isLoading) {
        if (resData?.data?.success === true) {
          navigation.replace('App');
        } else {
          Alert.alert(resData?.error?.data?.message);
        }
      }
    }
  };
  
  return (
    <ScrollView style={styles.container}>
    <KeyboardAvoidingView
    style = {{ flex: 1 }}
    {...(Platform.OS === 'ios' && { behavior: 'padding' })}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor={colors.white}
                placeholder="Email Address"
                onChangeText={text => setEmail(text)}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.passInputContainer}>
                <TextInput
                  keyboardType="default"
                  secureTextEntry={!isPasswordVisible}
                  onChangeText={text => setPassword(text)}
                  value={password}
                  placeholderTextColor={colors.white}
                  placeholder="Password"
                  style={styles.inputPass}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                  style={styles.eyeBtn}>
                  <MaterialIcons
                    name={!isPasswordVisible ? 'visibility' : 'visibility-off'}
                    size={pw('6%')}
                    color={colors.white}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={handleLogin} style={styles.button}>
                {isLoading ? (
                  <ActivityIndicator size="small" color={colors.white} />
                ) : (
                  <Text style={styles.buttonText}>Login</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
          </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Login;
