import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const addExpense = (
  {
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0 
  } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
}

const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text
  }
}


const expensesReducerDefaultState = []
const filterReducerDefaultState = {
  text: '', 
  sortBy: 'date', 
  startDate: undefined, 
  endDate: undefined
}

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE': 
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
      default:
        return state
    }
  }

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    default:
      return state
  }
}




const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
)

store.subscribe(() => {
  console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100 }))
const expenseTwo = store.dispatch(addExpense({ description: 'cofee', amount: 400 }))

store.dispatch(removeExpense({ id: expenseOne.expense.id }))

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 300 }))
store.dispatch(setTextFilter('rentd'))
store.dispatch(setTextFilter())

const demoState = {
  expenses: [{
    id: 'sadsafr',
    description: 'january rent',
    note: 'this was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}

const user = {
  name: 'george',
  date: 'dsdsdsa'
}

console.log(user)