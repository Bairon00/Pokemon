import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";



export const Unidad =()=>{
    const params = useParams();
    const [list,setList]=useState()
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/"+params.name)
  .then(response => response.json())
  .then(result => setList(result))
  .catch(error => console.log('error', error));
  
    },[]);
return(
    
        <div className="conttainer">
        <div className="row mx-3">
            <div className="col-4 ">
                <img id="tamañoUnidad" src={list?.sprites.front_default} />
            </div>
<div className="col-8" id="caja1">
    <div >
    <h4 className="my-3 mx-2">{list?.name}</h4>
    <li className="liii">tipo</li>
    <li className="liii">vida:{list?.stats.base_stat}</li>
    <li className="liii">ataque:</li>
    <li className="liii">defensa:</li>
    <li className="liii">zona de captura:</li>
    <li className="liii">habilidades:</li>
    </div>
</div>
</div>
</div>
    );
};