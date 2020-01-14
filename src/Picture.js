import React from 'react';


const Picture = (props) => {

  let picStyle = {
    height: '150px',
    width: '120px',
    padding: '3px',
    border: '2px solid #f1746b',
    borderRadius: '2px'
  }

 

  return (
    <>
      <div>
        <img style={picStyle} src={`${props.picInfo}`} alt="launchpic"/>
      </div>
    </>
  )
}

export default Picture;
