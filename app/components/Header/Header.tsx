import PropTypes from 'prop-types';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import imageGear from './images/gear.png';
import styles from './styles';

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image style={styles.icon} resizeMode="contain" source={imageGear} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func,
};

export default Header;
