import {   useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import Api from "../../../tools/api"
import { Route, redirect, useParams } from "react-router-dom"

export default function UpdateProudect (){

    const {id}= useParams();

    const[prodect , setprodect]=useState([]);
    //show product
const getprodect=async()=>{
const res=await fetch(`http://127.0.0.1:8000/api/Productshow/${id}`)
if(res.ok){
const response=await res.json();
setprodect(response.data);
}
else{ alert('error cant to get proudect')
}}
useEffect(()=>{
getprodect()
},[]) 

    
    // init local state
    const [state, setState] = useState([])
    
    const callUpdateProudect= async () => {
        // check fields 
        if (
            (state.name==null)||
            (state.description == null) ||
            (state.image == null ) ||
            (state.price == null ) 
           
              ) {
            alert('Please Fill All the fields')
         
            return
        }
        // calling API
        
        const response = await Api.fetch({
            
            url:`ProductUpdate/${id}`,
           
            body: state,
            method: 'PUT'
           
         
        })
      
        // check API Response        
        if (response != null) {
            alert('update proudect')
           
        }}
        
          
    return (
        <div className='register-page'>
            <h1> Update Proudect</h1>
       
            <Form >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" 
                     defaultValue={prodect.name}
                    
                        onChange={(e) => {
                            setState({ ...state,name:e.target.value 
                            })
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
                    <Form.Label>description</Form.Label>
                    <Form.Control type="int" placeholder="description"  defaultValue={prodect.description}
                        onChange={(e) => {
                            setState({ ...state, description: e.target.value })
                        }
                    }
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="int" placeholder="Price"  defaultValue={prodect.price}
                        onChange={
                            (e) => {
                            setState({ ...state, price: e.target.value })
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>image</Form.Label>
                    <Form.Control type="text" placeholder="Enter image"  defaultValue={prodect.image}
                        onChange={(e) => {
                            setState({ ...state, image: e.target.value })
                        }}
                    />
                   
                </Form.Group>
               
                <Button onClick={(e) => {
                    e.preventDefault()
                  
                    callUpdateProudect()
                   
                    
                }} variant="primary" type="submit">
                   Update Proudect
                </Button>
            </Form>
        </div>
    );
}