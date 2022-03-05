# Redux Fundamentals Tutorial Example

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is based on the code in this [tutorial](https://redux.js.org/tutorials/fundamentals/part-1-overview)

This app uses the libraries: redux, react-redux and the redux-devtools-extension for browser devtools debugging.

This example app is a todos app that uses redux to store the state of the todos and the state of the filters. It has two reducers or slices. the todosSlice and the filtersSlice. These are combined to produce the rootReducer in reducer.js. A redux.store is created in store.js. Filtering for the view on todos is done in TodoList.js.

The app uses no backend api. The app state is persisted using browser localStorage.setItem() and localStorage.getItem().

## Start and build scripts.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The port can be changed by defining and setting "PORT=nnnn" in a .env file in the project directory.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
