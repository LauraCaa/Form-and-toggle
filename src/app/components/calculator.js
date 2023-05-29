"use client";
import { useState } from "react" 

export default function Carro(){
    const[car,setCar]= useState(true);
    function encender(){
        setCar(true);
    };
    function apagar(){
        setCar(false);
    };
    return( 
        <>
            <p>el carro esta: {car ? "encendido" : "apagado"}</p>
            <button onClick= {() => apagar()}>apagar</button>
            <button onClick= {() => encender()}>encender</button>
        </>
    )
}