import React from 'react'
import {Spinner} from 'react-bootstrap'
import Users from './Users'


const UserList = ({users , loadUsers}) => {
    return (
        <div style={{display:"flex", flexWrap:"wrap"}}>
            {
                loadUsers ? (
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
                ):(
                  users.map((el)=> <Users user={el} key={el.id} />)
                )
            }
            
        </div>
    )
}


export default UserList;
