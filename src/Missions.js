import React from 'react';
import axios from 'axios';
import './styles.css';
import SingleMission from './SingleMission';
import NothingHere from './NothingHere';


class Missions extends React.Component {
  constructor() {
    super();
    this.state = {
      missions: [],
      missionName: '',
      year: '',
      showSuccess: false,
      showFailures: false,
      displayClear: false,
    }
  }

  componentDidMount() {
    axios.get('https://api.spacexdata.com/v3/launches/past').then((res)=>{
      let newMissions = res.data.reverse()
      this.setState({
        missions: newMissions,
        missionName: '',
        year: '',
        showSuccess: false,
        showFailures: false,
      })
    })
  }

  handleChange = (e) => { 
    let {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleClearMissions = (e) => {
    e.preventDefault();
    axios.get('https://api.spacexdata.com/v3/launches/past').then((res)=>{
      let newMissions = res.data.reverse();
      this.setState({
        missions: newMissions,
        missionName: '',
        year: '',
        showSuccess: false,
        showFailures: false,
        displayClear: !this.state.displayClear,
      });
      document.missionForm.reset();
    });

  }

  handleLaunchSuccess = (e) => {
    let {name} = e.target;
    if (name === 'success') {
      this.setState({
        showSuccess: !this.state.showSuccess
      })
    }
    if (name === 'failure') {
      this.setState({
        showFailures: !this.state.showFailures
      })
    }
  }


render() {
  let missionComponents = this.state.missions.map((mission)=>{
    return <SingleMission key={Math.random()} {...mission}/>
  })


  let handleSubmit = (e) => {
    e.preventDefault();
    let filteredMissions = this.state.missions.filter((mission)=>{
      if (this.state.missionName && this.state.year && this.state.showSuccess) {
        return mission.mission_name.toLowerCase().includes(this.state.missionName.toLowerCase()) && mission.launch_year === this.state.year && mission.launch_success === true;
      } else if (this.state.missionName && this.state.year && this.state.showFailures) {
        return mission.mission_name.toLowerCase().includes(this.state.missionName.toLowerCase()) && mission.launch_year === this.state.year && mission.launch_success === false;
      } else if (this.state.year && this.state.showSuccess) {
        return mission.launch_year === this.state.year && mission.launch_success === true;
      } else if (this.state.year && this.state.showFailures) {
        return mission.launch_year === this.state.year && mission.launch_success === false;
      } else if (this.state.missionName && this.state.showSuccess) {
        return mission.mission_name.toLowerCase().includes(this.state.missionName.toLowerCase()) && mission.launch_success === true;
      } else if (this.state.missionName && this.state.showFailures) {
        return mission.mission_name.toLowerCase().includes(this.state.missionName.toLowerCase()) && mission.launch_success === false;
      } else if (this.state.missionName && this.state.year) {
        return mission.mission_name.toLowerCase().includes(this.state.missionName.toLowerCase()) && mission.launch_year === this.state.year; 
      } else if (this.state.showSuccess) {
        return mission.launch_success === true;
      } else if (this.state.showFailures) {
        return mission.launch_success === false;
      } else if (this.state.year) {
        return mission.launch_year === this.state.year
      } else if (this.state.missionName) {
        return mission.mission_name.toLowerCase().includes(this.state.missionName.toLowerCase()); 
      }
    })
    this.setState({
      missions: filteredMissions,
      displayClear: !this.state.displayClear
    })
  }


  let missionButton = {
    background: '-webkit-linear-gradient(#df431d, #f78383)',
    border: 'none',
    cursor: 'pointer',
  }
  let missionButtonClear = {
    background: '-webkit-linear-gradient(#df431d, #f78383)',
    border: 'none',
    display: this.state.displayClear,
    cursor: 'pointer',
  }
  

  return (
    <div className='mission-wrapper'>
     <div className='top-mission-styles'>
     <h1 id='launch-page-title'>Launch History</h1>
        <form className='mission-form' onSubmit={handleSubmit} name='missionForm'>
          <div className='mission-form-inputs'>
            <input onChange={this.handleChange} value={this.state.year} name='year' placeholder='year' />
            <input onChange={this.handleChange} value={this.state.missionName} name='missionName' placeholder='mission name' />
            <div className="checkdiv">
            <div><input onChange={this.handleLaunchSuccess} type='checkbox' name="success" value={this.state.showSuccess} /> Successes</div>
            <div><input onChange={this.handleLaunchSuccess} type='checkbox' name="failure" value={this.state.showFailures} /> Failures</div>
            </div>
          </div>
          {this.state.displayClear ? <button style={missionButtonClear} onClick={this.handleClearMissions} className='mission-clear'>Reset</button> : <button style={missionButton}>Search</button>}
        </form>
     </div>
     <div className='mission-info-wrap'>
        {this.state.displayClear && this.state.missions.length === 0 ? <NothingHere/> : missionComponents}
     </div>
    </div>
  )
 }
}


export default Missions;