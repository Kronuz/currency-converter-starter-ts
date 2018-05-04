import * as React from 'react';
import { Image, Text, TouchableOpacity, View, ButtonProps } from 'react-native';

import imageIcon from './images/icon.png';
import styles from './styles';

const ClearButton = ({title, onPress}: ButtonProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image resizeMode="contain" style={styles.icon} source={imageIcon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default ClearButton;
