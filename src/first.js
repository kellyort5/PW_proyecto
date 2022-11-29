import React from 'react'
import Login from './components/Login/login'
import Lonout from './components/Lonout/lonout';

import {Route, Routes} from 'react-router-dom';


function first() {
    return (
        <div className='first'>
            <Routes>
                < Route path='/' element={< Login />} />  
                < Route path='/lonout' element={< Lonout />} />                
             
            </Routes>      
              </div>)
}

export default first