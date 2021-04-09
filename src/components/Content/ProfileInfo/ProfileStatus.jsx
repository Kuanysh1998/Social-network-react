import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
    if(!this.state.editMode){
    return <div> 
        <span onDoubleClick = {this.activateEditMode.bind(this)}>{`Статус: ${this.props.status}`}</span>
    </div>
    }
    if(this.state.editMode){
        return <div> 
        <textarea autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}>{this.props.status}</textarea>
    </div>
    }
}
}

export default ProfileStatus;