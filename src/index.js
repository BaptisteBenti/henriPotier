import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { fetchProduct } from './features/catalog/productSlice'
import { Suspense } from 'react';
import './custom.scss';
import './index.scss'
import './i18n';

store.dispatch(fetchProduct())

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <Suspense fallback="...is loading">
          <App />
        </Suspense>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);