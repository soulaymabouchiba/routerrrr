import React from 'react'
import './App.css'
import Home from './Components/Home';
import  MovieTrailer from './Components/MovieTrailer';
import {BrowserRouter, Route, Switch} from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <div>
            <Route exact path="/"  component={ Home} />
            <Route path="/Trailer/:id" component={MovieTrailer} />

          </div>
        </Switch>
      </BrowserRouter>
      
  );
}

export default App;

