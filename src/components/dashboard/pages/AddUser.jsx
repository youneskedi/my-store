import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../layout/Layout"
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import Api from "../../../tools/api"
import { Route } from "react-router-dom"



export default function AddUser (){
    // init local state
    const [state, setState] = useState({})
   
    
    const callAdduser = async () => {
        // check fields 
        if (
            (state.name == null || state.name.length == 0) ||
            (state.email == null || state.email.length == 0) ||
            (state.password == null || state.password.length == 0) ||
            (state.is_admin == null || state.is_admin.length == 0) 
          
        ) {
            alert('Please Fill All the fields')
            // appContext.showPopup('Please Fill All the fields')
           console.log(state);
            
            return
        }
        
        
        // calling API
        const response = await Api.fetch({
            url: 'AddUser',
            body: state,
            method: 'POST',
         
            
        })

        // check API Response        
        if (response != null) {
          
            alert('Add user ')

        }}
        
    return (
        <div className='register-page'>
            <h1> Add User</h1>
           
            <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>user or admin</Form.Label>
                    <Form.Control type="boolean" placeholder="Enter user 0 admin 1"
                        onChange={(e) => {
                            setState({ ...state, is_admin: e.target.value })
                        }}defaultValue={0}
                    />
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
                    <Form.Label>email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        onChange={(e) => {
                            setState({ ...state, email: e.target.value })
                        }}
                    />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="int" placeholder="Password"
                        onChange={(e) => {
                            setState({ ...state, password: e.target.value })
                        }}
                    />
                </Form.Group>

                <Button onClick={(e) => {
                    e.preventDefault()
                    callAdduser()
                }} variant="success" type="submit">
                   Add
                </Button>
                </Form>
        </div>
    );
}