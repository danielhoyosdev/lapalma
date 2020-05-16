import React from 'react'

const Contacto = () => (
    <div className="contacto" id="contacto">
        <h5 className="title">CONTACTO</h5>

        <div className="contacto__container container">
            <div className="contacto__data">
                <div className="contacto__data-item">
                    <h6 className="subtitle">DÓNDE ENCONTRARNOS</h6>
                    <p>
                        Carrera 6A No. 13N-31 Local 1 | Barrió Bolívar <br/>
                        Popayán, Cauca
                    </p>
                </div>

                <div className="contacto__data-item">
                    <h6 className="subtitle">ENVÍANOS UN EMAIL</h6>
                    <p>
                        alejoastudillo2@gmail.com <br/>
                        alejoastudillo2@hotmail.com
                    </p>
                </div>

                <div className="contacto__data-item">
                    <h6 className="subtitle">LLÁMENOS</h6>
                    <p>
                        Télefono: 8 363535 <br/>
                        Móvil: 315 400 4265
                    </p>
                </div>
            </div>
            <div className="contacto__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.5420270724671!2d-76.60124917085108!3d2.451055999888378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMjcnMDMuOCJOIDc2wrAzNicwMi41Ilc!5e0!3m2!1sen!2sco!4v1584562582179!5m2!1sen!2sco"
                    width="100%"
                    height="100%"
                    title="Mapa de Popayán, ASODAMVI Carrera 11 3N-30 Local 101 Barrio Modelo"
                    style={{ border: 0 }}
                ></iframe>
            </div>
        </div>
    </div>
)

export default Contacto;