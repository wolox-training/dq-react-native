export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publisher: string;
  year: string;
  image: Image;
}

interface Image {
  url: string | null;
}

export interface BookState {
  books: Book[];
  booksLoading: boolean;
  booksError: string | null;
  bookSearch: string;
}
