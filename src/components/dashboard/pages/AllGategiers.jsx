import {  useEffect, useState } from "react"
import Api from "../../../tools/api";
import { Button, Row } from "react-bootstrap";




export default function AllCategoires (){

    //get Categories
    const[categries , setcategries]=useState([]);
        
    const getcategories=async()=>{
      const res=await fetch('http://127.0.0.1:8000/api/categories')
    const response=await res.json();
    setcategries(response.data);
}

    useEffect(()=>{
      getcategories()
    },[]) 
    

    
        ///delete cate
        let id;
          const handleDelete = async () => {
            try {
              const response = await Api.fetch(
                {
                 url:'categoriesdelete/'+id, 
                method: 'DELETE',
                
            });
           
            if (response != null) {
              alert('deleted categoiries')
              getcategories();
            } else {
              
              alert('Error deleting item');
            }
          } catch (error) {
            alert('An error occurred:', error);
          }
        };
        
        //
        
    return ( <div >
        {  (
          <>
            <h1>Categories</h1>
            <table  >
              <thead >
               <tr key={Row}> <th>Name</th>
                <th>image</th>
                
                <th>description</th>
                <th>action</th></tr>
              </thead>
              {categries.map((el) => (
                <tbody >
                   <tr key={el.id}>
                  <td>{el.name}</td>
                  <td>{el.image}</td>
                 
                  <td>{el.desc}</td>
                  
                  <Button onClick={() => {
                   id=el.id
                     handleDelete()
                }} variant="danger" type="submit" >Delete</Button>
</tr>
                </tbody>
              ))}
            </table>
          </>
        )}
      </div>
        )
     
    /////
   

}