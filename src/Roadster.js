import React from 'react';
import axios from 'axios';



class Roadster extends React.Component {
  constructor() {
    super();
    this.state = {
      details: [],
      earthDistance: 0,
      marsDistance: 0
    }
  }

  componentDidMount() {
    axios.get('https://api.spacexdata.com/v3/roadster').then((res)=> {
      this.setState({
        details: res.data,
        earthDistance: res.data.earth_distance_mi,
        marsDistance: res.data.mars_distance_mi
      })
    })
  }

  handleRange(e) {
    console.log(e);
  }


 


  render() {
    let {details} = this.state;

    // mars is about 38.6 million miles from earth
    const totalDistance = 35500000
    //mars total divided by dist. covered by car
    let percentageWayThere = this.state.earthDistance / totalDistance;
    console.log(percentageWayThere);
   
    let carPic = {
      maxWidth: '700px'
    }

    let starmanDeets = {
      padding: '20px',
      color: '#969b9f'
    }

    let statBar = {
      padding: '22px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#969b9f',
      border: '1px solid #ee6b5d',
      borderRadius: '15px',
      marginTop: '90px',
      marginBottom: '70px'
    }

    return (
      <div className="whole-roadster">
        <div className='title-div-roadster'>
          <img style={carPic} src="https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict0003831957224.jpg" alt="starman-tesla"/>
          <h1>Roadster</h1>
        </div>
        <div style={starmanDeets}>
          <p>{details.details}</p>
        </div>
        <div className='roadster-info'>
            <div className="roadster-distance-wrap">
              <div className='scale-size'>
                <div id='earth'></div>
                <img style={{marginLeft: `${percentageWayThere}%`, maxWidth: '70px', alignSelf: 'center'}} src="http://pngimg.com/uploads/tesla_car/tesla_car_PNG56.png" alt="roadster"/>
                <div id='mars'></div>
              </div>
              <div style={statBar}>
                <div>
                  <h2 className='roadster-info-title'>Where Is Roadster Now?</h2>
                </div>
                <div>
                  <h3>Distance from earth: {Math.round(details.earth_distance_mi)} miles</h3>
                  <h3>Distance from mars: {Math.round(details.mars_distance_mi)} miles</h3>
                  <h3>Days in flight: {Math.round(details.period_days)}</h3>
                  <h3>Weight: {details.launch_mass_lbs} lb</h3>
                  <h3>Current Speed: {Math.round(details.speed_mph)} mph</h3>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}


export default Roadster;
