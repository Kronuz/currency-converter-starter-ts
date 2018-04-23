import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import imageGear from './images/gear.png';

const Header = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <Image style={styles.icon} resizeMode="contain" source={imageGear} />
    </TouchableOpacity>
  </View>
);

export default Header;
