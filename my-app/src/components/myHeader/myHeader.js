import React from 'react';
import {Link} from 'react-router-dom';
import './myHeader.css';
const Header = () => {
    return ( 

        <div className="navbar_1">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">     
              <Link to="/"><h6 className="navbar-brand ml-md-5 ml-0 pl-2"><img src={require('../../img/header_logo.png')}  className="logoname"/> 
                  
              </h6></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                </button>
              
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item ml-2">
                      <Link to="/"><h6 className="nav-link">Home</h6></Link>
                  </li>
                  <li className="nav-item ml-1">
                  <Link to="/"><h6 className="nav-link project" href="#">WHy This Project?</h6></Link>
                  </li>
                  <li className="nav-item ml-1">
                  <Link to="/OurValues"><h6 className="nav-link project" href="#">Our Values</h6></Link>
                  </li>
                  <li className="nav-item">
                      <h6 className="nav-link project_1" href="#">Application</h6>
                  </li>
                  <li className="nav-item ">
                      <button className="bnt-23">Join Us</button>
                  </li>
                  </ul>
              </div>
              </div>
          </nav>
      </div>
    )
}
export default Header; 