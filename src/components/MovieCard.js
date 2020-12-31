import './MovieCard.css';
function MovieCard(props) 
{
let a=props.movie;
return ( 
<div  className="MovieCard">
<img src={a.poster} alt="Poster"/>
<h1>Title:{a.name}</h1>
<p>Length:{a.length} Minutes!</p>
<p>Directed By:{a.director}</p>
<p>Starting:{a.mainStars}</p>
</div>  );
}
export default MovieCard;
