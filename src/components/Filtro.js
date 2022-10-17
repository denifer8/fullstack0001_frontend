import React from "react";
import "../styles/vuelos.css";

export default function Filtro(props) {
  const { filtro, setFiltro, vuelos, setVuelos } = props;
  // const fecha = Date(vuelo.fecha)
  const reqApi = async () => {
    // // Obtener el JSON desde un file local (import arriba y luego directamente utilizarlo)
    // console.log("Local JSON")
    // const url2 =  {reservas2}; //"./data/reservas.json"
    // console.log(url2)
    //****************** */
    // Obtener el JSON desde un servicio local
    //  const url = "http://localhost:4000/api/reservas?nombre=${nombre},";
    const url = "http://localhost:4000/api/reservas";
    const link_url = process.env.REACT_APP_URL_BASE || "nada";
    console.log("link", link_url);
    try {
      // const api = await fetch(url,{id, nombre, fecha, hora})
      const api = await fetch(
        url,

        // {
        //   method: "POST", // *GET, POST, PUT, DELETE, etc.
        //   mode: "no-cors", // no-cors, *cors, same-origin
        //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //   credentials: "same-origin", // include, *same-origin, omit
        //   headers: {
        //     "Content-Type": "application/json",
        //     // 'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        //   redirect: "follow", // manual, *follow, error
        //   referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //   body: filtro // body data type must match "Content-Type" header
        // }
      );
      const listaVuelos = await api.json();
      setVuelos(listaVuelos);
      console.log(vuelos);
    } catch (error) {
      console.log("error", error);
    }
    console.log(vuelos);
  };

  return (
    <div className="vueloCard">
      <h4>Vuelo</h4>
      <label>Nombre</label>
      <input
        type="text"
        placeholder="Insertar el Nombre"
        onChange={(evt) => {
          filtro.nombre = evt.target.value;
          setFiltro(filtro);
          console.log(filtro.nombre);
        }}
      />
      <label>Fecha</label>
      <input type="text" placeholder="Insertar Fecha Desde" />
      <label>Hora desde</label>
      <input type="text" placeholder="Insertar Hora Desde" />
      <label>Hora hasta</label>
      <input type="text" placeholder="Insertar Hora hasta" />
      <button onClick={reqApi}> buscar</button>
    </div>
  );
}
