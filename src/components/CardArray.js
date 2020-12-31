import ActorCard from  "./ActorCard";
import { Row } from "react-bootstrap";
import React from 'react';
import axios from 'axios';
function CardArray(props)
{
   // let arr=props.arr;
    const FNAME=0;
    const LNAME=1;
    const [actors, setActors] = React.useState([]);
    const [searchType, setsearchType] = React.useState(FNAME);
    let carRows;
    function refresh() 
    {
      axios.get("actors.json").then(res=>{
        console.log(res.data);
        setActors(res.data);
        carRows = actors.map((actor, index) => <ActorCard   key={index} Actor={actor}  />);
         
      });
    }

    React.useEffect(()=>{
      axios.get("actors.json").then(res=>{
        console.log(res.data);
        setActors(res.data);
        carRows = actors.map((actor, index) => <ActorCard   key={index} Actor={actor}  />);
         
      });
  }, []);

  function filters(a,b)
  {
 
    let tmp=[];
    let str;
    let n;
    if (b.length===0) 
    {
        refresh();
        return;
    }

    for (let i=0;i<a.length;++i)
    {
      str=searchType==FNAME?a[i].fname:a[i].lname;
      n=String(str).toLowerCase();
      var b1=String(b).toLowerCase();
      if (n.includes(b1)) 
      {
        tmp.push(a[i]);
      }
      setactors(tmp);
      console.log(tmp);
    }
  }

  function handleChanges(e)
  {
   
    filters(actors,e.target.value);
    carRows = actors.map((actor, index) => <ActorCard   key={index} Actor={actor}  />);
  }

    const handleFilterChanges=(e) => {
        let n=e.target.value;
        setsearchType(n);
    };

  function setactors(obj)
  {
    setActors(obj);
  }
    carRows = actors.map((actor, index) => <ActorCard   key={index} Actor={actor}  />);
   // const element = <Row> <ActorCard Actor={arr[0]}  /> <ActorCard Actor={arr[1]}  /> <ActorCard Actor={arr[2]}  /> </Row> ;
 
    return ( 
    <div>
        <h3>Search Actor</h3>
        <div> <input type="text" onChange={handleChanges}/>  </div> 
        <p>Filter Type <select onChange={handleFilterChanges}><option value={FNAME} >First Name</option> <option value={LNAME}>Last Name</option> </select></p>
        <h1>Actors</h1>
    <Row> {carRows}</Row> </div>);
}


export default CardArray;