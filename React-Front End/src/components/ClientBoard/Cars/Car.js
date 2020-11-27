import React, { Component } from 'react'

class Car extends Component{
    render() {
     
      const { car } = this.props;
      let priorityString;
      let priorityClass;

      if(car.priority===1){
          priorityClass = "bg-danger text=light"
          priorityString = "HIGH"
      }

      if(car.priority===2){
        priorityClass = "bg-warning text=light"
        priorityString = "MEDIUM"
    }
    if(car.priority===3){
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
                        <p className="card-text text-truncate ">
                           { car.acceptanceCriteria}
                        </p>
                        <a href="#" className="btn btn-primary">
                            View / Update
                        </a>

                        <button className="btn btn-danger ml-4">
                            Delete
                        </button>
                    </div>
                </div>

        );
    }
}
export default Car;
