import { checkPropTypes } from "prop-types";
import React from "react";
import { Card } from "../component/card"; 

export const Principal = () => (
	<div className="container row justify-content-start">
        <Card url="https://pm1.narvii.com/6217/c20f798e4c5829503e2827350df3a55be31110a8_hq.jpg"
        tamaño="400px"
        margen="mx-5"/>
        <Card url="http://pm1.narvii.com/6362/c1eee5c348d1db518c703d6901edab51d0c4e8f4_00.jpg"
        tamaño="400px"
        margen="mx-5"/>
	</div>
);
