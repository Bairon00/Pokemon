import React from "react";


export const Card = (props) => (
	<div className="col-4">
        <div className={props.margen} style={{width: props.tamaño,height:"400px"}}>
  <img class="card-img-top" id="portada" src={props.url} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">{props.titulo}</h5>
    <p class="card-text">{props.texto}</p>
    <a href="#" class="btn btn-dark">{props.bt}</a>
    
  </div>
  </div>
	</div>
);