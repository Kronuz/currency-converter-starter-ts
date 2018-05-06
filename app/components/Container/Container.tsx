import * as React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import styles from './styles';

interface ContainerProps {
  children: any;
  backgroundColor: string;
}

const Container = ({ children, backgroundColor }: ContainerProps) => {
  const containerStyles = [styles.container];
  if (backgroundColor) {
    containerStyles.push({ backgroundColor });
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={containerStyles}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default Container;
