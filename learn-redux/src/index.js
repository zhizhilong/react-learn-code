import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import store from './redux/store'

React.render(<App />,document.getElementById('root'))

store.subscribe(() => {
  React.render(<App />,document.getElementById('root'))
})