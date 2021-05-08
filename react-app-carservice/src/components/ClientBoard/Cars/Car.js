import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { deleteCar } from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class Car extends Component{

    onDeleteClick(backlog_id, car_id){
        this.props.deleteCar(backlog_id. car_id)
    };


    render() {
      const { car } = this.props;
      let priorityString;
      let priorityClass;

      if(car.priority === 1){
          priorityClass = "bg-danger text=light"
          priorityString = "HIGH"
      }

      if(car.priority === 2){
        priorityClass = "bg-warning text=light"
        priorityString = "MEDIUM"
    }
    if(car.priority === 3){
        priorityClass = "bg-info text=light"
        priorityString = "LOW"
    }
        return (
           
                <div className="card mb-1 bg-light">

                    <div className={`card-header text-primary ${priorityClass}`}>
                        ID: {car.carSequence} -- Priority:{priorityString} 
                       
                    </div>
                    <div className="card-body bg-light">
                        <h5 className="card-title">{car.model+" with engine type: "+car.engine}</h5>
                        <h3 className="card-text text-truncate ">
                           {car.carHistory}
                        </h3>
                        <Link to={`/updateCar/${car.clientIdentifier}/${car.carSequence}`} className="btn btn-primary">
                            View / Update
                        </Link>

                        <button className="btn btn-danger ml-4" onClick={this.onDeleteClick.bind(this, car.clientIdentifier, car.carSequence)}>
                            Delete
                        </button>
                    </div>
                </div>

        );
    }
}

Car.propTypes = {
    deleteCar: PropTypes.func.isRequired
};

export default connect(null, { deleteCar })(Car);
