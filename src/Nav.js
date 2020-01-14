import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Nav = () => {

  


  let logoStyle = {
    display: 'flex',
    alignItems: 'center'
  }

  let linkChunk = {
    marginRight: '18px',

  }

  return (
    <div className='nav-style'>
      <div style={logoStyle}>
        <Link style={{width: 'auto'}} to="/"><img className='nav-logo' src="https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg" alt="logo" /></Link>
      </div>
      <div style={linkChunk}>
      <Link className='nav-links' to="/">Home</Link>
      <Link className='nav-links' to="/Roadster">Roadster</Link>
      <Link className='nav-links' to="/Missions">Missions</Link>
      </div>
    </div>
  )
}


export default Nav;
