import { follow, goBackPages, setCurrentPage, setTotalCountOfUsers, setUsers, unfollow, usePreloader } from "../../redux/users-page-reducer"
import Users from "./Users";
import {connect} from "react-redux"
import React from "react";
import * as axios from "axios"
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.usePreloader(true);
      
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true,
        headers: {"API-KEY": "26f66adc-110c-4e66-9052-87a50836c7e0"}})
                .then(response=>{
                    this.props.usePreloader(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCountOfUsers(response.data.totalCount);
                })
        }
    

    onPageChanged = (p) => {
        this.props.usePreloader(true);
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`, {withCredentials: true,
        headers: {"API-KEY": "26f66adc-110c-4e66-9052-87a50836c7e0"}})
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

export default connect(mapStateToProps, 
    {follow, unfollow, setUsers,
    setCurrentPage, setTotalCountOfUsers, goBackPages, usePreloader})(UsersContainer);
