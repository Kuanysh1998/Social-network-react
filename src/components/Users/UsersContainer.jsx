import { follow, goBackPages, setTotalCountOfUsers, unfollow, disableFollowBtn, getUsers, getNewPageUsers} from "../../redux/users-page-reducer"
import Users from "./Users";
import {connect} from "react-redux"
import React from "react";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        }
    

    onPageChanged = (p) => {
        this.props.getNewPageUsers(p, this.props.pageSize)

    }

    render(){
    return <>
    {this.props.isFetching ? <Preloader /> : null}
    <Users 
    totalCountOfUsers = {this.props.totalCountOfUsers}
    pageSize = {this.props.pageSize}
    currentPage = {this.props.currentPage}
    goBackPages = {this.props.goBackPages}
    onPageChanged = {this.onPageChanged}
    follow = {this.props.follow}
    unfollow = {this.props.unfollow }
    usersData = {this.props.usersData} 
    usePreloader = {this.props.usePreloader}
    followingInProcess = {this.props.followingInProcess}
    /> 
    </>
}
}


const mapStateToProps = (state) => {
    return {
        usersData: state.UsersPage.usersData,
        totalCountOfUsers: state.UsersPage.totalCountOfUsers,
        pageSize: state.UsersPage.pageSize,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProcess: state.UsersPage.followingInProcess
}
}

export default connect(mapStateToProps, 
    {follow, unfollow, 
     setTotalCountOfUsers, goBackPages, disableFollowBtn, getUsers, getNewPageUsers})(UsersContainer);
