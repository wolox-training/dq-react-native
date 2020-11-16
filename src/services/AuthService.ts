import api from '@config/api';

interface Credentials {
  user: string;
  password: string;
}

export default {
  login: ({ user, password }: Credentials) => api.post('/auth/sign_in', { email: user, password })
};
