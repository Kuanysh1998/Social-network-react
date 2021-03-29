import './index.css';
import store from './redux/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let renderApp = (state) =>{
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><App 
    state = {state} 
    addPost = {store.addPost.bind(store)} 
    writeMessage = {store.writeMessage.bind(store)} 
    updateNewPostText = {store.updateNewPostText.bind(store)}
    updateNewMessageText = {store.updateNewMessageText.bind(store)}/></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}



renderApp(store.getState());
store.subscribe(renderApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
