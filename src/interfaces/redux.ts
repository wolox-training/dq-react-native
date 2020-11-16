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
