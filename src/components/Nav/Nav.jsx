import { NavLink } from "react-router-dom";
import classes from  "./Nav.module.css"
console.log(classes)
function Nav() {
    return <nav className={classes.nav}>
    <div className={classes.item}><NavLink to="/Content" activeClassName={classes.currentLink}>Profile</NavLink></div>
    <div className={classes.item}><NavLink to="/Dialogs" activeClassName={classes.currentLink}>Messages</NavLink></div>
    <div className={classes.item}><NavLink to="/News" activeClassName={classes.currentLink}>News</NavLink></div>
    <div className={classes.item}><NavLink to="/Music" activeClassName={classes.currentLink}>Music</NavLink></div>
    <div className={classes.item}><NavLink to="/Settings" activeClassName={classes.currentLink}> Settings</NavLink></div>

  </nav>
}
export default Nav;