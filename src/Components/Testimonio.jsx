import React from 'react';
import '../CSS/Testimonio.css'


export function Testimonio (props){
    return (
        <div className='contenedor-testimonio'>
                <img className='imagen-testimonio' src={require(`../img/${props.imagen}.png`)} alt="Testimonio Emma"/>
                <div className='contenedor-texto-testimonio' >
                    <p className='nombre-testimonio' > <strong> {props.nombre} </strong> {props.pais}</p>
                    <p className='puesto-testimonio' >{props.puesto} <strong> {props.empresa} </strong> </p>
                    <p className='texto-testimonio'> "{props.testimonio} "
                    </p>
                </div>
        </div>
    )
}


//export default Testimonio