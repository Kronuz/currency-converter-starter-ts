import { Actions, ActionTypes } from '../actions/currencies';

export interface Rates {
  readonly [currency: string]: number,
}

export interface Conversion {
  readonly isFetching: boolean,
  readonly date: string,
  readonly rates: Rates,
}

export interface Conversions {
  readonly [currency: string]: Conversion,
}

export interface Currencies {
  readonly baseCurrency: string;
  readonly quoteCurrency: string;
  readonly amount: number;
  readonly conversions: Conversions;
  readonly error?: string;
}

export const initialState: Currencies = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
};

const setConversions = (state: Currencies, currency: string) => {
  let conversion = state.conversions[currency];
  if (!conversion) {
    conversion = {
      isFetching: true,
      date: '',
      rates: {},
    };
  }
  return {
    ...state.conversions,
    [currency]: conversion,
  };
};

export const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.CHANGE_CURRENCY_AMOUNT: {
      const {payload: amount} = action;
      return {
        ...state,
        amount: amount || 0,
      };
    }
    case ActionTypes.SWAP_CURRENCY: {
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };
    }
    case ActionTypes.CHANGE_BASE_CURRENCY: {
      const {payload: currency} = action;
      return {
        ...state,
        baseCurrency: currency,
        conversions: setConversions(state, currency),
      };
    }
    case ActionTypes.CHANGE_QUOTE_CURRENCY: {
      const {payload: currency} = action;
      return {
        ...state,
        quoteCurrency: currency,
        conversions: setConversions(state, currency),
      };
    }
    case ActionTypes.GET_INITIAL_CONVERSION: {
      return {
        ...state,
        conversions: setConversions(state, state.baseCurrency),
      };
    }
    case ActionTypes.CONVERSION_RESULT: {
      const {payload: result} = action;
      return {
        ...state,
        baseCurrency: result.base,
        conversions: {
          ...state.conversions,
          [result.base]: {
            ...result,
            isFetching: false,
          },
        },
      };
    }
    case ActionTypes.CONVERSION_ERROR: {
      const {payload: error} = action;
      return {
        ...state,
        error,
      };
    }
    default: {
      return state;
    }
  }
};
