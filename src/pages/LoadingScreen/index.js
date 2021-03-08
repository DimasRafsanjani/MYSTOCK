import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LogoSekolah from '../../../assets/images/logo_sekolah.svg';
import Doodles from '../../../assets/images/doodles.svg';
import GradientTop from '../../../assets/images/gradienttop.svg';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const LoadingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <GradientTop style={styles.gradienttop} />
      <View style={styles.align}>
        <Text style={styles.header}>Selamat Datang di MYSTOCK</Text>
        <Text style={styles.text}>
          Aplikasi peminjaman alat untuk siswa siswi SMKN 1 Sumedang
        </Text>
      </View>
      <View style={styles.page}>
        <View style={styles.vectorpagewrapper}>
          <View style={styles.onpagevector} />
          <View style={styles.offpagevector} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Welcome1')}>
          <Text style={styles.buttontext}>Selanjutnya</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const LoadingScreen1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <GradientTop style={styles.gradienttop} />
      <View style={styles.align}>
        <Text style={styles.header}>Peminjaman Lebih Efektif dan Cepat</Text>
        <Text style={styles.text}>
          Peminjaman yang bisa dilakukan lebih efektif yang bisa melihat stoknya
          terlebih dahulu
        </Text>
      </View>
      <View style={styles.page}>
        <View style={styles.vectorpagewrapper}>
          <View style={styles.offpagevector} />
          <View style={styles.onpagevector} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Auth')}>
          <Text style={styles.buttontext}>Masuk</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={LoadingScreen} />
      <Stack.Screen name="Welcome1" component={LoadingScreen1} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060A6E',
  },
  gradienttop: {
    flex: 1,
    alignSelf: 'flex-end',
  },
  align: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 6,
    paddingRight: 6,
  },
  header: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    color: 'white',
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
    paddingLeft: 41,
    paddingRight: 50,
  },
  page: {
    marginTop: 22,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  vectorpagewrapper: {
    width: 51,
    height: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  offpagevector: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5 / 2,
    borderColor: 'white',
    width: 5,
    height: 5,
  },
  onpagevector: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'white',
    width: 8,
    height: 8,
  },
  button: {
    width: 131,
    height: 39,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    elevation: 5,
  },
  buttontext: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
});
export default App;
