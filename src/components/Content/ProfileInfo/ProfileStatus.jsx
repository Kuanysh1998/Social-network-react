import React from "react";

class   ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateProfileStatus(this.state.status)
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.state
            });
        }
        
    }
    render() {
    if(!this.state.editMode){
    return <div> 
        <span onDoubleClick = {this.activateEditMode.bind(this)}>{`Статус: ${this.props.status}`}</span>
    </div>
    }
    if(this.state.editMode){
        return <div> 
        <textarea onChange = {this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}>{this.props.status}</textarea>
    </div>
    }
}
}

export default ProfileStatus;