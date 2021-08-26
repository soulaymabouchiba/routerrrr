import React, { useEffect, useState} from 'react';
import Axios from 'axios';
import OneUser from '../Component/OneUser';





const UserDetails = (props) => {
    const [user, setUser]=useState({});
    const [loadUser, setLoadUser ]=useState(true);
    
    
    const {id}= props.match.params

const getUser = () => {
    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>{
        setUser(res.data)
        setLoadUser(false)
})
    .catch((err)=>console.log(err))
}


useEffect(()=>{
    getUser();
   
    // eslint-disable-next-line
}, [])

    return (
        <div>
           <OneUser user={user} loadUser={loadUser} />
           
        </div>
    )
}

export default UserDetails;
