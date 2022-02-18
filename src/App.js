/* 
  This example app is a todos app that uses redux to store the state 
  of the todos and the state of the filters. It has two reducers or slices. 
  The todosSlice and the filtersSlice. These are combined to produce the 
  rootReducer in reducer.js. A redux.store is created in store.js. 
  Filtering for the view on todos is done in TodoList.js. The app achieves
  persistence of state.todos[] using browser localStorage
 */
import React from 'react'

import Header from './features/header/Header'
import TodoList from './features/todos/TodoList'
import Footer from './features/footer/Footer'

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Todos Example</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>** Todos **</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
