import First from './first';
import Home from './Home';
import Homee from './homee';
import {Route, Routes} from 'react-router-dom';
import Normas from './components/Normas/normas';
import Subir from './components/Subir/subir';
import Usuario from './components/Usuario/usuario';

function App() {


  
  return (
    <div className='App'>

      <Routes>
          
          < Route path='/' element={<First/>} />
          < Route path='/Home' element={<Home/>} />
          < Route path='/Homee' element={<Homee/>} />
          < Route path='/Normas' element={<Normas/>} /> 
          < Route path='/Subir' element={<Subir/>} />
          < Route path='/Usuario' element={<Usuario/>} />




        </Routes>
    
    </div>
  )
}

export default App;
