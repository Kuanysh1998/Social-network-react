import { followActionCreator, goBackActionCreator, setCurrentPageActionCreator, setTotalCountOfUsersActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/users-page-reducer"
import Users from "./Users";
import {connect} from "react-redux"



const mapStateToProps = (state) => {
    return {
        usersData: state.UsersPage.usersData,
        totalCountOfUsers: state.UsersPage.totalCountOfUsers,
        pageSize: state.UsersPage.pageSize,
        currentPage: state.UsersPage.currentPage,
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
        }

    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;