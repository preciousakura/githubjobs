import React, { useState } from 'react'
import '../Style/Components.css';
import { FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";


function Navbar(){
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
        <div className="menu-reponsivo">
          <FaBars onClick={(e) => setShowMenu(!showMenu)}/>
          {showMenu && showMenu? <div className="menu">
          <Link to={"/Jobs"}><span><div>All Jobs</div></span></Link>
            <Link to={"/HowItWorks"}><span><div>How it Works</div></span></Link>
          </div> : <></>}
        </div>
        
        <Link to={"/githubjobs"}><span><span className="logo">Github JOBS</span></span></Link>
        <div className="submenu">
          <Link to={"/Jobs"}><span>All Jobs</span></Link>
          <Link to={"/HowItWorks"}><span>How it Works</span></Link>
          
        </div>
    </div>
  );  
}

export default Navbar;