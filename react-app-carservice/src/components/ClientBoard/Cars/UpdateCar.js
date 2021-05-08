import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from "classnames";
import { getCar, updateCar } from "../../../actions/backlogActions"
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

 class UpdateCar extends Component {


    constructor(){
        super()
        
        this.state={
            "id":"",
            "model": "",
           "engine": "",
           "carSequence": "",
           "licensePlate": "",
           "carHistory": "",
           "dueDate": "",
           "priority": "",
           "status": "",
           "clientIdentifier": "",
          " created_At": "",
           errors:{}

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        const {backlog_id, car_id} = this.props.match.params;
        this.props.getCar(backlog_id, car_id, this.props.history);
    }


    componentWillReceiveProps(nextProps){
      
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }

        const {
           id,
           model,
           engine,
           carSequence,
           licensePlate,
           carHistory,
           dueDate,
           priority,
           status,
           clientIdentifier,
           created_At

        } = nextProps.car;

        this.setState({
            id,
            model,
           engine,
           carSequence,
           licensePlate,
           carHistory,
           dueDate,
           priority,
           status,
           clientIdentifier,
           created_At
        });
    }

onChange(e){
    this.setState({[e.target.name]:e.target.value})
}

 onSubmit(e){
     e.preventDefault()

     const UpdateCar={
        "id": this.state.id,
        "model": this.state.model,
       "engine": this.state.engine,
       "carSequence": this.state.carSequence,
       "licensePlate": this.state.licensePlate,
       "carHistory": this.state.carHistory,
       "dueDate": this.state.dueDate,
       "priority": this.state.priority,
       "status": this.state.status,
       "clientIdentifier": this.state.clientIdentifier,
       "created_At": this.state.created_At
     }

    // console.log(UpdateCar);

    this.props.updateCar(this.state.clientIdentifier, this.state.carSequence, UpdateCar, this.props.history);
 }

    render() {
    const { errors } = this.state;


   // da se opravi nanovo neshto sum oburkallllllllllllll
       
        return (
            <div>
            <div className="add-PBI">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to ={`/clientBoard/${this.state.clientIdentifier}`} className="btn btn-light">
                            Back to Client Board
                        </Link>
                        <h4 className="display-4 text-center">Update car to the client with id:</h4>
                     <p className="lead text-center">Client Name: + Client Code</p>
                        <Form onSubmit={this.onSubmit}>
        
                            <div className="form-group">
                            <input type="text" className={classnames("form-control form-control-lg", {
                                "is-invalid":errors.model
                            })} name="model" placeholder="Car model" 
                            value={this.state.model}
                            onChange={this.onChange}/>{
                                errors.summary && (
                                    <div className="invalid-feedback">{errors.model}</div>
                                )
                            }
                           
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" name="licensePlate" placeholder="License plate" 
                            value={this.state.licensePlate}
                            onChange={this.onChange}/>
                          
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control form-control-lg" name="engine" placeholder="Car engine"
                        value={this.state.engine} 
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                    <textarea className="form-control form-control-lg" placeholder="Car History" name="carHistory" 
                    value={this.state.carHistory}
                    onChange={this.onChange}/>
                </div>
                            <h6>Due Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" name="dueDate" 
                                value={this.state.dueDate} 
                        onChange={this.onChange}
                               />
                            </div>
                            <div className="form-group">
                                <select className="form-control form-control-lg" name="priority"
                                value={this.state.priority} 
                                onChange={this.onChange}
                               >
                                    <option value={0}>Select Priority</option>
                                    <option value={1}>Car which needs to be repaired now</option>
                                    <option value={2}>Car could be repaired in some time</option>
                                    <option value={3}>Add/Update car</option>
                                </select>
                            </div>
    
                            <div className="form-group">
                                <select className="form-control form-control-lg" name="status"
                                value={this.state.dueDate} 
                                onChange={this.status}
                              >
                                    <option value="">Select Status</option>
                                    <option value="Current car">Add/Update car</option>
                                    <option value="In progress for a car">A car that is under maintanence</option>
                                    <option value="Reapaired on the car">A car that is ready</option>
                                </select>
                            </div>
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </Form>
                    </div>
                </div>
            </div>
        </div>
            </div>
        )
    }
}


UpdateCar.propTypes = {
    getCar: PropTypes.func.isRequired,
    car: PropTypes.object.isRequired,
    updateCar: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
    car: state.backlog.car,
    errors: state.errors
})

export default connect(mapStateToProps, {getCar, updateCar})(UpdateCar);