import { combineReducers } from 'redux';
import * as currencies from './currencies';
import * as theme from './theme';

export interface State {
  currencies: currencies.State;
  theme: theme.State;
}

const reducers = combineReducers({
  currencies: currencies.reducer,
  theme: theme.reducer,
});

export default reducers;
