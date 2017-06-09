// takes in an array and the id of the item you are looking for
function findIndexOfItemFromId(array, id) {
  return array.findIndex(item => item.id === id)
}

const initState = {
  books: [],
  isSet: false,
  isFetching: false,
  error: null
}

export default function (state = initState, action) {
  const { type, payload } = action
  switch (type) {
    case 'FETCH_BOOKS': {
      return {
        ...state,
        isSet: action.isSet,
        isFetching: action.isFetching
      }
    }
    case 'FETCH_BOOKS_SUCCESS': {
      return {
        ...state,
        isSet: action.isSet,
        isFetching: action.isFetching,
        books: [...state.books, ...action.books]
      }
    }
    case 'FETCH_BOOKS_FAILED': {
      return {
        ...state,
        isSet: action.isSet,
        isFetching: action.isFetching,
        error: action.error
      }
    }
    case 'POST_BOOK': {
      return {
        ...state,
        isSet: action.isSet,
        isFetching: action.isFetching
      }
    }
    case 'POST_BOOK_SUCCESS': {
      return {
        ...state,
        // books: [...state.books, ...payload],
        isSet: action.isSet,
        isFetching: action.isFetching
      }
    }
    case 'POST_BOOK_FAILED': {
      return {
        ...state,
        isSet: action.isSet,
        isFetching: action.isFetching,
        error: action.error
      }
    }
    case 'DELETE_BOOK': {
      const bookIndexToDelete = findIndexOfItemFromId(state.books, payload.id)
      return {
        books: [...state.books.slice(0, bookIndexToDelete), ...state.books.slice(bookIndexToDelete + 1)]
      }
    }
    case 'UPDATE_BOOK': {
      const bookIndexToUpdate = findIndexOfItemFromId(state.books, payload.id)
      const updatedBook = { ...state.books[bookIndexToUpdate], title: payload.title }
      return {
        books: [...state.books.slice(0, bookIndexToUpdate), updatedBook, ...state.books.slice(bookIndexToUpdate + 1)]
      }
    }
    default: {
      return state
    }
  }
}
