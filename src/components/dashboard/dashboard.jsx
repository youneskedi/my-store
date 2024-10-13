import TopBar from "./TopBar";
import SideBar from "./sidbar";
import  styles from "./dash.module.scss";

import { Outlet } from "react-router-dom";



export default function Dashboard(){
    
    
  
    return (<div className={styles.dashboard}>

<div className={styles.topbar}><TopBar />
</div>
<div className={styles.contener}>
    
     <SideBar />
     <div className={styles.outlet}>
        <Outlet/>
   </div></div>
   </div>
)}