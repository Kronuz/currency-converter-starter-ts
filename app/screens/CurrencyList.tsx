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
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }

  private keyExtractor = (item: string) => item;

  private renderItem = ({ item }: { item: string }) => {
    const { type } = this.props.navigation.state.params;
    const comparisonCurrency = type === 'quote' ? this.props.quoteCurrency : this.props.baseCurrency;
    const handlePress = type === 'quote' ? this.handlePressQuoteCurrency : this.handlePressBaseCurrency;
    return (
      <ListItem
        text={item}
        selected={item === comparisonCurrency}
        onPress={handlePress}
        iconBackground={this.props.primaryColor}
      />
    );
  };

  private handlePressBaseCurrency = (currency: string) => {
    this.props.dispatch(Actions.changeBaseCurrency(currency));
    this.props.navigation.goBack(null);
  };

  private handlePressQuoteCurrency = (currency: string) => {
    this.props.dispatch(Actions.changeQuoteCurrency(currency));
    this.props.navigation.goBack(null);
  };
}

const mapStateToProps = (state: State) => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
  primaryColor: state.theme.primaryColor,
});

export default connect(mapStateToProps)(CurrencyList);
