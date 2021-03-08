import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Kertas from '../../../../assets/images/KategoriKertas.svg';
import AlatTulis from '../../../../assets/images/KategoriAlatTulis.svg';
import AlatKantor from '../../../../assets/images/KategoriAlatKantor.svg';

const Category = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.wrapcat}
        onPress={() => alert('Category Clicked!')}>
        <Kertas style={styles.innerCategory} />
        <Text style={styles.innerText}>Kertas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.wrapcat}
        onPress={() => navigation.navigate('Notification')}>
        <AlatTulis style={styles.innerCategory} />
        <Text style={styles.innerText}>Alat{'\n'}Tulis</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.wrapcat}
        onPress={() => alert('Category Clicked!')}>
        <AlatKantor style={styles.innerCategory} />
        <Text style={styles.innerText}>Alat{'\n'}Kantor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.wrapcat}
        onPress={() => alert('Category Clicked!')}>
        <Kertas style={styles.innerCategory} />
        <Text style={styles.innerText}>Default</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.wrapcat}
        onPress={() => alert('Category Clicked!')}>
        <AlatTulis style={styles.innerCategory} />
        <Text style={styles.innerText}>Default</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.wrapcat}
        onPress={() => alert('Category Clicked!')}>
        <AlatKantor style={styles.innerCategory} />
        <Text style={styles.innerText}>Default</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 25,
    flexWrap: 'wrap',
  },
  wrapcat: {
    alignItems: 'center',
    marginRight: 29,
    paddingTop: 17,
  },
  innerCategory: {
    width: 25,
    height: 25,
  },
  innerText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 11,
    color: 'white',
    textAlign: 'center',
    paddingTop: 6,
  },
});
