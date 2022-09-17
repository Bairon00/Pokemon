import React, { useContext } from "react";
import { Context } from "../store/appContext.js"
import { useParams } from "react-router-dom";
import { Card } from "../component/card.js";


export const Favoritos = () =>{ 
 const {store, actions} = useContext(Context);


    return (
    <div className="text-center mt-5 row">
        {store.añadirFav?.map((obj, index)=>{
            console.log("hola")
            return(
                <Card
                key={index}
                titulo={obj.name}
                ruta ={"/Unidad/"+ obj.name}
                url="https://pm1.narvii.com/6217/c20f798e4c5829503e2827350df3a55be31110a8_hq.jpg"
                bt="¡Atrápalos Ya!"
                indice={obj.id}
                />
            )
        })}


    </div>

)};