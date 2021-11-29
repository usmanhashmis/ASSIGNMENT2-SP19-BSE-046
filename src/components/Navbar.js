import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container">
    <a className="navbar-brand"><Link to="/">Hashmi's Production</Link></a>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav" id="removes">
        <li className="nav-item active nav-link" id="removes" ><Link to="/" style={{listStyle:"none"}}>Home</Link></li>
        <li className="nav-item nav-link"><Link to="/AddSharyi">AddSharyi</Link></li>
        <li className="nav-item nav-link"><Link to="/sharyi">Sharyi</Link></li>
        <li className="nav-item nav-link"><Link to="/services">Services</Link></li>
        <li className="nav-item nav-link"><Link to="/contact">Contact</Link></li>
        <li className="nav-item nav-link "><Link to="login">Login</Link></li>
        <li className="nav-item nav-link"><Link to="signup">SignUp</Link></li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}

export default Navbar
