import './index.css';
import state from './redux/state';
import { renderApp } from './render';
import reportWebVitals from './reportWebVitals';


renderApp(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
