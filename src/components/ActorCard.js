import { Card } from "react-bootstrap";
import './ActorCard.css';

function ActorCard(props) 
{
let a=props.Actor;
console.log("actor "+a.image);
return ( 
<Card  className="ActorCard">
<Card.Header>
<Card.Title> <Card.Link href={a.IMDBlink} target="_blank"> {a.fname+" "+a.lname}  </Card.Link> </Card.Title>
<Card.Img src={a.image} />

</Card.Header>
<Card.Body>
<Card.Text>{"Born in "+a.birthDate}</Card.Text>
<Card.Text>{a.age+" Years old"}</Card.Text>
</Card.Body>
</Card>  );
}
export default ActorCard;

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