import React from 'react'
import './login.css';
import { Link } from 'react-router-dom'
const logGin = () => {

    return (
        <main>

            <div className="contenedor__todo">
                <div className="caja__trasera">
                    <div className="caja__trasera-login">
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia sesión para entrar en la página</p>

                    </div>
                    <div className="caja__trasera-register">
                        <h3>¿Aún no tienes una cuenta?</h3>
                        <p>Regístrate para que puedas iniciar sesión</p>

                        <li >
                            <Link to="/homee" className="Registrate">Registrate</Link>
                        </li>

                    </div>
                </div>

                <div className="contenedor__login-register">

                    <form action="" className="formulario__login">
                        <h2>Iniciar Sesión</h2>
                        <input type="text" placeholder="NOMBRE" />
                        <input type="password" placeholder="CONTRASEÑA" />
                        <li >
                            <Link to="/Home" className="entrar">Entrar</Link>
                        </li>
                    </form>
                </div>

            </div>
        </main>

    )
}

export default logGin


