import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, writeMessage} from './redux/state'
import { BrowserRouter } from 'react-router-dom';
export let renderApp = (state) =>{
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><App 
    state = {state} 
    addPost={addPost} 
    writeMessage = {writeMessage} 
    updateNewPostText = {updateNewPostText}/></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}
