import { Link } from "react-router-dom";
import  styles from "./dash.module.scss";
export default function SideBar(){
    return <div className={styles.sidebar}>
       <Link to="Home" className={styles.itemlink} >Home</Link>
        <Link to="Users" className={styles.itemlink} >Users</Link>
        <Link to="AddUser" className={styles.itemlink}>AddUser</Link>
          
       <Link to="Proudect" className={styles.itemlink} >Proudect</Link>   
        <Link to="AddProudect" className={styles.itemlink} >AddProudect</Link>   
      
       <Link to="Allorders" className={styles.itemlink}>AllOrders</Link>
       <Link to="AllCategories" className={styles.itemlink}>AllCategoires</Link>
       <Link to="AddCategories" className={styles.itemlink}>AddCategoires</Link>
      
        
         </div>
}