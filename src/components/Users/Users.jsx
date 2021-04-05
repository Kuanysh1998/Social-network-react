import * as axios from "axios";
import classes from "./Users.module.css";



function Users(props) {

    function getUsers(){
        if(props.usersData.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response=>{props.setUsers(response.data.items)})
    }
    
       
}
    return <div>
        <button onClick = {getUsers}>Get users</button>
        {props.usersData.map(u => <div key={u.id}>
            <span>
                <div><img className={classes.avatar} src={u.photos.small != null ? u.photos.small : "https://lh3.googleusercontent.com/proxy/ZyKtQ5q2XuuEyAIHIi7rsG2Lk43dQ_siGvvjgz_3iK-W9acK3rxUfcy588AaPNKcxI6zhNz9vNbecsr4qEGv3ln8hmcvc9VcMr2-av5h"} /></div>
                <div>{u.followed === true ?
                    <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                    : <button onClick={() => { props.follow(u.id) }}>follow</button>

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
debugger;
export default Users;