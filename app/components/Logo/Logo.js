import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';

import styles from './styles';
import imageBackground from './images/background.png';
import imageLogo from './images/logo.png';

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      resizeMode="contain"
      style={styles.containerImage}
      source={imageBackground}
    >
      <Image resizeMode="contain" style={styles.image} source={imageLogo} />
    </ImageBackground>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
