import React from 'react';
import{Card, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';



 const Users = ({user}) => {
    return (
        <div>
    <Card style={{ marginBottom:'20px',marginLeft:'6px', backgroundColor:'#e69c2e', width: 'auto', height:'250' }}>
  <Card.Img style={{ height:250, width:260 }} variant="top" src="https://data.whicdn.com/images/117093841/original.jpg"  />
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Title>{user.username}</Card.Title>
    <Card.Text>
      {user.email}
    </Card.Text>
    <Button variant="dark">
    <Link to ={`/users/${user.id}`} >User Details</Link>

    </Button>
  </Card.Body>
</Card>
        </div>
    )
}


export default Users;

