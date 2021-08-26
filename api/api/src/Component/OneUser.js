import React from 'react';

import { Card, ListGroup, Spinner } from 'react-bootstrap';

const OneUser = ({user, loadUser}) => {
return (
<div>
{

loadUser ? (
<Spinner />
):(
<Card style={{ backgroundColor:'#e69c2e', width: 'auto', height:'250' }}>
<Card.Img style={{ height:250, width:260 }} variant="top" src="https://www.beverlyhillsmagazine.com/wp-content/uploads/Celebrities-Leonardo-DiCaprio-Hollywood-Stars-Rich-and-Famous-Movie-Stars-Star-of-the-Week-Beverly-Hills-Magazine-Hollywood-Magazines-.jpg" />
<Card.Body>
<Card.Title>Name : {user.name}</Card.Title>
<Card.Text>
Email : {user.email}
</Card.Text>

<ListGroup>
<ListGroup.Item style={{ backgroundColor:'#e69c2e'}}>Phone : {user.phone}</ListGroup.Item>
<ListGroup.Item style={{ backgroundColor:'#e69c2e'}}>website : {user.website}</ListGroup.Item>

</ListGroup>
</Card.Body>
</Card> )}
</div>
)
}

export default OneUser;
