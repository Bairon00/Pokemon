import React from "react";


export const Card = (props) => (
	<div className="col-4">
        <div className={props.margen} style={{width: props.tamaño}}>
  <img class="card-img-top" src={props.url} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
	</div>
);