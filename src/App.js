import React,{useState, useEffect} from 'react';
import './../src/assets/css/App.css';

import ComponenteTitulo from './componentes/Titulo'
import ComponenteCard from './componentes/CardsList'
import ComponenteCarrito from './componentes/Carrito'


function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const resp = await fetch('api.json')
        const data = await resp.json()
        console.log(data)
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])

  const [compra, SetCompra] = useState({lista: []})

  const Almacenamiento = (item) => {
    const newArray = compra.lista
    
    const newObjeto = {
      id: item.id,
      item: item.title,
      cantidad: 1,
      accion: "",
      total: item.precio 
    }
    let validacion = false;
    
    newArray.map(function (mapObjeto, index) {
      if (mapObjeto.id === item.id) {
        mapObjeto.cantidad = mapObjeto.cantidad + 1;
        mapObjeto.total = mapObjeto.total + newObjeto.total
        validacion = true;
      } 
      
    })

    if (!validacion) {
      newArray.push(newObjeto)
    }
    
    SetCompra({lista: newArray})

  }
  
  const eliminar = () => {
    SetCompra({lista: []})    
    
  }

  const agregar = () => {
    const newCantidad = compra.lista
    newCantidad.map(function (map, index) {
      if(map != 0) {
        map.cantidad = newCantidad.cantidad + 1
      }
    })
    SetCompra({lista: newCantidad})

  
  }


  return (
    <div>
      <div className="container">
        <ComponenteTitulo /> 
        <hr></hr>
        <ComponenteCarrito listaCompra={compra.lista} clickVaciar={() => eliminar()} clickSuma={() => agregar()}/>
        
        
        <div className="row"> 
        {data !== [] ? data.map((list, index) => 
        <ComponenteCard 
        key={index}
        image={list.thumbnailUrl}
        name={list.title}
        value={list.precio}
        onClick={() => Almacenamiento(list)}
        />
        )  : ""}
        
        </div>
        
      </div>

    

    </div>
  
  );
}

export default App;
