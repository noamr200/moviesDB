import './App.css';
import CardArray from "./components/CardArray";
import Home from "./pages/Home.js";
import MovieCard from "./components/MovieCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import {Router} from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
function App() {
  const [movies,setMovies]=  React.useState([]);
  const [contents,setContents]=React.useState(null);
  const actorsAdress ="#/actors";
  const moviesAdress ="#/movies";
  const homeAdress ="#/";
/*
Create 3 pages and maps as following:

"/" - home page. show a landing page for the app
"/actors" - show the actors
"/movies" - show movies (only if there is no connection between actor and movie)
Add navbar to navigate between 3 options

*/

 useEffect ( ()=> {
  axios.get("movies.json").then(res => { setMovies (res.data ); setContents(movies.map((Movie, index) => <MovieCard   key={index} movie={Movie}  />));
   console.log("a app",res.data);})
},[contents!=null]) ;
console.log(contents);
  return (
   
    <div className="App">
      <header className="App-header"> 
        
         <Navbar bg="primary" variant="dark">
    <Navbar.Brand href={homeAdress}>Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href={homeAdress}>Home</Nav.Link>
      <Nav.Link href={moviesAdress}>Movies</Nav.Link>
      <Nav.Link href={actorsAdress}>Actors</Nav.Link>
    </Nav>
   
  </Navbar>



     
      <div>
      {/* If I render something before (or after) the router it will render always (in any route) */}
      {/* <p>blabla</p> */}
      <HashRouter>
        <Switch>
         <Route exact path="/"><Home/></Route>
          <Route exact path="/actors"><CardArray/></Route>
          <Route exact path="/movies">  {movies.length!=0? contents :"loading"} </Route>
        </Switch>
      </HashRouter>
    </div>

    
     {/* <h1>Movies:</h1> */}
    {/*  <h1>Will be in a diffrent page soon!</h1> */}
   
      </header>
    </div>
  
  );
}

export default App;
