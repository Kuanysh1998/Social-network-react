import Content from "./Content";
import React from "react";
import * as axios from "axios";
import {connect} from "react-redux"
import {setProfilePhoto} from "../../redux/profile-page-reducer"
import { withRouter } from "react-router";


class ContentContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 2
        }
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
        .then(response => {
            this.props.setProfilePhoto(response.data)
        })
    }
    render() {
        
        return <Content {...this.props} profile = {this.props.profile}/>
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile
}
}

let withRouterContentContainer = withRouter(ContentContainer)
export default connect(mapStateToProps,{setProfilePhoto})(withRouterContentContainer);