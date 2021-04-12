import Content from "./Content";
import React from "react";
import {connect} from "react-redux"
import {getProfile, getProfileStatus, updateProfileStatus} from "../../redux/profile-page-reducer"
import { Redirect, withRouter } from "react-router";



class ContentContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.userId;
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
    }
    render() {
        if(!this.props.isAuth) {return <Redirect to = {"/Login"} />}
        
        return <Content {...this.props} profile = {this.props.profile} updateProfileStatus = {this.props.updateProfileStatus}
        />
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile,
        isAuth: state.Auth.isAuth,
        status: state.ProfilePage.userStatus,
        userId: state.Auth.userId

}
}

let withRouterContentContainer = withRouter(ContentContainer)
export default connect(mapStateToProps,{getProfile, getProfileStatus, updateProfileStatus})(withRouterContentContainer);