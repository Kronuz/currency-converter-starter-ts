import moment from 'moment';
import * as React from 'react';
import { Text } from 'react-native';

import styles from './styles';

interface LastConvertedProps {
  date: Date,
  base: string;
  quote: string;
  conversionRate: number;
}

const LastConverted = ({ base, quote, conversionRate, date }: LastConvertedProps) => (
  <Text style={styles.smallText}>
    1 {base} = {conversionRate.toFixed(2)} {quote} as of {moment(date).format('MMM D, YYYY')}
  </Text>
);

export default LastConverted;
