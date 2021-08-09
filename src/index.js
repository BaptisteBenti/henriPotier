import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux';
import { fetchBook } from './features/book/bookSlice'

store.dispatch(fetchBook())

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

