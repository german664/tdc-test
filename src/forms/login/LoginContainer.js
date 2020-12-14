import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'

const LoginContainer = () => {
    const [response, setResponse] = useState(null)
    return (
        <div className="contenedor">
            <div className="arrow ml-5">
                <div>
                    <Link to={'/'}><i className="fas fa-arrow-circle-left fa-2x"></i></Link>
                    <p>Página de Inicio</p>
                </div>
            </div>
            <div className="form-container">
                <div className={response ? "d-none" : ""}>
                    <LoginForm setResponse={setResponse} />
                </div>
                <div className={`response-container ${!response ? "d-none" : ""}`}>
                    <div>{response}</div>
                </div>
            </div>
            <div className="arrow">
                <div>
                    <Link to={'/contact'}><i className="fas fa-arrow-circle-right fa-2x"></i></Link>
                    <p>Siguiente Formulario</p>
                </div>
            </div>
        </div>
    )
}

export default LoginContainer
