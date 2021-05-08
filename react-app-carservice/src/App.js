import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layouts/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddClient from './components/Client/AddClient';
import ClientItem from './components/Client/ClientItem';
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import store from "./store";
import UpdateClient from './components/Client/UpdateClient';
import ClientBoard from './components/ClientBoard/ClientBoard';
import AddCar from './components/ClientBoard/Cars/AddCar';
import UpdateCar from './components/ClientBoard/Cars/UpdateCar';
import Register from "./components/Auth/register-component";
import NameComponent from "./websocket/NameComponent.js";
import AboutPage from './components/AboutPage';
import Calendar from "./components/calendar"
import AssignMeeting from './components/AssignMeeting';
import Login from './components/Auth/login-component';



class App extends Component {
  render() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App" >

       <Header />
  

       <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/register-component" component={Register} />
      <Route exact path="/updateClient/:id" component={UpdateClient} />
      <Route exact path="/clientBoard/:id" component={ClientBoard} />
      <Route exact path="/addCar/:id" component={AddCar} />
      <Route exact path="/updateCar/:backlog_id/:car_id" component={UpdateCar} />
      <Route exact path="/websocket" component={NameComponent} />
      <Route exact path="/aboutPage" component={AboutPage} />
      <Route exact path="/createAppointment/:id" component={AssignMeeting}/>
      <Route exact path="/calendar" component={Calendar} />
      
    
    
    </div>
    </Router>
    </Provider>
   );
  }
}

export default App;
