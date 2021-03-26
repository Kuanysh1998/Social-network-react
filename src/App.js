import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


function App(props) {
  
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />

      <Nav />
      <div className="app-wrapper-content">
      <Route path="/Content" render ={() => <Content state = {props.state.ProfilePage} />}/>
      <Route path="/Dialogs" render ={() => <Dialogs state ={props.state.DialogsPage}/>}/>
      <Route path="/News" component={News}/>
      <Route path="/Music" component={Music}/>
      <Route path="/Settings" component={Settings}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
