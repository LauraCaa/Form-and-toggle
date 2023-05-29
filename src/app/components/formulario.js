"use client";
import React, {Fragment} from "react";
import {useState} from "react";

export default function Formulario() {
    const [datos,setDatos] = useState({
        nombre: "",
        apellido:""
    })
    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + " " + datos.apellido)

    }
    
    return(
        <Fragment>
            <h1>formulario</h1>
            <form onSubmit={enviarDatos}> 
                <input 
                    type= "text" 
                    placeholder="ingrese nombre" 
                    name="nombre"
                    onChange={handleInputChange}
                />
                <input 
                    type= "text" 
                    placeholder="ingrese apellido" 
                    name="apellido"
                    onChange={handleInputChange}/>
                <button type="submit">enviar</button>
            </form>
            <h3>{datos.nombre} - {datos.apellido} </h3>
        </Fragment>
    );
}