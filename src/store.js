// I don't remember how this works
// createStore deprecated but still works
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
// importing enhancers that wrap the store.dispatch function.
import { updateLocalStorageAfterDispatch } from './exampleAddons/enhancers'
// import { print1, print2, print3 } from './exampleAddons/middleware'

// composeWithDevTools to track redux in browser
// dev tools
const composedEnhancer = composeWithDevTools(
  // Add whatever middleware you actually want to use here
  applyMiddleware(),
  // other store enhancers if any
  updateLocalStorageAfterDispatch
)

// get todos array if it exists in browser localStorage
let preloadedState // undefined
const persistedTodosString = localStorage.getItem('todos')
// if it was in localStorage
if (persistedTodosString) {
  preloadedState = {
    // some magic going on here, becomes the state
    // in the todosReducer
    todos: JSON.parse(persistedTodosString),
  }
}
// preloadedState could be undefined
const store = createStore(rootReducer, preloadedState, composedEnhancer)
export default store
