const initialState = { counter: 0 }

// reducer
function counter(state = initialState.counter, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export default counter
