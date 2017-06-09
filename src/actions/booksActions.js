export function fetchBooksAction() {
  return {
    type: 'FETCH_BOOKS',
    isSet: false,
    isFetching: true,
  }
}

export function fetchBooksSuccessAction(books) {
  console.log('fetchBooksSuccessAction...');
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    isSet: true,
    isFetching: false,
    books,
  }
}

export function fetchBooksFailedAction() {
  return {
    type: 'FETCH_BOOKS_FAILED',
    isSet: false,
    isFetching: false,
    error: 'There was a technical issue, please try again later.'
  }
}

export function postBooksAction(books) {
  return {
    type: 'POST_BOOK',
    isPosting: true,
    isSet: false,
    books
  }
}

export function postBooksSuccessAction(books) {
  return {
    type: 'POST_BOOK_SUCCESS',
    isPosting: false,
    isSet: true,
    // payload: books
  }
}

export function postBooksFailedAction() {
  return {
    type: 'POST_BOOK_FAILED',
    isPosting: false,
    isSet: false,
    error: 'There is been a technical error, please try again later.'
  }
}

export function deleteBooks(id) {
  return {
    type: 'DELETE_BOOK',
    payload: id
  }
}

export function updateBook(book) {
  return {
    type: 'UPDATE_BOOK',
    payload: book
  }
}
