function findIndexOfItemFromId(array, id) { return array.findIndex(item => item.id === id) } // takes in an array and the id of the item you are looking for
export function booksReducers(state = { books: [] }, action) {
  const { type, payload } = action
  switch (type) {
    case 'POST_BOOK':
      return { books: [...state.books, ...payload] }
    case 'DELETE_BOOK':
      const bookIndexToDelete = findIndexOfItemFromId(state.books, payload.id)
      return { books: [...state.books.slice(0, bookIndexToDelete), ...state.books.slice(bookIndexToDelete + 1)] }
    case 'UPDATE_BOOK':
      const bookIndexToUpdate = findIndexOfItemFromId(state.books, payload.id)
      const updatedBook = { ...state.books[bookIndexToUpdate], title: payload.title }
      return { books: [...state.books.slice(0, bookIndexToUpdate), updatedBook, ...state.books.slice(bookIndexToUpdate + 1)] }
    default:
      return state
  }
}
