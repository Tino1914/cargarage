
import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentService from '../services/AppointmentService';
import moment from 'moment';





class calendar extends Component{

    state={
      date:moment().format("DD-MM-YYYY"),
      appointments:undefined,
      personName:""
    }
  
  
  
    handleChange =(date)=>{
      
      var newDate = moment(date).format("DD-MM-YYYY")
      console.log(newDate);
      this.setState({
        date:newDate
  
      });
  
      AppointmentService.getAppointmentsForDate(this.state.date)
      .then(res =>{
        const appointments = res.data;
        console.log(appointments);
        this.setState({
          appointments:appointments
        })
      })
    }
    getFullNameById(id){
        AppointmentService.getClient(id).then(response => {
      console.log(response.data.firstName + " " + response.data.lastName);
      this.state.personName = response.data.firstName + " " + response.data.lastName;
    }).catch(e => {
      console.log(e);
    });
    }
  
    render(){
  
      return(
        <div>
          <div style={{marginLeft: "500px"}} className="center">
          <table>
              <tbody>
                <tr>
                  <td>
                    <Calendar onChange={this.handleChange}/>
                  </td>
                  <td>
                    <section>
                      {
                        this.state.appointments ? 
                        this.state.appointments.map(app =>
                          app ?
                          <div onLoad={this.getFullNameById(app.personID)} on>
                            <p style={{color: "black"}}>
                              Scheduled meeting at {app.time} with {this.state.personName}
                            </p>
                          </div>
                          :null
                        )
                        :
                        <p className="blackFont">
                          There are no meetings scheduled for this day.
                        </p>
                        
                      }
                    </section>
                  </td>
                </tr>
              </tbody>
          </table>
          </div>
        </div>
      )
    }
  }
  export default calendar;