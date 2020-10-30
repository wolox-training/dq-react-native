export interface AuthState {
  token: string | null;
  loginLoading: boolean;
  loginError: string | null;
}
