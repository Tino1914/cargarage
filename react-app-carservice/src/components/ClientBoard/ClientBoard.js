import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Backlog from './Backlog';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getBacklog} from "../../actions/backlogActions";

 class ClientBoard extends Component {
  

//constructor to handle errors

constructor(){
    super();
    this.state = {
        errors: {}
    };
}




 componentDidMount(){
     const { id } = this.props.match.params;
     this.props.getBacklog(id);
 }

 componentWillReceiveProps(nextProps) {
   if(nextProps.errors){
       this.setState({errors: nextProps.errors});
   }
 }

  

    render() {

        const { id } = this.props.match.params;
        const { cars } = this.props.backlog;
        const { errors } = this.state;

       let BoardContent;

    const boardAlgorithm = (errors, cars) => {
        if(cars.length < 1){
            if(errors.clientNotFound){
            return (<div className="alert alert-danger text-center" role="alert">
             {errors.clientNotFound}
             </div>
             );
            } else {
             return (  <div className="alert alert-info text-center" role="alert">
                No Cars on this Client
                </div>  )
            }
        } else {
            return <Backlog cars_prop={cars} />;
        }
    };

    BoardContent = boardAlgorithm(errors, cars);




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
    {BoardContent}
   
    </div>
    </div>
    </div>
        );
    }
}

ClientBoard.propTypes = {
    backlog: PropTypes.object.isRequired,
    getBacklog: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateProps = state => ({
    backlog: state.backlog,
    errors: state.errors
});

export default connect(mapStateProps, {getBacklog})(ClientBoard);
