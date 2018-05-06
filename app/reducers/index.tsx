import { combineReducers } from 'redux';
import * as currencies from './currencies';
import * as theme from './theme';

export interface State {
  currencies: currencies.Currencies;
  theme: theme.Theme;
}

const reducers = combineReducers({
  currencies: currencies.reducer,
  theme: theme.reducer,
});

export default reducers;
