import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { Route } from 'react-router';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ContentContainer from './components/Content/ContentContainer';


function App(props) {

  return (
    <div className="app-wrapper">
      <Header />

      <Nav />
      <div className="app-wrapper-content">
        <Route path="/Content/:userId?" render={() => <ContentContainer
        store = {props.store}/>} />
        <Route path="/Dialogs" render={() => <DialogsContainer
        store = {props.store}/>} />
        <Route path="/Users" render = { () => <UsersContainer 
        store = {props.store}/>} />
        <Route path="/News" component={News} />
        <Route path="/Music" component={Music} />
        <Route path="/Settings" component={Settings} />
      </div>
    </div>

  );
}

export default App;
