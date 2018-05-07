import { createAction, ActionsUnion } from '.';

export enum ActionTypes {
  CHANGE_PRIMARY_COLOR = 'CHANGE_PRIMARY_COLOR',
}

export const Actions = {
  changePrimaryColor: (color: string) => createAction(ActionTypes.CHANGE_PRIMARY_COLOR, color),
};

export type Actions = ActionsUnion<typeof Actions>;
