import { NavLink } from "react-router-dom"
import classes from "./Header.module.css"

function Header(props) {
    return <header className={classes.header}>
    <img src="https://i.pinimg.com/originals/26/80/a3/2680a3dde32ca857b86b8e77b3a8c4cf.png" alt="logo" />
    <div className = {classes.login}> <NavLink to={"/Login"}> {props.isAuth ? props.login : "Login"} </NavLink></div>
  
  </header>
}

export default Header;