export interface AuthState {
  headers: Headers | null;
  loginLoading: boolean;
  loginError: string | null;
  sessionLoading: boolean;
}

interface Headers {
  'access-token': string;
  client: string;
  uid: string;
}
