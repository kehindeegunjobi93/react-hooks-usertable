import React from 'react'
import { Table } from 'react-bootstrap'

export default function UserTable(props) {
    return (
     <Table striped bordered hover>
         <thead>
             <tr>
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th>Birthday</th>
                 <th>Age</th>
                 <th>Hobby</th>
             </tr>
         </thead>
         <tbody>
             {props.users.length > 0 ? (
                 props.users.map(user => (
                  <tr key={user.id}>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.birthday}</td>
                    <td>{user.age}</td>
                    <td>{user.hobby}</td>
                  </tr>
                 ))
             ): (
                 <tr>
                 <td>No users</td>
                 </tr>
             )}
         
         </tbody>
     </Table>
    )
}
