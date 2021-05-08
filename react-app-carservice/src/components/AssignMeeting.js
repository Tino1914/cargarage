import React, { Component } from 'react'
import AppointmentService from '../services/AppointmentService';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
 class AssignMeeting extends Component {


    state ={
        currentClient: undefined,
        date:moment().format("DD-MM-YYYY"),
        time: '10:00'
      }
      componentDidMount(){
        this.getClient(this.props.match.params.id);
        
      }



      getClient = (id) =>{
        // console.log(id);
        AppointmentService.getClient(id).then(response => {
          this.setState({
            currentClient: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e)
        });
      }
      handleChange =(date)=>{
        console.log(this.state);
        console.log(date);
        var newDate = moment(date).format("DD-MM-YYYY")
        this.setState({
          date:newDate
    
        })
        // document.getElementById("date").value=this.state.date;
      }
      handleTime=(time)=>{
        console.log(time);
        var newTime = moment(time).format("HH:mm");
        this.setState({
          time:newTime
        })
      }
      handleSubmit = () =>{
        var date = this.state.date;
        var time = this.state.time;
        var currentClientID = this.state.currentClient.id;
        console.log(currentClientID);
        var data ={
          "date": date,
          "time":time
        }
        console.log(data);
        AppointmentService.makeAppointment(currentClientID, data)
        .then(res =>{
            // window.location.href='/clients'
            console.log(res);
            this.props.history.push("/calendar")
        });
    
    
      }








    render() {
        console.log(this.state);
        return (
            <div className="createAppointmentHello" >

        

            {
              this.state.currentClient ?
              <div style={{marginLeft: "750px", marginTop:"200px"}}>
                <p style={{color:"black"}}>
                 Hello
                </p> 
    
                <div style={{color:"black"}}>
                 create an appointment for {this.state.currentClient.firstName} {this.state.currentClient.lastName}
                </div>
                <br></br>
                <table className="centerTable">
                  <thead>
                    <tr>
                      <th>
                        <div className="col-12">
                          <label className="labelAppointment"> <h6 className="margin3" style={{color:"black"}}>select a date</h6>
                            <DatePicker id="date" autoFocus value={this.state.date} onChange={this.handleChange} />
                          </label>
                        </div>
                      </th>
                      <th>
                        <div className="col-12 createAppointmentDivforInput">
                          <label className="labelAppointment"> <h6 className="margin3" style={{color:"black"}}> select a time</h6>
                            <DatePicker showTimeSelect showTimeSelectOnly value={this.state.time} dateFormat="HH:mm" timeIntervals={30} onChange={this.handleTime}></DatePicker>
                      
                          </label>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  
                </table>
                  <div className="divButtonAppointment">
                    <button className="btn btn-primary btn-lg buttonAppointment" onClick={this.handleSubmit}>
                      Make Appointment
                    </button>
                  </div>
                </div>
              :
              <h3> ... waiting for client to load</h3>
            }
           
          </div>
        )
    }
}
export default AssignMeeting;

