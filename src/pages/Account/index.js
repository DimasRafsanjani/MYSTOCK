import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import DotVector from '../../../assets/images/dot_vector.svg';
import RoundedGradient from '../../../assets/images/RoundedGradient.png';
import pfp from '../../../assets/images/ProfilePic.png';
import NavHome from '../../../assets/images/nav-home.svg';
import NavNotify from '../../../assets/images/nav-notify.svg';
import NavAccount from '../../../assets/images/nav-account.svg';
import NavSettings from '../../../assets/images/nav-settings.svg';
import BottomGradient from '../../../assets/images/bottomgradient.svg';

const index = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.wrappergradient}>
          <Image source={RoundedGradient} style={styles.gradient} />
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>Profil</Text>
          <DotVector />
        </View>
        <View style={styles.content}>
          <View style={styles.wrapperbox}>
            <View style={styles.box}>
              <View style={styles.wrapperpfp}>
                <Image source={pfp} style={styles.pfp} />
              </View>
              <View style={styles.inner}>
                <Text style={styles.name}>Riki Maulana</Text>
                <Text style={styles.nik}>0037094006</Text>
                <Text style={styles.category}>Kelas</Text>
                <Text style={styles.record}>XI</Text>
                <View style={styles.line} />
                <Text style={styles.category}>Jurusan</Text>
                <Text style={styles.record}>Teknik Komputer Jaringan</Text>
                <View style={styles.line} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <NavHome style={styles.navicon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <NavNotify style={styles.navicon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Account')}>
          <NavAccount style={styles.navicon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <NavSettings style={styles.navicon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060A6E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 32,
    paddingBottom: 36,
  },
  title: {
    paddingTop: 3,
    paddingLeft: 38,
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: 'white',
  },
  wrappergradient: {
    alignItems: 'center',
  },
  gradient: {
    position: 'absolute',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 107,
  },
  wrapperpfp: {
    flex: 1,
    alignItems: 'center',
  },
  pfp: {
    width: 142,
    height: 142,
    position: 'absolute',
    bottom: 6,
  },
  wrapperbox: {
    flex: 2,
    alignItems: 'flex-start',
  },
  box: {
    width: 289,
    height: 350,
    backgroundColor: 'white',
    borderRadius: 32,
  },
  inner: {
    flex: 4,
    paddingTop: 6,
  },
  name: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    textAlign: 'center',
  },
  nik: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    textAlign: 'center',
  },
  category: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    color: '#C0BFC3',
    paddingTop: 17,
    paddingLeft: 36,
  },
  line: {
    width: 223.5,
    height: 2,
    backgroundColor: '#C4C4C4',
    alignSelf: 'center',
  },
  record: {
    fontFamily: 'Montserrat-Light',
    fontSize: 12,
    color: 'black',
    paddingLeft: 44,
  },
  nav: {
    flex: 0.1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  navicon: {
    width: 30,
    height: 30,
  },
  bottom: {
    position: 'absolute',
    bottom: 1,
  },
});
