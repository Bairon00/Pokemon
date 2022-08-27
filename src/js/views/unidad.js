import React from "react"

export const Unidad =()=>(
        <div className="conttainer">
        <div className="row mx-3">
            <div className="col-4 ">
                <img id="tamañoUnidad" src="https://images.cults3d.com/M-NCL7VrsbhWsAwl-Bh90Y6BWRE=/https://files.cults3d.com/uploaders/16165612/illustration-file/d46809d3-00d7-49c7-927a-afc99792b636/Bulbasaur_Sit01.jpg"/>
            </div>
<div className="col-8" id="caja1">
    <div >
    <h4 className="my-3 mx-2">nombre del pokemon</h4>
    <li className="liii">tipo</li>
    <li className="liii">vida</li>
    <li className="liii">ataque</li>
    <li className="liii">defensa </li>
    <li className="liii">zona de captura</li>
    <li className="liii">habilidades</li>
    </div>
</div>
<div className="col-11 my-4 row caja2">
<div className="col-3 m-auto"><img id="evoluciones" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt="evolucion1"></img>charmander</div>
<div className="col-3 m-auto"><img id="evoluciones" src="..." alt="evolucion2"></img>evolucion 2</div>
<div className="col-3 m-auto"><img id="evoluciones" src="..." alt="evolucion3"></img>evolucion 3</div>
</div>

            </div>

        </div>
    );
