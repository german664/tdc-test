import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'

const ContactContainer = () => {
    const [response, setResponse] = useState(null)
    return (
        <div className="contenedor">
            <div className="arrow">
                <div>
                    <Link to={'/login'}><i className="fas fa-arrow-circle-left fa-2x"></i></Link>
                    <p>Formulario Anterior</p>
                </div>
            </div>
            <div className="form-container">
                <div className={response ? "d-none" : ""}>
                    <ContactForm setResponse={setResponse} />
                </div>
                <div className={`response-container ${!response ? "d-none" : ""}`}>
                    <div>{response}</div>
                </div>
            </div>
            <div className="arrow">
                <div>
                    <Link to={'/register'}><i className="fas fa-arrow-circle-right fa-2x"></i></Link>
                    <p>Siguiente Formulario</p>
                </div>
            </div>
        </div>
    )
}

export default ContactContainer
