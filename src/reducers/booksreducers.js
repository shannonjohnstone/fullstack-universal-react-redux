// takes in an array and the id of the item you are looking for
function findIndexOfItemFromId(array, id) {
  return array.findIndex(item => item.id === id)
}

const initState = {
  books: [{
    id: 1,
    title: 'Book Title',
    description: 'Best book ever.',
    price: 20.00
  },
  {
    id: 2,
    title: 'Book Title 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, suscipit, necessitatibus. Blanditiis atque iste tenetur rem voluptatum quia pariatur rerum, dolorum, deleniti ab, reiciendis sit veniam eaque optio earum odit..',
    price: 88.99
  },
  {
    id: 3,
    title: 'Book Title 2 has a really really really looooooong name......',
    description: 'Best book ever.',
    price: 88.99
  }]
}

export default function (state = initState, action) {
  const { type, payload } = action
  switch (type) {
    case 'GET_BOOKS': {
      return { ...state, books: [...state.books] }
    }
    case 'POST_BOOK': {
      return { books: [...state.books, ...payload] }
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
