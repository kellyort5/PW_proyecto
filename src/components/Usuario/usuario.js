import React from 'react'
import './usuario.css';
import Header from '../Header/Header';
import NavBar from '../Navbar/Navbar';
import '../assets/css/styles.css'
import { Link } from "react-router-dom";

const Usuario = () => {

    return (

        <>
            <Header />
            <NavBar />
            <main>

                <div className="contnedor_todo">
                    <div className="contnedor_login-register">

                        <form action="" className="frmulario_login">
                            <h2>Perfil de usuario</h2>

                            <laber>Nombre:</laber>
                            <input type="text" placeholder="" />
                            <laber>Departamento:</laber>
                            <input type="text" placeholder="" />
    
                            <li>
                                <Link to="/Home">Editar</Link>
                            </li>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Usuario;