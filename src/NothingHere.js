import React from 'react';


const NothingHere = () => {

  let lostPic = {
    width: '40vw'
  }

  let lostDiv = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#929292'
  }

  return (
    <div style={lostDiv}>
      <h1>This doesn't look right...</h1>
      <h3>You likely missed your search parameters</h3>
      <img style={lostPic} src="https://mediad.publicbroadcasting.net/p/wcai/files/styles/x_large/public/201802/spacexuse.jpeg" alt="are you lost?"/>
    </div>
  )
}

export default NothingHere;