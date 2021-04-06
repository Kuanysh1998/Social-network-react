import classes from "./Preloader.module.css";
import preloader from "../../../../src/assets/images/loading3.gif"

function Preloader() {
    return <div className = {classes.preloader}>
        <img src ={preloader} />
    </div>
}

export default Preloader;