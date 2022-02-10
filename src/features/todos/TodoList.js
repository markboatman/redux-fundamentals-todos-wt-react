import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import TodoListItem from './TodoListItem'

const selectTodoIds = (state) => state.todos.map((todo) => todo.id)

const selectTodoIdsFilterStatus = (state) => {
  console.log('In selectTodoIdsFilterStatus, todos are: ', state.todos)
  console.log(
    'In selectTodoIdsFilterStatus, state.filters.status is : ',
    state.filters.status
  )
  if (state.filters.status !== 'all') {
    let filteredTodos
    if (state.filters.status === 'active') {
      filteredTodos = state.todos.filter((todo) => todo.completed === false)
      return filteredTodos.map((todo) => todo.id)
    } else if (state.filters.status === 'completed') {
      filteredTodos = state.todos.filter((todo) => todo.completed === true)
      return filteredTodos.map((todo) => todo.id)
    }
  }
  // else no status filter return all
  return state.todos.map((todo) => todo.id)
  // return filteredTodos.map((todo) => todo.id)
  // state.todos.map((todo) => todo.id)
}

const selectTodoIdsFilterColor = (state) => {
  console.log('In selectTodoIdsFilterColor, todos are: ', state.todos)
  console.log(
    'In selectTodoIdsFilterColor, state.filters.colors are : ',
    state.filters.colors
  )
  let filteredTodos
  if (state.filters.colors.length !== 0) {
    filteredTodos = state.todos.filter((todo) => {
      if (todo.color) {
        // return truthy
        return state.filters.colors.find((color) => color === todo.color)
      } else {
        return false
      }
    })
    return filteredTodos.map((todo) => todo.id)
  }
  // ELSE
  // filteredTodos = state.todos.map((todo) => {
  //   console.log(
  //     'In selectTodoIdsFilterColor if, state.filters.colors are : ',
  //     state.filters.colors
  //   )
  //   if (state.filters.colors.find(todo.color)) {
  //     return todo
  //   }
  // })
  // just get the ids
  return state.todos.map((todo) => todo.id)
}

const TodoList = () => {
  //const filteredTodos = useSelector(selectTodoIdsFilterStatus)
  //console.log('In TodoList, filtered on status todos are: ', filteredTodos)
  // TODO need to apply status filter here
  const todoIds = useSelector(selectTodoIdsFilterColor, shallowEqual)
  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
