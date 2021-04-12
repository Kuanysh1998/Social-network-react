import './App.css';
import Nav from './components/Nav/Nav';
import { Route, withRouter } from 'react-router';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ContentContainer from './components/Content/ContentContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/common/Login/Login';
import React from 'react';
import {initializeApp} from "./redux/app-reducer";
import {connect} from "react-redux" 
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if(!this.props.appInitialized) {
      return <Preloader />
    }
  return (
    <div className="app-wrapper">
      <HeaderContainer />

      <Nav />
      <div className="app-wrapper-content">
        <Route path="/Content/:userId?" render={() => <ContentContainer
        />} />
        <Route path="/Dialogs" render={() => <DialogsContainer
        />} />
        <Route path="/Users" render = { () => <UsersContainer 
        />} />
        <Route path="/Login" render = { () => <Login
       />} />
        <Route path="/News" component={News} />
        <Route path="/Music" component={Music} />
        <Route path="/Settings" component={Settings} />
      </div>
    </div>

  );
}
}

const mapStateToProps = (state) => {
  return {
      appInitialized: state.App.appInitialized
  }
} 

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App)



