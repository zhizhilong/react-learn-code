import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

store.subscribe(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />)
})