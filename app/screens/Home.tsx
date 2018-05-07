import * as React from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { connect, Dispatch } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';

import { Actions } from '../actions/currencies';
import { State } from '../reducers';
import { connectAlert, AlertContext } from '../components/Alert';
import { ClearButton } from '../components/Button';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { LastConverted } from '../components/Text';
import { InputWithButton } from '../components/TextInput';

interface HomeProps extends AlertContext {
  dispatch: Dispatch<any>;
  navigation: NavigationScreenProp<any>;

  baseCurrency: string;
  quoteCurrency: string;
  amount: number;
  conversionRate: number;
  isFetching: boolean;
  lastConvertedDate: Date;
  primaryColor: string;
  currencyError: string;
}

class Home extends React.Component<HomeProps> {
  public componentWillMount() {
    this.props.dispatch(Actions.getInitialConversion());
  }

  public componentWillReceiveProps(nextProps: HomeProps) {
    if (
      nextProps.currencyError &&
      this.props.currencyError !== nextProps.currencyError
    ) {
      this.props.alertWithType('error', 'Error', nextProps.currencyError);
    }
  }

  public render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    if (this.props.isFetching) {
      quotePrice = '...';
    }
    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            textColor={this.props.primaryColor}
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            defaultValue={quotePrice}
            editable={false}
            textColor={this.props.primaryColor}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            date={this.props.lastConvertedDate}
            conversionRate={this.props.conversionRate}
          />
          <ClearButton
            title="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }

  private handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base',
    });
  };

  private handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quote',
    });
  };

  private handleTextChange = (amount: string) => {
    this.props.dispatch(
      Actions.changeCurrencyAmount(parseFloat(amount)),
    );
  };

  private handleSwapCurrency = () => {
    this.props.dispatch(Actions.swapCurrency());
  };

  private handleOptionPress = () => {
    this.props.navigation.navigate('Options');
  };
}

const mapStateToProps = (state: State) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date(),
    primaryColor: state.theme.primaryColor,
    currencyError: state.currencies.error,
  };
};

export default connect(mapStateToProps)(connectAlert(Home));
