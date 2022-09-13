import React from "react";
import { Card } from "../component/card";

export const Especies2 = () => {
    
    return (
        <div className="container">
            <div className="row">
                <Card
                    titulo="Normales"
                    ruta="/Prueba/normal" />
                <Card
                    titulo="Fighting"
                    ruta="/Prueba/fighting" />
                <Card
                    titulo="Flying"
                    ruta="/Prueba/flying" />
                <Card
                    titulo="poison"
                    ruta="/Prueba/poison" />
                <Card
                    titulo="Ground"
                    ruta="/Prueba/ground" />
                <Card
                    titulo="Rock"
                    ruta="/Prueba/rock" />
                <Card
                    titulo="Bug"
                    ruta="/Prueba/bug" />
                <Card
                    titulo="Ghost"
                    ruta="/Prueba/ghost" />
                <Card
                    titulo="Steel"
                    ruta="/Prueba/steel" />

            </div></div>
    )
}