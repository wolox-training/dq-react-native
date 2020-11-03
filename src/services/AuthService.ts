import api from '@config/api';

export default {
  login: (user: string, password: string) => api.post('/auth/sign_in', { email: user, password })
};
