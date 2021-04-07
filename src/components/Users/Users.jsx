import React from "react";
import classes from "./Users.module.css";
import noPhoto from "../../assets/images/unnamed.png"
import { NavLink } from "react-router-dom";

function Users(props) {
   
        let pagesAmount = Math.ceil(props.totalCountOfUsers / props.pageSize);
        let pages = [];
        if(props.currentPage < 10){
            for(let i = 1; i <= 10; i++){
                pages.push(i)   
            }
            

        }
        else {
            for(let i = props.currentPage; i <= props.currentPage + 5; i++ ){
                pages.push(i) 
            }
        }
        
        return <div>    
        
        <div>
          <button onClick = {() => props.goBackPages(props.currentPage)} className={classes.goBack} disabled = {props.currentPage < 10 ? true : false}>{`<`}</button>   
          { pages.map(p => <span onClick= {(e) => props.onPageChanged(p)} className = {props.currentPage === p && classes.selectedPage}>
          {`${p} `} </span>)}
        </div>

        

        {props.usersData.map(u => <div key={u.id}>
            <span>  
                <div>
                   <NavLink to = {"/Content/" + u.id}> <img className={classes.avatar} src={u.photos.small != null ? u.photos.small : noPhoto} /> </NavLink>
                </div>
                <div>{u.followed === true ?
                    <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                    : <button onClick={() => { props.follow(u.id) }}>follow</button>

                }</div>
            </span>

            <span>
                <div>{u.name}</div>     
                <div>{u.status}</div>
                
            </span>

        </div>)

        }
    
    </div>
    }


export default Users;