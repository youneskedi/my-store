import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../layout/Layout";
import { Link } from "react-router-dom";
// import  styles from "./dash.module.scss";
export default function AllOrders(){
    const appcontext=useContext(AppContext)
        const[order , setorder]=useState([]);
        
  const getorders=async()=>{
    const res=await fetch('http://127.0.0.1:8000/api/getorders')
  if(res.ok){
    const response=await res.json();
   setorder(response.data);
//   
   console.log(response);
  }
else{
//   appcontext.ShowPopup("faled to server")
}}
  useEffect(()=>{
    getorders()
  },[]) 
  
return (
  <div >
    {  (
      <>
        <h1>Orders</h1>
        <table  >
          <thead>
            <th>id</th>
            <th>userid</th>
            <th>total</th>
            
            <th>action</th>
          </thead>
           {order.map((el) => (
            <tbody key={el.id}>
              <td>{el.id}</td>
              <td>{el.user_id}</td>
              <td>{el.total}</td>
             
              <Link to={`/Dashboard/Updateorder/${el.id}`}>update</Link>

             
            </tbody> 
          ))}
        </table>
      </>
    )}
  </div>
);
}