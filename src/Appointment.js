import React, { Component } from 'react';
const axios = require('axios');

class Appointment extends Component {
  constructor(props){
    super()

    this.state = {
      appointments: []
    }

  }


  componentDidMount() {
    axios('http://localhost:3000/appointments')
      // .then(response => {
      //   response.json()
      // })
      .then(response =>{
        console.log(response.data);
        this.setState(prevState => ({
            appointments: response.data
          })
        )
      })

  }

  render() {
    console.log(this.state.appointments)

    const allAppointments = this.state.appointments.map((appt, index) => {
      return <div key={index}>{appt.reason}</div>
    })

    return (
      <div>
        <h1>Hello</h1>
        { allAppointments }
      </div>
    )
  }

}

export default Appointment