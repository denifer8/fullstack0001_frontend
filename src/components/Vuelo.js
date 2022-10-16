import React from 'react';
import '../styles/vuelos.css';

export default function Vuelo(props) {
    const {vuelo} = props;
    // const fecha = Date(vuelo.fecha)
    const fecha = (vuelo.fecha).toLocaleString('en-US')
    // Locale esLocale = new Locale("es", "ES");//para trabajar en español
    // SimpleDateFormat formato = 
    // new SimpleDateFormat("EEEE d 'de' MMMM 'de' yyyy", esLocale);
    // const fecha = formato.format(new Date(vuelo.fecha));
  return (
    <div className='vueloCard'>
        <h4>Vuelo</h4>
        <p>{vuelo.nombre}</p>
        <p>{fecha}</p>
        <p>{vuelo.hora}</p> 
        <div >
            <span className='buttonCompar'>Comprar</span>
        </div>  
    </div>
  )
}
