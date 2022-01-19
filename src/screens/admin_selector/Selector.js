import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, Text} from 'react-native';

const Selector = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Choose your interest!!</Text>
      <TouchableOpacity
        style={styles.roundButton}
        onPress={() => navigation.navigate('Warehouse')}>
        <Text style={styles.text}>Warehouse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.roundButton1}>
        <Text style={styles.text}>Delivery</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 1,
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    marginTop: '490%',
    fontWeight: 'bold',
    fontSize: 30,
  },
  roundButton: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'green',
  },
  roundButton1: {
    marginTop: 20,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  text: {
    fontWeight: '600',
    color: 'white',
  },
});

export default Selector;
