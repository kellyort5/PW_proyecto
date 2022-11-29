import React from 'react'
import './normas.css';
import Header from '../Header/Header';
import NavBar from '../Navbar/Navbar';
const Normas = () => {

    return (
        <>
            <Header />
            <NavBar />
            <main>

                <div className="contnedor_tod">
                    <div className="contnedor_login-registe">

                        <form action="" className="frmulario_logi">
                            <h3>NORMAS DE LA PAGINA </h3>
                            <p>- No se permite la venta de ropa</p>
                            <p>- No se permite el intercambio de seres vivos</p>
                            <p>- No se permite el anuncio de ningun tipo de contacto</p>
                            <p>- Esta prohibido el uso de la pagina para fines de uso ilegal, como por ejemplo el intercambio o venta de sustancias ilicitas</p>
                            <p>- No se permite el uso de lenguaje obseno</p>

                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Normas;