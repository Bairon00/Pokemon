import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";



export const Unidad = () => {
    const params = useParams();
    const [list, setList] = useState()
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + params.name)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setList(result)})
            .catch(error => console.log('error', error));

    }, []);
    return (

        <div className="conttainer">
            <div className="row mx-3">
                <div className="col-4 ">
                    <img id="tamañoUnidad" src={list?.sprites.front_default} />
                </div>
                <div className="col-8" id="caja1">
                    <div >
                        <h4 className="my-3 mx-2">{list?.name}</h4>
                        <li className="liii">tipo:{list?.types[0].type.name}</li>
                        <li className="liii">vida:{list?.stats[0].base_stat}</li>
                        <li className="liii">ataque:{list?.stats[1].base_stat}</li>
                        <li className="liii">defensa:{list?.stats[2].base_stat}</li>
                        <li className="liii">habilidades:{list?.moves[4].move.name},{list?.moves[8].move.name},{list?.moves[6].move.name},{list?.moves[30].move.name}</li>
                    </div>
                </div>
            </div>
        </div>
    );
};