import React from "react";
import ComponenteFooter from "./footer";

const ComponenteCarrito = (props) => {
  const { listaCompra, clickVaciar, clickSuma, ClickResta } = props;

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
        <tbody>
          {listaCompra.length !== 0 ? (
            listaCompra.map((list, index) => (
              <tr key={index}>
                <th>{list.id}</th>
                <td>{list.item}</td>
                <td>{list.cantidad}</td>
                <td>
                  <button className="btn btn-info btn-sm" onClick={clickSuma}> + </button>
                  <button className="btn btn-danger btn-sm" onClick={ClickResta}> - </button>
                </td>
                <td>${list.total}</td>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </tbody>
        <tfoot>
          {listaCompra.length !== 0 ? (
            <ComponenteFooter clickVaciar={clickVaciar}/>
          ) : (
            <tr>
              <th scope="row" colSpan="5">
                Carrito vacío - comience a comprar!
              </th>
            </tr>
          )}
          
        </tfoot>
      </table>
    </div>
  );
};

export default ComponenteCarrito;
