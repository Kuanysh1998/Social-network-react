import React from "react";
import Header from "./Header";
import {getUsersAuthInfo} from "../../redux/auth-reducer";
import {connect} from "react-redux"

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersAuthInfo();
    }
    render () {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth,
        login: state.Auth.login
    }
}
export default connect(mapStateToProps, {getUsersAuthInfo})(HeaderContainer);