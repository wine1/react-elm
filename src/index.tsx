import React from 'react';
import ReactDOM from 'react-dom';
import './assert/sass/style.scss';
// import App from './App';
import RouterConfig from "./router/router";
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './store/reducer/index'
// import { getAllProducts } from './store/actions/index'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  // @ts-ignore
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

// store.dispatch(getAllProducts)

ReactDOM.render(
  <Provider store={store}>
    <RouterConfig></RouterConfig>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
