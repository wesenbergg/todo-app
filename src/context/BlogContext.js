import dataContext from './dataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return state.concat(
          { id: state.length+1, title: action.payload.title, content: action.payload.content }
        )
    case 'update_blogpost':
      return state.map(e => e.id === action.payload.id ? action.payload: e)
    case 'delete_blogpost':
      return state.filter(e => e.id !== action.payload)
    default:
      return state
  }
}

const addBlog = (dispatch) => (title, content, callback) => {
  dispatch({ type: 'add_blogpost', payload: {title, content} })
  callback()
}

const updateBlog = (dispatch) => async (newObject, callback) => {
  await dispatch({ type: 'update_blogpost', payload: newObject })
  callback()
}

const deleteBlog = (dispatch) => (id) => {
  dispatch({ type: 'delete_blogpost', payload: id })
}


export const { Context, Provider } = dataContext(
  blogReducer, //reducer
  { addBlog, deleteBlog, updateBlog }, //actions
  [{ title: `Post #1`, id: -1, content: 'lorem ipsum' }] //initial state
)