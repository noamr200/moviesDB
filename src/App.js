import './App.css';
import CardArray from "./components/CardArray";
import MovieCard from "./components/MovieCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useEffect } from 'react';
function App() {
  const [movies,setMovies]=  React.useState([]);
  const [contents,setContents]=React.useState(null);
  


 useEffect ( ()=> {
  axios.get("movies.json").then(res => { setMovies (res.data ); setContents(movies.map((Movie, index) => <MovieCard   key={index} movie={Movie}  />));
   console.log("a app",res.data);})
},[contents!=null]) ;
console.log(contents);
  return (
    <div className="App">
      <header className="App-header"> 
      
      <CardArray  />
      <h1>Movies:</h1> 
      <h1>Will be in a diffrent page soon!</h1>
     {movies.length!=0? contents :"loading"}
      </header>
    </div>
  );
}

export default App;
