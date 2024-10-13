import {   useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import Api from "../../../tools/api"
import { useParams } from "react-router-dom"

export default function Updateorder (){

    const {id}= useParams();

    const[order , setorder]=useState([]);
    //show product
const getorder=async()=>{
const res=await fetch(`http://127.0.0.1:8000/api/showorder/${id}`)
if(res.ok){
const response=await res.json();
setorder(response.data);
}
else{ alert('error cant to get order')
}}
useEffect(()=>{
getorder()
},[]) 

    
    // init local state
    const [state, setState] = useState([])
    
    const callUpdateorder= async () => {
        // check fields 
        if (
            (state.user_id==null)||
            (state.total == null) 
            
           
              ) {
            alert('Please Fill All the fields')
         
            return
        }
        // calling API
        
        const response = await Api.fetch({
            
            url:`updateorder/${id}`,
           
            body: state,
            method: 'PUT'
           
         
        })
      
        // check API Response        
        if (response != null) {
            alert('update order')
           
        }}
        
          
    return (
        <div className='register-page'>
            <h1> Update Proudect</h1>
       
            <Form >
               
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>user_id</Form.Label>
                    <Form.Control type="int" placeholder="userid"  defaultValue={order.user_id}
                        onChange={
                            (e) => {
                            setState({ ...state, user_id: e.target.value })
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>total</Form.Label>
                    <Form.Control type="text" placeholder="Enter total"  defaultValue={order.total}
                        onChange={(e) => {
                            setState({ ...state, total: e.target.value })
                        }}
                    />
                   
                </Form.Group>
               
                <Button onClick={(e) => {
                    e.preventDefault()
                  
                    callUpdateorder()
                   
                    
                }} variant="primary" type="submit">
                   Update Proudect
                </Button>
            </Form>
        </div>
    );
}