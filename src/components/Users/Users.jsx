import * as axios from "axios";
import React from "react";
import classes from "./Users.module.css";
import noPhoto from "../../assets/images/unnamed.png"

class Users extends React.Component {
   
    componentDidMount(){
        if(this.props.usersData.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response=>{this.props.setUsers(response.data.items)})
    
        }
    }


    render() {

        return <div>

        {this.props.usersData.map(u => <div key={u.id}>
            <span>
                <div><img className={classes.avatar} src={u.photos.small != null ? u.photos.small : noPhoto} /></div>
                <div>{u.followed === true ?
                    <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                    : <button onClick={() => { this.props.follow(u.id) }}>follow</button>

                }</div>
            </span>

            <span>
                <div>{u.name}</div>     
                <div>{u.id}</div>
                
            </span>

        </div>)

        }
    
    </div>
    }
}

export default Users;