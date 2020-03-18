import React from 'react'

const Servicio = (props) => (
    <div className="servicio__item">
        <img src={props.img} className="servicio__item-img"  alt={ `${props.title} Tipografía la palma` }/>
        <div className="servicio__item_title">
            { props.title }
        </div>
    </div>
)

export default Servicio;