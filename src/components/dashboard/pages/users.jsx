import { useContext, useEffect, useState } from "react";
import Api from "../../../tools/api";
import { Button } from "react-bootstrap";


export default function Users(){
    
        const[user , setuser]=useState([]);
        
  const getuser=async()=>{
    const res=await fetch('http://127.0.0.1:8000/api/GetUser')
  if(res.ok){
    const response=await res.json();
   setuser(response.data);

  }
else{
//   appcontext.ShowPopup("faled to server")
}}
  useEffect(()=>{
    getuser()
  },[]) ///

  let id;
  const handleDelete = async () => {
    try {
      const response = await Api.fetch(
        {
         url:'Userdelete/'+id, 
        method: 'DELETE',
        
    });
   
    if (response != null) {
      alert('deleted User')
      getuser()
    } else {
      
      alert('Error deleting item');
    }
  } catch (error) {
    alert('An error occurred:', error);
  }
};

return ( <div >
  {  (
    <>
      <h1>Users</h1>
      <table  >
        <thead >
         <tr> <th>Name</th>
          <th>email</th>
          
          <th>Role</th>
          <th>action</th></tr>
        </thead>
        {user.map((el) => (
          <tbody >
             <tr key={el.id}>
            <td>{el.name}</td>
            <td>{el.email}</td>
           <td >
              { (el.is_admin==1?"admin":"user") }</td>
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
}