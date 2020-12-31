import { Card } from "react-bootstrap";
import './ActorCard.css';

function ActorCard(props) 
{
let a=props.Actor;
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
