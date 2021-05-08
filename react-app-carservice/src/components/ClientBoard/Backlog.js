import React, { Component } from 'react';
import Car from "./Cars/Car";

class Backlog extends Component {
    render() {
        const { cars_prop } = this.props;
       const tasks = cars_prop.map(car =>(
           <Car key={car.id} car={car} />
       ));

    let currentCars = [];
    let inProgressCars = [];
    let repairedOnCar = [];


    for(let i=0; i<tasks.length; i++){
        if(tasks[i].props.car.status === "Current car"){
            currentCars.push(tasks[i]);
        }

        if(tasks[i].props.car.status === "In progress for a car"){
            inProgressCars.push(tasks[i]);
        }
        
        if(tasks[i].props.car.status === "Reapaired on the car"){
            repairedOnCar.push(tasks[i]);
        }
    }
   
        return (
           
               <div className="container">
                   <div className="row">
                       <div className="col-md-4">
                           <div className="card text-center mb-2">
                               <div className="card-header bg-secondary text-white">
                                   <h3>Current Car</h3>
                               </div>
                           </div>
                           {currentCars}
                           {
                               //insert task
                           }
           
                  
                       </div>
                       <div className="col-md-4">
                           <div className="card text-center mb-2">
                               <div className="card-header bg-primary text-white">
                                   <h3>In Progress for Car</h3>
                               </div>
                           </div>
                {
                 inProgressCars
           }
                       </div>
                       <div className="col-md-4">
                           <div className="card text-center mb-2">
                               <div className="card-header bg-success text-white">
                                   <h3>Repaired on the car</h3>
                               </div>
                           </div>
                          { 
                          repairedOnCar
                       }
                       </div>
                   </div>
               </div>
           
        )
    }
}
export default Backlog;
