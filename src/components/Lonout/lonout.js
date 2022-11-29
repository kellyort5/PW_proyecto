import React from 'react'
import '../Login/login.css';
import { Link } from 'react-router-dom'

function lonnout() {
    return (
        <main>

            <div className="contenedor__todo">
                <div className="caja__trasera">
                    <div className="caja__trasera-login">
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia sesión para entrar en la página</p>

                        <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                    </div>
                    <div className="caja__trasera-register">

                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia sesión para entrar en la página</p>

                        <li >
                            <Link to="/" className="IniciarSesion">Iniciar Sesión</Link>
                        </li>

                    </div>
                </div>


                <div className="contenedor__login-register">

                    <form action="" className="formulario__login">
                        <h2>Regístrarse</h2>
                        <input type="text" placeholder="PRIMER NOMBRE" />
                        <input type="text" placeholder="APELLIDO" />
                        <input type="text" placeholder="EMAIL" />
                        <input type="text" placeholder="DEPARTAMENTO" />
                        <input type="password" placeholder="CONTRASEÑA" />
                        <li >
                            <Link to="/" className="Regístro">Regístrarse</Link>
                        </li>
                    </form>
                </div>
            </div>
        </main>

    )
}

export default lonnout


