import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


function App(props) {

  return (
    <div className="app-wrapper">
      <Header />

      <Nav />
      <div className="app-wrapper-content">
        <Route path="/Content" render={() => <Content 
        ProfilePage={props.state.ProfilePage}
        dispatch = {props.dispatch}/>} />
        <Route path="/Dialogs" render={() => <Dialogs 
        DialogsPage={props.state.DialogsPage}
        dispatch = {props.dispatch} />} />
        <Route path="/News" component={News} />
        <Route path="/Music" component={Music} />
        <Route path="/Settings" component={Settings} />
      </div>
    </div>

  );
}

export default App;
