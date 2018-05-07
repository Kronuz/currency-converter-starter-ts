import * as React from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { connect, Dispatch } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';

import { Actions } from '../actions/currencies';
import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';
import { State } from '../reducers';

interface CurrencyListProps {
  dispatch: Dispatch<any>;
  navigation: NavigationScreenProp<any>;
  baseCurrency: string;
  quoteCurrency: string;
  primaryColor: string;
}

class CurrencyList extends React.Component<CurrencyListProps> {
  private handlePress = (currency: string) => {
    const { type } = this.props.navigation.state.params;
    if (type === 'base') {
      this.props.dispatch(Actions.changeBaseCurrency(currency));
    } else if (type === 'quote') {
      this.props.dispatch(Actions.changeQuoteCurrency(currency));
    }
    this.props.navigation.goBack(null);
  };

  public render() {
    let comparisonCurrency = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === 'quote') {
      comparisonCurrency = this.props.quoteCurrency;
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={this.props.primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: State) => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
  primaryColor: state.theme.primaryColor,
});

export default connect(mapStateToProps)(CurrencyList);
