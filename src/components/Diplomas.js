import React from 'react'

// Components 
import Diploma from './Diploma'

// Assets
import diploma1 from '../assets/img/opcion1.png';
import diploma2 from '../assets/img/opcion2.png';
import diploma3 from '../assets/img/opcion3.png';
import diploma4 from '../assets/img/opcion4.png';

const Diplomas = () => {
    const diplomas = [
        {
            title: "Opción 1:",
            img: diploma1,
            caracteristicas1: ["Diploma en papel Pergamino de 180gr.", "Medidas 24 x 34 cm.", "Escudo de Colombia repujado full color.", "Dos Actas de Grado en papel Kimberly full color."],
            caracteristicas2: ["Carpeta pasta dura color azul o vino tinto.", "Estampados en dorado con Escudo del Colegio.", "Medidas 24 x 34 cm."],
            caracteristicas3: ["Obsequio: Dos tarjetas invididuales de invitación de grado.", "Tamaño Lord: 18.5 x 12.7 cm. Full Color.", "Opalina de 120gr."]
        },
        {
            title: "Opción 2:",
            img: diploma2,
            caracteristicas1: ["Diploma en papel Nacarado de 180gr.", "Medidas 24 x 34 cm.", "Escudo de Colombia repujado full color.", "Dos Actas de Grado en papel Kimberly full color."],
            caracteristicas2: ["Carpeta pasta dura color azul o vino tinto.", "Estampados en dorado con Escudo del Colegio.", "Medidas 24 x 34 cm."],
            caracteristicas3: ["Obsequio: Dos tarjetas invididuales de invitación de grado.", "Tamaño Lord: 18.5 x 12.7 cm. Full Color.", "Opalina de 120gr."]
        },
        {
            title: "Opción 3:",
            img: diploma3,
            caracteristicas1: ["Diploma en papel Kimberly de 180gr.", "Medidas 24 x 34 cm.", "Escudo de Colombia repujado full color.", "Dos Actas de Grado en papel Kimberly full color."],
            caracteristicas2: ["Carpeta pasta dura color azul o vino tinto.", "Estampados en dorado con Escudo del Colegio.", "Medidas 24 x 34 cm."],
        }
    ];

    return(
        <section>
            <h5 className="title">DIPLOMAS</h5>
            
            <article className="diplomas__container container">
                {
                    React.Children.toArray(diplomas.map((diploma) => (
                        <Diploma {...diploma}/>
                    )))
                }
                <div className="diploma__item other">
                    <img src={diploma4} className="diploma__item-img" alt="Diplomas Tipografía la palma" />

                    <div className="diploma__item-text">
                        <h6 className="subtitle">Grado 9°</h6>
                        <p>
                            Diploma en papel Kimberly de 180gr.<br/>
                            Medidias 24 x 34 cm.
                        </p>

                        <h6 className="subtitle">Preescolar</h6>
                        <p>
                            Opalina de 120gr. a full color.<br/>
                            Tamaño carta.
                        </p>

                        <h6 className="subtitle">Menciones de Honor</h6>
                        <p>
                            Opalina de 120gr. a full color.<br />
                            Medidas 12.5 x 17.5 cm.
                        </p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Diplomas;