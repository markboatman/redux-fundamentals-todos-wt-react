import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import TodoListItem from './TodoListItem'

const getTodosFilterOnStatus = (arTodos, statusFilter) => {
  console.log('In selectTodosFilterOnStatus, todos are: ', arTodos)
  console.log('In selectTodosFilterOnStatus, statusFilter is : ', statusFilter)
  if (statusFilter !== 'all') {
    let filteredTodos
    if (statusFilter === 'active') {
      filteredTodos = arTodos.filter((todo) => todo.completed === false)
      return filteredTodos
    } else if (statusFilter === 'completed') {
      filteredTodos = arTodos.filter((todo) => todo.completed === true)
      return filteredTodos
    }
  }
  return arTodos
}

const getTodosFilterOnColor = (arTodos, arColorFilters) => {
  console.log('In selectTodosFilterOnColor, arTodos is: ', arTodos)
  console.log(
    'In selectTodosFilterOnColor, arColorFilters is: ',
    arColorFilters
  )
  let filteredTodos
  if (arColorFilters.length !== 0) {
    filteredTodos = arTodos.filter((todo) => {
      if (todo.color) {
        // return truthy
        return arColorFilters.find((color) => color === todo.color)
      } else {
        return false
      }
    })
    return filteredTodos
  }
  return arTodos
}

const selectFilteredTodoIds = (state) => {
  let arFilteredTodos = getTodosFilterOnStatus(
    state.todos,
    state.filters.status
  )
  arFilteredTodos = getTodosFilterOnColor(arFilteredTodos, state.filters.colors)
  return arFilteredTodos.map((todo) => todo.id)
}

const TodoList = () => {
  const todoIds = useSelector(selectFilteredTodoIds, shallowEqual)
  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
