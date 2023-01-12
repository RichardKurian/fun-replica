import React from 'react'
import{Link} from 'react-router-dom'

import '../styles/Navbar.css';
function Navbar() {
    return (

    <div className="navBar">
    
   <div className='company'>
       <h2 className='comapny-name'>funding.com</h2>
   </div>

    <div className='buttonContainer'>
        
        <Link to='/'>
    <button className='button'>Home</button>
    </Link>

    </div>
   
   
    <div className='buttonContainer'>
    <Link to='/about'>
    <button className='button'>About</button>
    </Link>
    </div>

      
    <div className='buttonContainer'>
    <Link to='/products'>
    <button className='button'>Products</button>
    </Link>
    </div>


    <div className='buttonContainer'>
    <Link to='/login'>
    <button className='button'>Login</button>
    </Link>
    </div>

</div>
    )
}

export default Navbar
