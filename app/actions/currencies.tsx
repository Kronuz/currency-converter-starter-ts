import { createAction, ActionsUnion } from '.';

export enum ActionTypes {
  SWAP_CURRENCY = 'SWAP_CURRENCY',
  CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT',
  CHANGE_BASE_CURRENCY = 'CHANGE_BASE_CURRENCY',
  CHANGE_QUOTE_CURRENCY = 'CHANGE_QUOTE_CURRENCY',
  GET_INITIAL_CONVERSION = 'GET_INITIAL_CONVERSION',
  CONVERSION_RESULT = 'CONVERSION_RESULT',
  CONVERSION_ERROR = 'CONVERSION_ERROR',
};

export interface Result {
  base: string;
  date: string;
  rates: {
    [currency: string]: number;
  };
  error?: string;
}

export const Actions = {
  swapCurrency: () => createAction(ActionTypes.SWAP_CURRENCY),
  changeCurrencyAmount: (amount: number) => createAction(ActionTypes.CHANGE_CURRENCY_AMOUNT, amount),
  changeBaseCurrency: (currency: string) => createAction(ActionTypes.CHANGE_BASE_CURRENCY, currency),
  changeQuoteCurrency: (currency: string) => createAction(ActionTypes.CHANGE_QUOTE_CURRENCY, currency),
  getInitialConversion: () => createAction(ActionTypes.GET_INITIAL_CONVERSION),
  conversionResult: (result: Result) => createAction(ActionTypes.CONVERSION_RESULT, result),
  conversionError: (error: string) => createAction(ActionTypes.CONVERSION_ERROR, error),
};

export type Actions = ActionsUnion<typeof Actions>;
