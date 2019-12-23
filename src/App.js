import React, { useState } from "react";
import { Container, Col, Row } from 'react-bootstrap';
import UserTable from './component/UserTable'
import AddUserForm from './component/AddUser';
import "./App.css";


const App = () => {
  const usersData = [
  
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }


    return (
     <Container>
       <h1>React User Table</h1>
       <Row>
        
       <Col>
       <h1>Add User</h1>
       <AddUserForm addUser={addUser} />   
       </Col>

          <Col>
          <h1>User Table</h1>
          <UserTable users={users} />
          </Col>
       </Row>
       
     </Container>
    );
  }


export default App;
