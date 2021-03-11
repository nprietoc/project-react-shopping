import React from 'react';

const ComponenteCarrito = (props) => {
    const {onChange} = props

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Acción</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody></tbody>
                <tfoot>
                    <tr>
                        <th scope="row" colSpan="5">Carrito vacío - comience a comprar!</th>
                        <th>{onChange !== [] ? onChange.map((list, index) =>
                        <ComponenteCarrito 
                        key={index}
                        id={list.id}
                        item={list.title}                        
                        />
                        )  : ""} </th>
                        
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default ComponenteCarrito