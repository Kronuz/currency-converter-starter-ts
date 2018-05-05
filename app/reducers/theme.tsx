import { Actions, ActionTypes } from '../actions/theme';

export interface State {
  primaryColor: string;
}

export const initialState: State = {
  primaryColor: '#4f6d7a',
};

export const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.CHANGE_PRIMARY_COLOR: {
      const {payload: color} = action;
      return {
        ...state,
        primaryColor: color,
      };
    }
    default: {
      return state;
    }
  }
};
