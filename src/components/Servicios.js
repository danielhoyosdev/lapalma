import React from 'react'

// Components
import Servicio from './../components/Servicio'

// Assets
import servicio1 from '../assets/img/Servicio1.jpg'
import servicio2 from '../assets/img/Servicio2.jpg'
import servicio3 from '../assets/img/Servicio3.jpg'
import servicio4 from '../assets/img/Servicio4.jpg'

const Servicios = () => {
    const servicios = [
        {
            img: servicio1, 
            title: "Diplomas"
        }, 
        {
            img: servicio2, 
            title: "Medallas"
        },
        {
            img: servicio3, 
            title: "Suministros para cocina"
        }, 
        {
            img: servicio4, 
            title: "Muebles para oficina"
        }
    ];

    return(
        <div className="servicios" id="servicios">
            <h5 className="title">NUESTROS SERVICIOS</h5>

            <div className="servicios__container container">
                {
                    React.Children.toArray(servicios.map((servicio) => (
                        <Servicio title={servicio.title} img={servicio.img} />
                    )))
                }
            </div>
        </div>
    )
}

export default Servicios;