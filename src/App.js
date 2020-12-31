import './App.css';
import CardArray from "./components/CardArray";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
 /* let a1=new Actor("Brad ","Pitt","https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
  "https://www.imdb.com/name/nm0000093/","1963-12-18");
  let a2=new Actor("Gal" ,"Gadot","https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg",
  "https://www.imdb.com/name/nm2933757/","1985-04-30");
  let a3=new Actor(
    "Daniel", "Day-Lewis", 
    "https://m.media-amazon.com/images/M/MV5BMjE2NDY2NDc1Ml5BMl5BanBnXkFtZTcwNjAyMjkwOQ@@._V1_UY317_CR13,0,214,317_AL_.jpg", 
    "https://www.imdb.com/name/nm0000358/?ref_=nv_sr_srsg_0#actor" ,"1957-04-29");*/
  
  //let actorsChukuMuku=[a1,a2,a3]; //JSON will be in the future
 
  return (
    <div className="App">
      <header className="App-header"> 
      
      <CardArray arr={[]} />
      </header>
    </div>
  );
}
/*
The page will include:

A gallery of Actors. Each Actor can be implemented with a Bootstrap Card component. Each Actor will show an image, name and age. 
Clicking on the Actor's name will open an IMDB page of the Actor (in a new tab).
Filter gallery. Above the gallery there will be an input field. This will filter the actor gallery based on the actor's first and last name.
Bonus: Sort gallery. Add a select box for sorting the the gallery. The options will be: first name, last name and age.
Notes:

Data should be hard coded.
The gallery should be responsive.


    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
*/
export default App;
