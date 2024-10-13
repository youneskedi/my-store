import { useEffect, useState } from "react";

import { Link} from "react-router-dom";
import Api from "../../../tools/api";
import { Button, Row } from "react-bootstrap";

// import  styles from "./dash.module.scss";
export default function Product(){
        const[prodect , setprodect]=useState([]);
        //products
  const getprodect=async()=>{
    const res=await fetch('http://127.0.0.1:8000/api/products')
  if(res.ok){
    const response=await res.json();
   setprodect(response.data);

   
  }
else{ alert('error cant to get proudect')
}}
  useEffect(()=>{
    getprodect()
  },[]) 
  let id;
  const handleDelete = async () => {
    try {
      const response = await Api.fetch(
        {
         url:'productdelete/'+id, 
        method: 'DELETE',
        
    });
   
    if (response != null) {
      alert('deleted products')
      getprodect()
    } else {
      
      alert('Error deleting item');
    }
  } catch (error) {
    alert('An error occurred:', error);
  }
};
return (
  <div >
    {  (
      <>
        <h1>Proudect</h1>
        <table  >
          <thead><tr key={Row}>
            <th>Name</th>
            <th>image</th>
            <th>price</th>
            <th>description</th>
            <th>action</th></tr>
          </thead>
          {prodect.map((el) => (
            <tbody>
              <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.image}</td>
              <td>{el.price}</td>
              <td>{el.description}</td>
              <td>
              <Link to={`/Dashboard/Updateproudect/${el.id}`}>update</Link>

               <Button className="delete-btn" onClick={() => {
                   id=el.id
                     handleDelete()
                }} variant="danger" type="submit" >Delete</Button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </>
    )}
  </div>
);
}