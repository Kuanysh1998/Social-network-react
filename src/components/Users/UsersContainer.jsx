import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/users-page-reducer"
import Users from "./Users";
import {connect} from "react-redux"



const mapStateToProps = (state) => {
    return {
        usersData: state.UsersPage.usersData
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            let action = followActionCreator(userID);
            dispatch(action);},
        unfollow: (userID) => {
            let action = unfollowActionCreator(userID)
            dispatch(action);
        },
        setUsers: (users) => {
            let action = setUsersActionCreator(users)
            dispatch(action);
        }

    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;