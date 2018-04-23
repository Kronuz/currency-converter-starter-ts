import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import imageGear from './images/gear.png';

const Header = () => (
  <View>
    <TouchableOpacity>
      <Image resizeMode="contain" source={imageGear} />
    </TouchableOpacity>
  </View>
);

export default Header;
