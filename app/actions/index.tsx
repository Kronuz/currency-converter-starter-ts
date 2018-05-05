import { ReducersMapObject } from 'redux';

// From https://medium.com/@martin_hotell/improved-redux-type-safety-with-typescript-2-8-2c11a8062575

export interface ActionTyped<T extends string> {
  type: T;
}

export interface AnyActionTyped<T extends string, P> extends ActionTyped<T> {
  payload: P,
}

export function createAction<T extends string>(type: T): ActionTyped<T>;
export function createAction<T extends string, P>(type: T, payload: P): AnyActionTyped<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
}

export type ActionsUnion<A extends ReducersMapObject> = ReturnType<A[keyof A]>;
