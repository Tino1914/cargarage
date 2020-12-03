import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Backlog from './Backlog';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getBacklog} from "../../actions/backlogActions";

 class ClientBoard extends Component {
  

//constructor to handle errors
 componentDidMount(){
     const { id } = this.props.match.params;
     this.props.getBacklog(id);
 }
    render() {

        const { id } = this.props.match.params;
        const { cars } = this.props.backlog;
        return (
            <div>
            <br></br>
            
            <div className="carsbackground">
    <div className="container">
    
    <Link to={`/addCar/${id}`} className="btn btn-secondary mb-5">
        <i className="fas fa-plus-circle">Add a car</i>
    </Link>
   
    <br />
    <hr />
    <Backlog cars_prop={cars}/>
   
    </div>
    </div>
    </div>
        );
    }
}

ClientBoard.propTypes = {
    backlog: PropTypes.object.isRequired,
    getBacklog: PropTypes.func.isRequired
}

const mapStateProps = state => ({
    backlog:state.backlog
})

export default connect(mapStateProps, {getBacklog})(ClientBoard);
