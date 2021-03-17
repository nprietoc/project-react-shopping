import React from 'react';

const ComponenteFooter = (props) => {
    const {footerC, footerT, clickVaciar} = props 

    return (
        <tr>
            <th scope="row" colSpan="2">Total Productos</th>
            <td>{footerC}</td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={clickVaciar}> Vaciar todo </button>
            </td>
            <td className="font-weight-bold">$ <span>{footerT}</span></td>        
            
        </tr>

    ) 
}

export default ComponenteFooter