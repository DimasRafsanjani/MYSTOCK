import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060A6E',
  },
  text: {
    paddingTop: 35,
    paddingLeft: 38,
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: 'white',
  },
});
