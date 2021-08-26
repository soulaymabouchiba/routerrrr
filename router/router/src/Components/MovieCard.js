import React from 'react'
import {Card} from 'react-bootstrap';
import {Rating} from '@material-ui/lab'
import {Link} from "react-router-dom"

export const MovieCard = ({movie}) => {
  return (
     
        <div style={{ marginTop:"40px"}}>

  <Card style={{ width: '20rem', height:"450px"}}>
  <Card.Img variant="top" src={movie.image} style={{ width:'auto', height:'50%'}} />
  <Card.Body style={{textAlign:"center" ,fontSize:"14px"}}>
  

  <Card.Title>{movie.push}</Card.Title>

  <Card.Title>{movie.title}</Card.Title>
  
  <Link to={`/Trailer/${movie.id}`}><Card.Text>{movie.name}</Card.Text></Link>
    <Card.Text> {movie.date} </Card.Text>
    <Card.Text> {movie.type} </Card.Text>
    <Rating name="read-only" value={movie.rating} readOnly/>    
  </Card.Body>
</Card>
        </div>
    )
}