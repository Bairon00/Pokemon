import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../component/card";

export const Prueba = () => {
   const params = useParams();
   const [lista, setLista] = useState()

   useEffect(() => {

      fetch("https://pokeapi.co/api/v2/type/" + params.name+"/")
         .then(response => response.json())
         .then(result => {
            console.log(result)
            setLista(result)
         })
         .catch(error => console.log('error', error));
   }, []);
  

   return (<div className="align-items-center text-center mt5 " style={{ marginLeft: "200px" }}>
      <div><h1>{params.name}</h1></div>
      <div className="d-flex flex-row p-4" style={{ width: "1000px", overflow: "auto" }}>
      <Card titulo={lista?.pokemon[0].pokemon.name}
      ruta ={"/Unidad/"+ lista?.pokemon[0].pokemon.name}
      bt="¡Atrápalos Ya!"
      url="http://pm1.narvii.com/6362/c1eee5c348d1db518c703d6901edab51d0c4e8f4_00.jpg"/>
      <Card titulo={lista?.pokemon[1].pokemon.name}
      ruta ={"/Unidad/"+ lista?.pokemon[1].pokemon.name}
      bt="¡Atrápalos Ya!"
      url="http://pm1.narvii.com/6362/c1eee5c348d1db518c703d6901edab51d0c4e8f4_00.jpg"/>
      <Card titulo={lista?.pokemon[2].pokemon.name}
      ruta ={"/Unidad/"+ lista?.pokemon[2].pokemon.name}
      bt="¡Atrápalos Ya!"
      url="http://pm1.narvii.com/6362/c1eee5c348d1db518c703d6901edab51d0c4e8f4_00.jpg"/>
      <Card titulo={lista?.pokemon[3].pokemon.name}
      ruta ={"/Unidad/"+ lista?.pokemon[3].pokemon.name}
      bt="¡Atrápalos Ya!"
      url="http://pm1.narvii.com/6362/c1eee5c348d1db518c703d6901edab51d0c4e8f4_00.jpg"/>
      <Card titulo={lista?.pokemon[4].pokemon.name}
      ruta ={"/Unidad/"+ lista?.pokemon[4].pokemon.name}
      bt="¡Atrápalos Ya!"
      url="http://pm1.narvii.com/6362/c1eee5c348d1db518c703d6901edab51d0c4e8f4_00.jpg"/>
      <Card titulo={lista?.pokemon[5].pokemon.name}
      ruta ={"/Unidad/"+ lista?.pokemon[5].pokemon.name}
      bt="¡Atrápalos Ya!"
      url="http://pm1.narvii.com/6362/c1eee5c348d1db518c703d6901edab51d0c4e8f4_00.jpg"/>
      <Card titulo={lista?.pokemon[6].pokemon.name}
      ruta ={"/Unidad/"+ lista?.pokemon[6].pokemon.name}
      bt="¡Atrápalos Ya!"
      url="http://pm1.narvii.com/6362/c1eee5c348d1db518c703d6901edab51d0c4e8f4_00.jpg"/>
      <Card titulo={lista?.pokemon[7].pokemon.name}
      ruta ={"/Unidad/"+ lista?.pokemon[7].pokemon.name}
      bt="¡Atrápalos Ya!"
      url="http://pm1.narvii.com/6362/c1eee5c348d1db518c703d6901edab51d0c4e8f4_00.jpg"/>
      <Card titulo={lista?.pokemon[8].pokemon.name}
      ruta ={"/Unidad/"+ lista?.pokemon[8].pokemon.name}
      bt="¡Atrápalos Ya!"
      url="http://pm1.narvii.com/6362/c1eee5c348d1db518c703d6901edab51d0c4e8f4_00.jpg"/>
      <Card titulo={lista?.pokemon[9].pokemon.name}
      ruta ={"/Unidad/"+ lista?.pokemon[9].pokemon.name}
      bt="¡Atrápalos Ya!"
      url="http://pm1.narvii.com/6362/c1eee5c348d1db518c703d6901edab51d0c4e8f4_00.jpg"/>
      </div>
   </div>

   )
}
