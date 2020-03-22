import dataContext from './dataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return state.concat({ id: state.length+1, title: `Post #${state.length+1}` })
    case 'delete_blogpost':
      return state.filter(e => e.id !== action.payload)
    default:
      return state
  }
}

const addBlog = (dispatch) => () => {
  dispatch({ type: 'add_blogpost' })
}

const deleteBlog = (dispatch) => (id) => {
  dispatch({ type: 'delete_blogpost', payload: id })
}


export const { Context, Provider } = dataContext(
  blogReducer, //reducer
  { addBlog, deleteBlog }, //actions
  [{ title: `Post #1`, id: -1 }] //initial state
)