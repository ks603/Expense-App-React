import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter } from '../actions/filters'

const ExpenseListFilters = (props) => {
  return (
    <div>
      <input 
        type="text" 
        value={props.filters.text} 
        onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value))
      }} />
      <select 
      value={props.filters.sortBy}
      onChange={(e) => {
        
      }}
      >
        <option>Date</option>
        <option>Amount</option>
      </select>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}


export default connect(mapStateToProps)(ExpenseListFilters)