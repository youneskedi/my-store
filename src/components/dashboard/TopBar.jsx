import {Link} from "react-router-dom";
import  styles from "./dash.module.scss";
export default function TopBar(){
    return <div className={styles.dflex}>
        <h1>store</h1>
        <Link to="/" className={styles.itemlink}>go back</Link>   
         </div>
}