import React,{useState, useEffect} from 'react';
import './../src/assets/css/App.css';

import ComponenteTitulo from './componentes/Titulo'
import ComponenteCard from './componentes/CardsList'
import ComponenteCarrito from './componentes/Carrito'

function App() {
  const [data, setData] = useState([])
  const [compra, setCompra] = useState({lista: []})
  const [total, setTotal] = useState({cantidad: 0, precio: 0})
  
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

  
  const Almacenamiento = (item) => {
    const newArray = compra.lista
    let sumCantidad = 0, sumTotal = 0
    

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
        mapObjeto.total = mapObjeto.total + newObjeto.total;
        validacion = true;
      } 
      sumCantidad = mapObjeto.cantidad + sumCantidad
      sumTotal = mapObjeto.total + sumTotal
      
    })

    if (!validacion) {
      newArray.push(newObjeto)
      sumCantidad++;
      sumTotal = newObjeto.total + sumTotal    
    }
    
    setCompra({lista: newArray})
    setTotal({cantidad: sumCantidad, precio: sumTotal})
    
    
  }
  
  const eliminar = () => {
    setCompra({lista: []})    
    
  }
    

  return (
    <div>
      <div className="container">
        <ComponenteTitulo /> 
        <hr></hr>
        <ComponenteCarrito listaCompra={compra.lista} clickVaciar={() => eliminar()} footerC={total.cantidad} footerT={total.precio} clickSuma={compra.lista} clickResta={compra.lista} />
        
        
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
