import './index.css';
import state, { subscriber } from './redux/state';
import { renderApp } from './render';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewMessageText, updateNewPostText, writeMessage} from './redux/state'
import { BrowserRouter } from 'react-router-dom';

let renderApp = (state) =>{
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><App 
    state = {state} 
    addPost={addPost} 
    writeMessage = {writeMessage} 
    updateNewPostText = {updateNewPostText}
    updateNewMessageText = {updateNewMessageText}/></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}



renderApp(state);
subscriber(renderApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
