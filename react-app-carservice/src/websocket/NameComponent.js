import React, { Component } from "react";
import SockJS from "sockjs-client";
import {Stomp} from "@stomp/stompjs";


export default class NameComponent extends Component {

    constructor(props) {
        super(props);
    //this.setConnected=this.setConnected.bind(this);
        this.state = {
            stompClient: null,
            greetings:[]
        };
    }
     
    // single websocket instance for the own application and constantly trying to reconnect.
     
    componentDidMount() {
        this.connect();
    }
     
    timeout = 250; // Initial timeout duration as a class variable
     
    /**
     * @function connect
     * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
     */
     
    //can use it inside a lambda
     showGreeting=(message)=>{
        console.log(message);
        
        this.setState(function (prevState) {
            return {
                //return everything from the last state and then change
                ...prevState,
                greetings: [...prevState.greetings, message], //take the old greetings and then add a new greeting(message)
              
            };
          });
    }
     setConnected=(connected)=> {
         console.log(connected);
    }
     sendName() {
        this.state.stompClient.send("/app/hello", {}, JSON.stringify({'name': "Konstantin"}));
    }
    connect() {
        let that=this;
        var socket = new SockJS('http://localhost:8080/websocket');
        this.state.stompClient = Stomp.over(socket);
        this.state.stompClient.connect({}, function (frame) {
            that.setConnected(true);
            console.log('Connected: ' + frame);
            that.state.stompClient.subscribe('/topic/greetings', function (greeting) {
                that.showGreeting(JSON.parse(greeting.body).content);
            });
        });
    }
    /**
     * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
     */
    check = () => {
        const { ws } = this.state;
        if (!ws || ws.readyState == WebSocket.CLOSED) this.connect(); //check if websocket instance is closed, if so call `connect` function.
    };




    render() {
        return (
            <div>
            <div style={{color: "black"}} id="main-content" className="container">
<div style={{color: "black"}} className="row">
    <div  className="col-md-6">
        <div className="form-inline">
            <div className="form-group">
                <label style={{color: "black"}} for="connect">WebSocket connection:</label>
                <button id="connect" className="btn btn-default" type="submit">Connected</button>
               
            </div>
        </div>
    </div>
    <div className="col-md-6">
        <div className="form-inline">
            <div className="form-group">
                <label style={{color: "black"}} for="name">What is your name?</label>
                <input type="text" id="name" className="form-control" placeholder="Your name here..."/>
            </div >
            <button style={{background: "grey"}} onClick={()=>this.sendName()}id="send" className="btn btn-default" type="submit">Send</button>
        </div>
    </div>
</div>
<div className="row">
    <div className="col-md-12">
        <table id="conversation" className="table table-striped">
            <thead>
            <tr>
                <th>Greetings</th>
                
            </tr>
            </thead>
            <tbody id="greetings"  className="col-md-7">
                {this.state.greetings.map(greeting=>(<tr>
                    <th>
                        {greeting}
                    </th>
                </tr>))}
            </tbody>
        </table>
    </div>
</div>
</div>
        </div>
        )
    }
}
