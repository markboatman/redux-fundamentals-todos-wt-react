import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { availableColors, capitalize } from '../filters/colors'
import { StatusFilters } from '../filters/filtersSlice'

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's'

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  )
}
// This is a react element that has the JSX for the
// 3 filters and then renders the 3 li filters that
// are in renderedFilters in the main render method
const StatusFilter = ({ value: status, onChange }) => {
  // build a list of filter choices
  // Object.keys returns an array of keys then call map on
  // new key array passing each key to the map function
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    // for each filter
    const value = StatusFilters[key]
    // onChange = Footer.onStatusFilterChange
    const handleClick = () => onChange(value)
    const className = value === status ? 'selected' : ''

    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    )
  })

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  )
}

const ColorFilters = ({ value: colors, onChange }) => {
  const renderedColors = availableColors.map((color) => {
    const checked = colors.includes(color)
    const handleChange = () => {
      const changeType = checked ? 'removed' : 'added'
      onChange(color, changeType)
    }

    return (
      <label key={color}>
        <input
          type="checkbox"
          name={color}
          checked={checked}
          onChange={handleChange}
        />
        <span
          className="color-block"
          style={{
            backgroundColor: color,
          }}
        ></span>
        {capitalize(color)}
      </label>
    )
  })

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">{renderedColors}</form>
    </div>
  )
}

const Footer = () => {
  const dispatch = useDispatch()
  const todosRemaining = useSelector((state) => {
    console.log('In Footer, current todos: ', state.todos)
    const uncompletedTodos = state.todos.filter((todo) => !todo.completed)
    return uncompletedTodos.length
  })

  const { status, colors } = useSelector((state) => state.filters)

  const onColorFilterChange = (color, changeType) => {
    console.log('Color change: ', { color, changeType })
    dispatch({
      type: 'filters/colorFilterChanged',
      payload: { color, changeType },
    })
  }

  const onStatusFilterChange = (status) => {
    console.log('Status change: ', status)
    dispatch({ type: 'filters/statusFilterChanged', payload: status })
  }

  const onMarkCompletedClicked = () => dispatch({ type: 'todos/allCompleted' })
  const onClearCompletedClicked = () =>
    dispatch({ type: 'todos/completedCleared' })

  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button" onClick={onMarkCompletedClicked}>
          Mark All Completed
        </button>
        <button className="button" onClick={onClearCompletedClicked}>
          Clear Completed
        </button>
      </div>
      {/* These child compnents are defined in this file */}
      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusFilterChange} />
      <ColorFilters value={colors} onChange={onColorFilterChange} />
    </footer>
  )
}

export default Footer
