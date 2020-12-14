import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from './RegisterForm'

const RegisterContainer = () => {
    const [response, setResponse] = useState(null)
    return (
        <div className="contenedor">
            <div className="arrow">
                <div>
                    <Link to={'/contact'}><i className="fas fa-arrow-circle-left fa-2x"></i></Link>
                    <p>Formulario Anterior</p>
                </div>
            </div>
            <div className="form-container">
                <div className={response ? "d-none" : ""}>
                    <RegisterForm setResponse={setResponse} />
                </div>
                <div className={`response-container ${!response ? "d-none" : ""}`}>
                    <div>{response}</div>
                </div>
            </div>
            <div className="arrow">
                <div>
                    <Link to={'/api'}><i className="fas fa-arrow-circle-right fa-2x"></i></Link>
                    <p>Consulta a API</p>
                </div>
            </div>
        </div>
    )
}

export default RegisterContainer
