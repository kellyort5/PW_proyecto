import { Link } from "react-router-dom";
import '../assets/css/styles.css';
const NavBar = () => {
   return (


      <nav>
         <ul>
            <li>
               <Link to="/Home">Inicio</Link>
            </li>

            <li>
               <Link to="/Usuario">Usuario</Link>
            </li>

            <li>
               <Link to="/normas">Normas</Link>
            </li>

            <li>
               <Link to="/Subir">Publicar</Link>
            </li>
            
         </ul>

         <div className="buscar">
            <input type={Text} placeholder="buscar" required></input>
            <div className="btn">
               <i className="fas fa-search icon"></i>
            </div>
         </div>
      </nav>


   );
}

export default NavBar;