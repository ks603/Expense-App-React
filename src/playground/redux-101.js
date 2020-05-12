import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1} = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy
  }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy
  }
}

const resetCount = () => {
  return {
    type: 'RESET'
  }
}

const setCount = ({ count = 1 }) => {
  return {
    type: 'SET',
    count
  }
}

const countReducer = ((state = {count: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return {
      count: state.count + action.incrementBy
    }
  } else if (action.type === 'DECREMENT') {
    return {
      count: state.count - action.decrementBy
    }
  } else if (action.type === 'RESET') {
    return {
      count: 0
    }
  } else if (action.type === 'SET') {
    return {
      count: action.count
    }
  } return state
})

const store = createStore(countReducer)

store.subscribe(() => {
  console.log(store.getState())

})

store.dispatch(incrementCount( {incrementBy: 7}))

store.dispatch(decrementCount({decrementBy: 22}))

store.dispatch(resetCount())

store.dispatch(setCount({ count: 105 }))

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 10
// })
// store.dispatch({
//   type: 'INCREMENT'
// })
// store.dispatch({
//   type: 'RESET'
// })
// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 5
// })
// store.dispatch({
//   type: 'SET',
//   count: 101
// })
