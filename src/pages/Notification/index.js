import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from '../../../assets/images/Notifications_Icon.svg';
import DotVector from '../../../assets/images/dot_vector.svg';
import NavHome from '../../../assets/images/nav-home.svg';
import NavNotify from '../../../assets/images/nav-notify.svg';
import NavAccount from '../../../assets/images/nav-account.svg';
import NavSettings from '../../../assets/images/nav-settings.svg';

const index = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.leftheader}>
            <Icon style={styles.icon} />
            <Text style={styles.title}>Notifications</Text>
          </View>
          <DotVector style={styles.dot} />
        </View>
        <View style={styles.contentwrapper}>
          <View>
            <Text style={styles.contenttitle}>
              Proyektor merek TOSHIBA no. 03
            </Text>
            <Text style={styles.contenttext}>
              Sudah diverifikasi, silakan ambil sekarang ke gudang.
            </Text>
            <View style={styles.separator} />
          </View>
          <View>
            <Text style={styles.contenttitle}>
              Proyektor merek TOSHIBA no. 03
            </Text>
            <Text style={styles.contenttext}>
              belum dikembalikan, segera lah untuk mengembalikannya.
            </Text>
            <View style={styles.separator} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.nav}>
        <TouchableOpacity>
          <NavHome
            style={styles.navicon}
            onPress={() => navigation.navigate('Home')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <NavNotify
            style={styles.navicon}
            onPress={() => navigation.push('Notification')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <NavAccount
            style={styles.navicon}
            onPress={() => navigation.navigate('Account')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <NavSettings
            style={styles.navicon}
            onPress={() => navigation.navigate('Settings')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#060A6E'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 35,
  },
  leftheader: {
    paddingLeft: 35,
  },
  icon: {
    width: 31,
    height: 41.14,
    paddingLeft: 49,
  },
  title: {
    paddingTop: 7,
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: 'white',
  },
  contentwrapper: {
    flex: 3,
    paddingTop: 22,
    paddingLeft: 35,
    paddingRight: 24,
  },
  contenttitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: 'white',
    paddingTop: 13,
  },
  contenttext: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: 'white',
    paddingBottom: 8,
  },
  separator: {
    width: 290,
    height: 1,
    backgroundColor: 'white',
  },
  nav: {
    flex: 0.1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
