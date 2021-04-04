import classes from "./Users.module.css";

function Users(props) {
    return <div>
    {   props.usersData.map(u => <div key={u.id}>
            <span>
                <div><img className = {classes.avatar} src ={u.avatar}/></div>
                <div>{u.followed === true ?
                    <button onClick = {()=>{props.unfollow(u.id)}}>unfollow</button> 
                    : <button onClick={()=>{props.follow(u.id)}}>follow</button>
                    
                    }</div>
            </span>

            <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </span>
        
        </div>)

    }
    </div>
}
export default Users;