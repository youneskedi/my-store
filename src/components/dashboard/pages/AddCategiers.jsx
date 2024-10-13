import { useContext, useState } from "react"
import { AppContext } from "../../layout/Layout"
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import Api from "../../../tools/api"



export default function AddCategories (){

    const appContext = useContext(AppContext)

    // init local state
    const [state, setState] = useState({})
    
    const callAddCategories= async () => {
        // check fields 
        if (
            (state.name == null || state.name.length == 0) ||
            (state.image == null || state.image.length == 0) ||
            (state.desc == null || state.desc.length == 0) 
              ) {
            alert('Please Fill All the fields')
            // appContext.showPopup('Please Fill All the fields')
           
            
            return
        }
        
        
        // calling API
        const response = await Api.fetch({
           
            url: 'categoiriesAdd',
            body: state,
            method: 'POST',
            showPopup: appContext.showPopup,
            
        })

        // check API Response        
        if (response != null) {
            alert('Add categoiries')
            // appContext.showPopup(response.message)
        

        }}
        
    return (
        <div className='register-page'>
            <h1> Add Categories</h1>
           
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name"
                        onChange={(e) => {
                            setState({ ...state, name: e.target.value })
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
                    <Form.Label>description</Form.Label>
                    <Form.Control type="int" placeholder="description"
                        onChange={(e) => {
                            setState({ ...state, desc: e.target.value })
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
                <Button onClick={(e) => {
                    e.preventDefault()
                    callAddCategories()
                }} variant="primary" type="submit">
                   Add Categories
                </Button>
            </Form>
        </div>
    );
}