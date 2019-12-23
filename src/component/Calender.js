import React from 'react'
import { Form} from 'react-bootstrap';


export default function Calender(props) {

  const handleDateChange = event => {
    if (props.onChange) props.onChange(event)
  }
  return ( 
    <Form.Group controlId="formBasicBirthday">
    <Form.Label>Birthday</Form.Label>
      <input type="date" name="birthday" value={props.birthday} name={props.name} onChange={handleDateChange} /> 
      </Form.Group>  
  )
}
