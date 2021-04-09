import { writeMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-page-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
const mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage,
        isAuth: state.Auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        writeMessage: () => {
            let action = writeMessageActionCreator();
            dispatch(action);
        },
        updateNewMessageText: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;