import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1 className="text-center mb-5">tdc-cl/x-form showcase</h1>
            <div className="home">
                <Link to={'/login'}> <div className="box login-form">Formulario de Login</div></Link>
                <Link to={'/contact'}><div className="box contact-form">Formulario de Contacto</div></Link>
                <Link to={'/register'}><div className="box register-form">Formulario de Registro</div></Link >
                <Link to={'/api'}><div className="box api-form">Consulta a API</div></Link >
            </div>
        </>
    )
}

export default Home
