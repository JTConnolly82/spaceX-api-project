import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


  const blob = {
    background: "url('https://fsmedia.imgix.net/da/c9/dc/31/71d9/4020/a90c/48225e0acdf1/the-starship-mk1-at-the-boca-chica-facility-in-texas.jpeg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60% 40%',
    borderRadius: '59% 61% 76% 49% / 30% 66% 44% 83% ',
    width: '550px',
    height: '80vh',
    display: 'flex',
    flexDirection: 'center',
    alignItems: 'center',
  }

  let homeMissionButton = {
    background: '-webkit-linear-gradient(#df431d, #f78383)',
    border: 'none',
    cursor: 'pointer',
    padding: "15px 25px 15px 25px",
    fontSize: "20px",
    borderRadius: "10px",
    fontWeight: 'bolder',
    maxWidth: '300px',
    marginTop: '60px'
  }
  
  let rightHome = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  return (
    <div className='home-wrap'>
     <div style={blob}>
     </div>
     <div style={rightHome}>
       <h1>SpaceX</h1>
       <button style={homeMissionButton}><Link style={{textDecoration: 'none', color: 'black'}} to="/Missions">See Where We've Been</Link></button>
       {/* <h1>Exploration</h1>
       <h1>Technologies</h1> */}
     </div>
    </div>
  )
}


export default Home;