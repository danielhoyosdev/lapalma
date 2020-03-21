import React from 'react'

const Diploma = (props) => (
    <div className="diploma__item">
        <h6 className="subtitle">{ props.title }</h6>

        <div className="diploma__container">
            <img src={props.img} className="diploma__item-img" alt="Diplomas Tipografía la palma" />
            
            <div className="diploma__item-text">
                <ul>
                    {
                        React.Children.toArray(props.caracteristicas1.map((item) => (
                            <li>
                                <i className="fas fa-angle-right"></i> 
                                { item }
                            </li>
                        )))
                    }
                </ul>

                <ul>
                    {
                        React.Children.toArray(props.caracteristicas2.map((item) => (
                            <li>
                                <i className="fas fa-angle-right"></i> 
                                { item }
                            </li>
                        )))
                    }
                </ul>

                {
                    (props.caracteristicas3) && 
                    <ul>
                        {
                            React.Children.toArray(props.caracteristicas3.map((item) => (
                                <li>
                                    <i className="fas fa-angle-right"></i> 
                                    { item }
                                </li>
                            )))
                        }
                    </ul>
                }
            </div>
        </div>
    </div>
)

export default Diploma;