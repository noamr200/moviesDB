import ActorCard from  "./ActorCard";
import React, { useState } from 'react';
function CardArray(props)
{
    let arr=props.arr;
    const [actors, setActors] = React.useState(props.arr);
    
    console.log(actors);
      
    return ( <div> <ActorCard Actor={arr[0]}/></div>);
}
export default CardArray;