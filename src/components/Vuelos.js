import React from 'react'
import Vuelo from './Vuelo';
import '../styles/vuelos.css';

export default function Vuelos(props) {
    const  { vuelos, setVuelos } = props;
    const actionBack = () =>{
          setVuelos([])
    }
  return (
    <div>
    <div className='vuelosPage'>
        <h2>Lista de Vuelos</h2>
        <div className='vuelosGrill'>
               {  vuelos.map( (vuelo, index) =>(
                 <div key={index} className='vueloIndividual'>
                     <Vuelo vuelo={vuelo}/>
                 </div>
            ))  }    
        </div>
     
    </div>
    <div className='back'>
        <button onClick={actionBack}>Inicio</button>
    </div>
    </div>
    
  )
}
