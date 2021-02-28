import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import DotVector from '../../../assets/images/dot_vector.svg';
import NesasImage from '../../../assets/images/NesasPic.svg';
import CategoryContent from './Category';
import NavHome from '../../../assets/images/nav-home.svg';
import NavNotify from '../../../assets/images/nav-notify.svg';
import NavAccount from '../../../assets/images/nav-account.svg';
import NavSettings from '../../../assets/images/nav-settings.svg';
import BottomGradient from '../../../assets/images/bottomgradient.svg';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>MYSTOCK</Text>
            <DotVector style={styles.dot} />
          </View>
          <View style={{alignItems: 'center'}}>
            <NesasImage style={styles.pic} />
          </View>
          <View style={styles.category}>
            <Text style={styles.headtext}>Kategori</Text>
            <CategoryContent />
          </View>
          <View style={styles.allitem}>
            <Text style={styles.headtext}>Semua Item</Text>
            <View style={styles.itemwrapper}>
              <View style={styles.item} />
              <View style={styles.item} />
              <View style={styles.item} />
              <View style={styles.item} />
              <View style={styles.item} />
              <View style={styles.item} />
              <View style={styles.item} />
              <View style={styles.item} />
              <View style={styles.item} />
              <View style={styles.item} />
              <View style={styles.item} />
              <View style={styles.item} />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.push('Home')}>
          <NavHome style={styles.navicon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <NavNotify style={styles.navicon} onPress={() => alert('Notifications Navbar Clicked!')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <NavAccount
            style={styles.navicon}
            onPress={() => alert('Account Navbar Clicked!')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <NavSettings
            style={styles.navicon}
            onPress={() => alert('Settings Navbar Clicked!')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#060A6E'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 32,
  },
  dot: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    paddingTop: 7,
    paddingLeft: 38,
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: 'white',
  },
  pic: {
    width: 360,
    height: 160,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  category: {
    flex: 1,
    paddingLeft: 41,
    paddingTop: 17,
  },
  headtext: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: 'white',
  },
  allitem: {
    flex: 2,
    paddingLeft: 41,
    paddingRight: 41,
  },
  itemwrapper: {
    paddingTop: 23,
    paddingBottom: 7,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    width: 132,
    height: 157,
    backgroundColor: 'white',
    borderRadius: 18,
    marginBottom: 16,
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
});
