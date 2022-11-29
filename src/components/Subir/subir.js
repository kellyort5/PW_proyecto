import React from 'react'
import './subir.css';
import Header from '../Header/Header';
import NavBar from '../Navbar/Navbar';
import '../assets/css/styles.css'
import { Link } from "react-router-dom";

const Subir = () => {

    return (

        <>
            <Header />
            <NavBar />
            <main>

                <div className="contenedor_todo">
                    <div className="contenedor_login-register">

                        <form action="" className="formulario_login">
                            <h2>Publicar prenda</h2>

                            <laber>Usuario:</laber>
                            <input type="text" placeholder="" />
                            <laber>Categoria:</laber>
                            <input type="text" placeholder="" />
                            <laber>Lugar:</laber>
                            <input type="text" placeholder="" />
                            <laber>Detalles:</laber>
                            <input type="text" placeholder="" />
                            <laber>Fotos de la prenda:</laber>
                            <input type="text" placeholder="" />
                            <laber>Preferencia de intercambio:</laber>
                            <input type="text" placeholder="" />
                            <li>
                                <Link to="/Home">Publicar</Link>
                            </li>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Subir;