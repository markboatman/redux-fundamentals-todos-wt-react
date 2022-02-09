import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import TodoListItem from './TodoListItem'

const selectTodoIds = (state) => {
  const filteredTodos = state.todos.filter(
    (todo) => todo.completed === state.filters.status
  )
  return filteredTodos.map((todo) => todo.id)
  // state.todos.map((todo) => todo.id)
}

const TodoList = () => {
  // TODO need to apply status filter here
  const todoIds = useSelector(selectTodoIds, shallowEqual)
  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
