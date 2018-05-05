import { call, put, select, takeEvery } from 'redux-saga/effects';
import { Actions, ActionTypes } from '../actions/currencies';
import { State } from '../reducers';

// 1. Swap currency
// 2. Change base currency
// 3. Upon initial app load

const getLatestRate = (currency: string) =>
  fetch(`http://api.fixer.io/latest?base=${currency}`);

function* fetchLatestConversionRates(action: Actions) {
  try {
    let currency: string;
    switch (action.type) {
      case ActionTypes.CHANGE_BASE_CURRENCY:
      case ActionTypes.CHANGE_QUOTE_CURRENCY:
        currency = action.payload;
        break;
      default:
        currency = yield select((state: State) => state.currencies.baseCurrency);
        break;
    }
    const response = yield call(getLatestRate, currency);
    const result = yield response.json();
    if (result.error) {
      yield put(Actions.conversionError(result.error));
    } else {
      yield put(Actions.conversionResult(result));
    }
  } catch (e) {
    yield put(Actions.conversionError(e.message));
  }
}

export default function* sagas() {
  yield takeEvery(ActionTypes.SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(ActionTypes.CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(ActionTypes.GET_INITIAL_CONVERSION, fetchLatestConversionRates);
}
