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

  const [compra, SetCompra] = useState([])

  const Almacenaminto = () => {
    const objeto = {
      id: "",
      item: "",
      cantidad: 0,
      accioón: "",
      total: 0 
    }

    useState.push({objeto});

  }

  return (
    <div>
      <div className="container">
        <ComponenteTitulo /> 
        <ComponenteCarrito onchange={compra}/>
        <div className="row"> 
        {data !== [] ? data.map((list, index) => 
        <ComponenteCard 
        key={index}
        image={list.thumbnailUrl}
        name={list.title}
        value={list.precio}
        />
        )  : ""}
        
        </div>
        
      </div>

    

    </div>
  
  );
}

export default App;
