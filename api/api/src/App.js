import Axios from 'axios';
import React, {useEffect,useState} from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';

import Home from './Pages/Home';
import UserDetails from  './Pages/UserDetails';

function App() {
  const [users,setUsers]=useState([])
  const [loadUsers,SetLoadUsers]=useState(true)

  const getUsers = () => {
     Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res)=>{
        setUsers(res.data);
        SetLoadUsers(false)
      })
      .catch((err)=>console.log(err))
  }

  useEffect(() => {
    getUsers();
    
  }, [])
  return (
    <div className="App">
      <header className="App-header">
      <Switch>
         <Route exact path="/" render ={()=><Home users={users} loadUsers={loadUsers}/>}/>
         <Route path="/users/:id" component={UserDetails} />
         
       </Switch>
    
      </header>
    </div>
  );
}

export default App;