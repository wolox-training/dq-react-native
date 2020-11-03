export interface AuthState {
  headers: Headers | null;
  loginLoading: boolean;
  loginError: string | null;
}

interface Headers {
  'access-token': string;
  client: string;
  uid: string;
}
