import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';

const Auth = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Welcome Back!</Text>
      <Text style={styles.descriptionText}>Sign in to your account!</Text>
      <TextInput
        onChange={setEmail}
        value={email}
        style={styles.textEmailInput}
        placeholder="email"
      />
      <TextInput
        secureTextEntry={true}
        onChange={setPassword}
        value={password}
        style={styles.textPasswordInput}
        placeholder="password"
      />
      <Text style={styles.forgotPassword}>Forgot password?</Text>
      {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> */}
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate('Selector')}>
        <Text style={styles.signInText}>Sing In</Text>
      </TouchableOpacity>
      {/* </View> */}

      <Text style={{marginTop: 40, marginLeft: 100}}>
        Don't have an account?{' '}
        <Text
          style={{color: '#1E6738'}}
          onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    fontWeight: '500',
    marginLeft: '60%',
  },
  headingText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 40,
    marginTop: 30,
  },
  descriptionText: {
    marginLeft: 50,
    marginBottom: 15,
  },
  textEmailInput: {
    padding: 5,
    borderWidth: 1,
    width: '80%',
    borderRadius: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  textPasswordInput: {
    marginTop: 20,
    padding: 5,
    borderWidth: 1,
    width: '80%',
    borderRadius: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  container: {
    padding: 40,
  },
  signInButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  signInText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Auth;
