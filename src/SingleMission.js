import React from 'react';
import Picture from './Picture';

const SingleMission = (props) => {


  let patchStyle = {
    maxWidth: '150px'
  }
  let missionTopDesc = {
    display: 'flex',
    gridColumn: '1/3'
  }


  let missionTopInfo = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  let descriptionPicture = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  let picDiv = {
    padding: '10px'
  }

  let pics = props.links.flickr_images.slice(0, 1);

  let pictureComponents = pics.map((pic)=>{
    return <Picture key={Math.random()*888} picInfo={pic} />
  })

  let date = props.launch_date_local.toString();
  let newDate = date.slice(0, 10);
  let newerDate = newDate.split('-')
  let finalDate = [];
  finalDate.push(newerDate[1]);
  finalDate.push(newerDate[2]);
  finalDate.push(newerDate[0]);
 


  let displayedDate = `${finalDate[0]}-${finalDate[1]}-${finalDate[2]}`;

  return (
    <div className='missionWrap'>
      <div style={missionTopInfo}>
        <h2 className='mission-name'>{props.mission_name}</h2>
        <img style={patchStyle} src={props.links.mission_patch} alt=""/>
      </div>
      <div style={missionTopDesc}>
        <div>
          <h3>Rocket Name: {props.rocket.rocket_name}</h3>
          <h3>Launch Site: {props.launch_site.site_name_long}</h3>
          <h3>Date: {displayedDate}</h3>
          <h3>Launch Result: {props.launch_success ? 'Success!' : 'Failure'}</h3>
          {props.launch_success ? 
            <div style={descriptionPicture}>
                <h4>{props.details}</h4>
                <div style={picDiv}>{pictureComponents}</div>
            </div>
            :<div style={descriptionPicture}>
               <h4>Reason for failure: {props.launch_failure_details.reason}</h4>
               <div style={picDiv}>{pictureComponents}</div>
            </div>}
        </div>
      </div>
      {/* <div style={rightContent}>
        
        <iframe  src={props.links.video_link} frameborder="0"></iframe>
      </div> */}
    </div>
  )
}

export default SingleMission;