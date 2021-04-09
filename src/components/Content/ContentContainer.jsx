import Content from "./Content";
import React from "react";
import {connect} from "react-redux"
import {getProfile} from "../../redux/profile-page-reducer"
import { Redirect, withRouter } from "react-router";



class ContentContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 2
        }
        this.props.getProfile(userId)
    }
    render() {
        if(!this.props.isAuth) {return <Redirect to = {"/Login"} />}
        
        return <Content {...this.props} profile = {this.props.profile}/>
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile,
        isAuth: state.Auth.isAuth

}
}

let withRouterContentContainer = withRouter(ContentContainer)
export default connect(mapStateToProps,{getProfile})(withRouterContentContainer);