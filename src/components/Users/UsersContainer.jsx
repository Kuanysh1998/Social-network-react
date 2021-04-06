import { followActionCreator, goBackActionCreator, setCurrentPageActionCreator, setTotalCountOfUsersActionCreator, setUsersActionCreator, unfollowActionCreator, toggleIsFetchingActionCreator } from "../../redux/users-page-reducer"
import Users from "./Users";
import {connect} from "react-redux"
import React from "react";
import * as axios from "axios"
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.usePreloader(true);
      
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response=>{
                    this.props.usePreloader(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCountOfUsers(response.data.totalCount);
                })
        }
    

    onPageChanged = (p) => {
        this.props.usePreloader(true);
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
        .then(response=>{
            this.props.usePreloader(false);
            this.props.setUsers(response.data.items)})

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
    usePreloader = {this.props.usePreloader}/> 
    </>
}
}


const mapStateToProps = (state) => {
    return {
        usersData: state.UsersPage.usersData,
        totalCountOfUsers: state.UsersPage.totalCountOfUsers,
        pageSize: state.UsersPage.pageSize,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            let action = followActionCreator(userID);
            dispatch(action);},
        unfollow: (userID) => {
            let action = unfollowActionCreator(userID);
            dispatch(action);
        },
        setUsers: (users) => {
            let action = setUsersActionCreator(users);
            dispatch(action);
        },
        setCurrentPage: (pageNumber) => {
            let action = setCurrentPageActionCreator(pageNumber);
            dispatch(action);
        },
        setTotalCountOfUsers: (usersAmount) => {
            let action = setTotalCountOfUsersActionCreator(usersAmount);
            dispatch(action);
        },
        goBackPages: (currentPage) => {
            let action = goBackActionCreator(currentPage);
            dispatch(action);
        },
        usePreloader: (fetching) => {
            let action = toggleIsFetchingActionCreator(fetching);
            dispatch(action);
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
