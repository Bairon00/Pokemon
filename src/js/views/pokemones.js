import React ,{useEffect,useContext}from "react"
import { Context } from "../store/appContext"
import { Card } from "../component/card"
import { useParams } from "react-router-dom"




export const Pokemones=()=>{

    const {store,actions}=useContext(Context);
    useEffect(()=>{
        actions
    },[])
   return(
    <div className="container ">
        <div className="row ">
            {store.Pokemones.map((obj,index)=>{
                return <Card 
                titulo={obj.name}
                ruta ={"/Unidad/"+ obj.name}
                
                />
            })}
           

        </div>
    </div>
    )}