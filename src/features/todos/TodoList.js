import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import TodoListItem from './TodoListItem'

const selectTodoIds = (state) => state.todos.map((todo) => todo.id)

const selectTodoIdsNew = (state) => {
  console.log('In selectTodoIdsNew, todos are: ', state.todos)
  console.log(
    'In selectTodoIdsNew, state.filters.status is : ',
    state.filters.status
  )
  if (state.filters.status !== 'all') {
    let filteredTodos
    if (state.filters.status === 'active') {
      filteredTodos = state.todos.filter((todo) => todo.completed === false)
      return filteredTodos
    } else if (state.filters.status === 'completed') {
      filteredTodos = state.todos.filter((todo) => todo.completed === true)
      return filteredTodos
    }
  }
  // else no status filter return all
  return state.todos
  // return filteredTodos.map((todo) => todo.id)
  // state.todos.map((todo) => todo.id)
}

const TodoList = () => {
  const filteredTodos = useSelector(selectTodoIdsNew)
  console.log('In TodoList, filtered todos are: ', filteredTodos)
  // TODO need to apply status filter here
  const todoIds = useSelector(selectTodoIds, shallowEqual)
  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
