import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AuthScene = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.align}>
        <TextInput
          style={styles.login}
          autoCapitalize={'none'}
          keyboardType={'number-pad'}
          placeholder="NISN"
        />
      </View>
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttontext}>Masuk</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  align: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  login: {
    height: 39,
    width: 285,
    borderColor: '#060A6E',
    borderWidth: 1,
    backgroundColor: 'white',
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    paddingLeft: 21,
    borderRadius: 30,
    elevation: 5,
  },
  button: {
    width: 131,
    height: 39,
    backgroundColor: '#060A6E',
    borderRadius: 15,
    marginTop: 29,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttontext: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: 'white',
  },
});
export default AuthScene;
