import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


let login = window.localStorage.getItem("memEmail");

function loginReducer(state=login, action) {
  if(action.type === "login") {
    return login
  }
  else if(action.type === "logout") {
    window.localStorage.removeItem("memEmail")
    login = ""
    return login;
  }
  return login;
}

let loginCheck = window.localStorage.getItem("loginCheck");

function loginCheckReducer(state=loginCheck, action) {

  if(action.type === "login") {
    loginCheck = true
    return loginCheck
  }
  else if(action.type === "logout") {
    window.localStorage.removeItem("loginCheck")
    loginCheck = false
    return loginCheck;
  }

  return loginCheck;

}


let store = createStore(combineReducers({loginReducer, loginCheckReducer}));


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
