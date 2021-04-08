import React from "react";
import classes from "./Users.module.css";
import noPhoto from "../../assets/images/unnamed.png"
import { NavLink } from "react-router-dom";

import { usersAPI } from "../../api/api";

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
                    <button disabled = {props.followingInProcess.some(id=> id === u.id)} onClick={() => {
                        
                        props.disableFollowBtn(true, u.id);
                        usersAPI.unfollowUser(u.id)
                        .then(response => {
                            if(response.data.resultCode ===0){
                            props.unfollow(u.id) }
                        props.disableFollowBtn(false, u.id)
                        })
                     
                        
                        
                        
                        
                        }}>unfollow</button>
                    : <button disabled = {props.followingInProcess.some(id=> id === u.id)} onClick={() => { 
                        props.disableFollowBtn(true, u.id);
                        usersAPI.followUser(u.id)
                        .then(response => {
                            if(response.data.resultCode ===0){
                            props.follow(u.id) }
                        props.disableFollowBtn(false, u.id)
                        })
                        
                    }}>follow</button>

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