import React, { useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import Calender from './Calender';


export default function AddUserForm(props) {
    const initialFormState = {id: null, firstname: '', lastname: '', birthday: '2015-06-12', age: '', hobby: ''}
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = event => {
        const {name, value} = event.target
        console.log(event.target)
       
        setUser({...user, [name]: value})
    }

    return (
        <Form onSubmit={event => {
            event.preventDefault()
            if (!user.firstname || !user.lastname || !user.age || !user.hobby) return

            props.addUser(user)
            setUser(initialFormState)
        }}>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" onChange={handleInputChange} name="firstname" value={user.firstname} />
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" onChange={handleInputChange} name="lastname" value={user.lastname} />
        </Form.Group>

       
          <Calender value={user.birthday} name="birthday" onChange={handleInputChange} />
        

        <Form.Group controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Age" onChange={handleInputChange} value={user.age} name="age" />
        </Form.Group>

        <Form.Group controlId="formBasicLastHobby">
          <Form.Label>Hobby</Form.Label>
          <Form.Control type="text" placeholder="Hobby" onChange={handleInputChange} value={user.hobby} name="hobby" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
          </Button>
      </Form>
    )
}
