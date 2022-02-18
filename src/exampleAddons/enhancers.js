// these are accessed when creating the store in store.js

export const updateLocalStorageAfterDispatch = (createStore) => {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers)

    function newDispatch(action) {
      // this will update localStorage('todos') on filter
      // updates also, not effecient.
      const result = store.dispatch(action)
      const json = JSON.stringify(store.getState().todos)
      localStorage.setItem('todos', json)
      // console.log('In enhancer, localStorage updated')
      console.log(
        'In enhancer, localStorage is now: ',
        localStorage.getItem('todos')
      )
      return result
    }

    return { ...store, dispatch: newDispatch }
  }
}

// not using below
export const sayHiOnDispatch = (createStore) => {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers)

    function newDispatch(action) {
      const result = store.dispatch(action)
      console.log('Hi!')
      return result
    }

    return { ...store, dispatch: newDispatch }
  }
}

export const includeMeaningOfLife = (createStore) => {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers)

    function newGetState() {
      return {
        ...store.getState(),
        meaningOfLife: 42,
      }
    }

    return { ...store, getState: newGetState }
  }
}
