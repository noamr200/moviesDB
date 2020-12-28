import logo from './logo.svg';
import './App.css';
import actor from './models/actor';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
function App() {
  let a=new actor("ff","dd","ff","vv","1980-11-11");
  console.log(a);
  return (
    <div className="App">
      <header className="App-header">
  
      </header>
    </div>
  );
}
/*

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
