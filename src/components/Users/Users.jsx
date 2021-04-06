import * as axios from "axios";
import React from "react";
import classes from "./Users.module.css";
import noPhoto from "../../assets/images/unnamed.png"

class Users extends React.Component {
   
    componentDidMount(){
        if(this.props.usersData.length === 0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response=>{
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCountOfUsers(response.data.totalCount);
                     
                
                
                })
    
        }
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
        .then(response=>{this.props.setUsers(response.data.items)})

    }

    
    
    


    render() {
        let pagesAmount = Math.ceil(this.props.totalCountOfUsers / this.props.pageSize);
        let pages = [];
        if(this.props.currentPage < 10){
            for(let i = 1; i <= 10; i++){
                pages.push(i)   
            }
            

        }
        else {
            for(let i = this.props.currentPage; i <= this.props.currentPage + 5; i++ ){
                pages.push(i) 
            }
        }
        
        return <div>    
        
        <div>
          <button onClick = {() => this.props.goBackPages(this.props.currentPage)} className={classes.goBack} disabled = {this.props.currentPage < 10 ? true : false}>{`<`}</button>   
          { pages.map(p => <span onClick= {(e) => this.onPageChanged(p)} className = {this.props.currentPage === p && classes.selectedPage}>
          {`${p} `} </span>)}
        </div>

        

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
                <div>{u.status}</div>
                
            </span>

        </div>)

        }
    
    </div>
    }
}

export default Users;