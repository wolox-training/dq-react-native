import api from '@config/api';

export default {
  getBooks: () => api.get('/books'),
  getBookDetail: (id: number) => api.get('/books', { id })
};
