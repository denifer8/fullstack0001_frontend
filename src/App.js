import React, { useState } from 'react';
import './App.css';
import Filtro from './components/Filtro';
import Vuelos from './components/Vuelos';


function App() {

    const [vuelos, setVuelos] = useState([]);
    const [filtro,setFiltro] = useState({});
 
  return (
    <div className="App">
      <header className="App-header">
      {(
          vuelos.length === 0 && 
              <Filtro vuelos={vuelos} setVuelos={setVuelos}
                      filtro={filtro} setFiltro={setFiltro} />       
          )} 
        
         {(
          vuelos.length !== 0 && 
               <Vuelos vuelos={vuelos} setVuelos={setVuelos} />          
          )}        
      </header>
      
    </div>
  );
}

export default App;
