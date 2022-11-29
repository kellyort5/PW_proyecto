import { Link } from 'react-router-dom';
import '../assets/css/styles.css';
    import logo from "../assets/imagenes/logo.png";
const Header = () => {
    return (
        <header>

            <div className="logo">
                <Link to="/Home"> <img src={logo} /> </Link>
            </div>

            <h2 className='nombre-header'>TRADE OFF SIVAR</h2>

            <div className="cerrar">
                <Link to="/"> Cerrar sesion </Link>
            </div>

        </header>

    )
}

export default Header;