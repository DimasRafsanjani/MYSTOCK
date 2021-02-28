import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Test() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: 'blue',
    justifyContent: 'flex-start',
  },
  boxOne: {
    margin: 10,
    padding: 10,
    backgroundColor: 'red',
  },
  boxTwo: {
    padding: 10,
    backgroundColor: 'gold',
  },
  boxThree: {
    padding: 10,
    backgroundColor: 'blue',
  },
  boxFour: {
    padding: 10,
    backgroundColor: 'green',
  },
});
