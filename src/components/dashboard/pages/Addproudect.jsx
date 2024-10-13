import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../layout/Layout"
import { Card, CardText, Form, FormLabel } from "react-bootstrap"

import Api from "../../../tools/api"
import Button from 'react-bootstrap/Button';
import BgColorExample from "./color"

export default function AddProduct (){

    //get Categories
    const[categries , setcategries]=useState([]);
        
    const getcategories=async()=>{
      const res=await fetch('http://127.0.0.1:8000/api/categories')
    const response=await res.json();
    setcategries(response.data);}
    useEffect(()=>{
      getcategories()
    },[]) 
    //



    const appContext = useContext(AppContext)

    // init local state
    const [state, setState] = useState({})
    
    const callAddproudect = async () => {
        // check fields 
        if (
            (state.name == null || state.name.length == 0) ||
            (state.image == null || state.image.length == 0) ||
            (state.price == null || state.price.length == 0) ||
            (state.description == null || state.description.length == 0) ||
            (state.category == null || state.category.length == 0)
        ) {
            alert('Please Fill All the fields')
            // appContext.showPopup('Please Fill All the fields')
           console.log(state);
            
            return
        }
        
        
        // calling API
        const response = await Api.fetch({
            url: 'produects',
            body: state,
            method: 'POST',
            showPopup: appContext.showPopup,
            
        })

        // check API Response        
        if (response != null) {
            // show message
            // appContext.showPopup(response.message)
            alert('Add produect ')

        }}
        
    

       

  return (

        <div className='register-page'>
            <h1> Add Proudect</h1>
          

        <Form >
          
            <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label >Gategiers</Form.Label>
                  
                  
                    <Form.Select type="select" placeholder="Enter categries"
                        onChange={(e) => {
                            setState({ ...state, category: e.target.value })
                        }}
                         value={categries.id}>
                        {categries.map((item)=>{
                            return (<option value={item.id}key={item.id}>{item.name}</option>)})}
                    </Form.Select>
                    </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">

                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name"
                        onChange={(e) => {
                            setState({ ...state, name: e.target.value })
                        }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>image</Form.Label>
                    <Form.Control type="text" placeholder="Enter image"
                        onChange={(e) => {
                            setState({ ...state, image: e.target.value })
                        }}
                    />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="int" placeholder="Price"
                        onChange={(e) => {
                            setState({ ...state, price: e.target.value })
                        }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
                    <Form.Label>description</Form.Label>
                    <Form.Control type="int" placeholder="description"
                        onChange={(e) => {
                            setState({ ...state, description: e.target.value })
                        }}
                    />
                </Form.Group>

                
                <Button onClick={(e) => {
                    e.preventDefault()
                    callAddproudect()
                }} variant="primary" type="submit">
                   Add
                </Button>
               
            </Form>
           
        
            
             </div>
    );
}