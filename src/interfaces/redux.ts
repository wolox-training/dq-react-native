import { AuthState } from './auth';
import { BookState } from './book';

export interface AppState {
  book: BookState;
  auth: AuthState;
}

export interface ReduxAction {
  type: string;
  payload: any;
  target: string;
}

export type ReduxEffect = (...args: any[]) => (state: any, action: ReduxAction) => any;
