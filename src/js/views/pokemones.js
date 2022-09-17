import React ,{useEffect,useContext}from "react"
import { Context } from "../store/appContext"
import { Card } from "../component/card"
import { useParams } from "react-router-dom"




export const Pokemones=()=>{

    const {store,actions}=useContext(Context);
    useEffect(()=>{
        actions.getPokemones();
    },[])
   return(
    <div className="container ">
        <div className="row ">
            {store.Pokemones.map((obj,index)=>{
                return <Card 
                titulo={obj.name}
                ruta ={"/Unidad/"+ obj.name}
                url="https://pm1.narvii.com/6217/c20f798e4c5829503e2827350df3a55be31110a8_hq.jpg"
                bt="¡Atrápalos Ya!"

                />
            })}
           

        </div>
    </div>
    )}