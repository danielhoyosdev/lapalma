import React from 'react'

// Assets
import cliente1 from '../assets/img/cliente1.png'
import cliente2 from '../assets/img/cliente2.png'
import cliente3 from '../assets/img/cliente3.png'
import cliente4 from '../assets/img/cliente4.png'

const Clientes = () => {
    const clientes = [cliente1, cliente2, cliente3, cliente4];

    return(
        <div className="clientes">
            <div className="container">
                <div className="clientes__title">
                    <h3 className="clientes__title-text">CLIENTES</h3>
                </div>
                <div className="clientes__container">
                    {
                        React.Children.toArray(clientes.map((cliente) => (
                            <div className="clientes__item">
                                <img src={cliente} className="clientes__item-img" />
                            </div>
                        )))
                    }
                </div>
            </div>
        </div>
    )
}

export default Clientes;