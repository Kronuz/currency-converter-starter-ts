import React, { Component } from 'react';
import { View, Text, Keyboard, Animated, Platform } from 'react-native';

import styles from './styles';
import imageLogo from './images/logo.png';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }
  componentDidMount() {
    const showListener =
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
    const hideListener =
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';
    this.keyboardShowListener = Keyboard.addListener(
      showListener,
      this.keyboardShow,
    );
    this.keyboardHideListener = Keyboard.addListener(
      hideListener,
      this.keyboardHide,
    );
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.timing(this.imageWidth, {
      toValue: styles.$smallImageSize,
      duration: ANIMATION_DURATION,
    }).start();
  };

  keyboardHide = () => {
    Animated.timing(this.imageWidth, {
      toValue: styles.$largeImageSize,
      duration: ANIMATION_DURATION,
    }).start();
  };

  render() {
    const imageStyle = [
      styles.logo,
      { width: this.imageWidth, height: this.imageWidth },
    ];
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Animated.Image
            resizeMode="contain"
            style={imageStyle}
            source={imageLogo}
          />
        </View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
