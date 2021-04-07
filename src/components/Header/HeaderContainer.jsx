import * as axios from "axios";
import React from "react";
import Header from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux"

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
        .then(response => {
            if(response.data.resultCode === 0){

                let usersData = response.data.data;
                this.props.setAuthUserData(usersData.id, usersData.email, usersData.login)
            }
        
        })
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
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);