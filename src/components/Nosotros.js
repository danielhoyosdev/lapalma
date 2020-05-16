import React from 'react'

// Assets 
import backgroundNosotros from '../assets/img/nosotros.jpg'

const Nosotros = () => (
    <div className="nosotros container" id="nosotros">
        <h5 className="title">NOSOTROS</h5>

        <div className="nosotros__container">
            <div className="nosotros__container-text">
                <p>
                    Se renueva con los equipos de última tecnología. 
                    Imprimimos sus diplomas y certificados institucionales 
                    con los requerimientos necesarios que garantizan su autenticidad.
                    Ofrecemos la impresión de diplomas de todos los grados, elaboración 
                    de carpetas en pasta dura, tarjetas de invitación y papelería en 
                    general únicamente para instituciones educativas. 
                </p>

                <p>
                    Contamos con una experiencia de más de 15 años en el Cauca. Calidad y compromiso 
                    es nuestro lema, para la marcación de sus piezas le ofrecemos acabados en seguridad 
                    en troqueleado y repuje.
                </p>
            </div>

            <img src={ backgroundNosotros } className="nosotros__container-img" alt="Tipografía la palma" />
        </div>
    </div>
)

export default Nosotros;