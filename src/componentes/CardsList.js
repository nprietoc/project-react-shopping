import React from 'react';

const ComponenteCard = (props) => {
    const {image, name, value, onClick} = props

    return (
        <div className="col-12 mb-2 col-md-4">
          <div className="card">
            <div className="card-body">
                <img className="card-img-top" src={image}></img>            
              <h5>{name}</h5>
              <p>{value}</p>
              <button className="btn btn-dark" onClick={onClick}>Comprar</button>
            </div>
          </div>
        </div>
    )
}

export default ComponenteCard