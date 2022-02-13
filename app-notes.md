This project is based on the code for the redux tutorial example at: https://redux.js.org/tutorials/fundamentals/part-1-overview

This is create-react-app that uses redux, react-redux and redux-devtools-extension.

This example app is a todos app that uses redux to store the state of the todos and the state of the filters. It has two reducers or slices. the todosSlice and the filtersSlice. These are combined to produce the rootReducer in reducer.js. A redux.store is created in store.js. Filtering for the view on todos is done in TodoList.js.
