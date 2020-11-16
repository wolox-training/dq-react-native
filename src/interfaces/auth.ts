export interface AuthState {
  headers: Headers | null;
  headersLoading: boolean;
  headersError: string | null;
  sessionLoading: boolean;
}

interface Headers {
  'access-token': string;
  client: string;
  uid: string;
}
