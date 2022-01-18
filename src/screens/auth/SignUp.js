import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Signup = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  return (
    <SafeAreaView>
      <Text style={styles.headingText}>Sign Up</Text>
      <Text style={styles.descriptionText}>
        Create an account and get more involved with your warehouse
      </Text>
      <TextInput
        onChange={setEmail}
        value={email}
        style={styles.textEmailInput}
        placeholder="Email"
      />
      <TextInput
        secureTextEntry={true}
        onChange={setPassword}
        value={password}
        style={styles.textPasswordInput}
        placeholder="Password"
      />
      <TextInput
        secureTextEntry={true}
        onChange={setConfirmPassword}
        value={confirmPassword}
        style={styles.textPasswordInput}
        placeholder="Re-enter Password"
      />
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>Sing Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 40,
    marginTop: 30,
  },
  descriptionText: {
    marginLeft: 40,
    marginRight: 30,
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
  signUpButton: {
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
  signUpText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Signup;
