import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import classnames from "classnames";
import { addCar } from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";



 class AddCar extends Component {

   constructor(props){
       super(props)
       const { id } = this.props.match.params;
       this.state = {
           "model": "",
           "engine": "",
           "licensePlate": "",
           "carHistory": "",
           "dueDate": "",
           "priority": 0,
           "status": "",
           "clientIdentifier": id,
           errors:{}

       };
       this.onChange = this.onChange.bind(this);
       this.onSubmit = this.onSubmit.bind(this);

   }

  componentWillReceiveProps(nextProps){
      if(nextProps.errors){
          this.setState({ errors: nextProps.errors })
      }
  }

   onChange(e){
       this.setState({ [e.target.name]: e.target.value })
   }

   onSubmit(e){
    e.preventDefault();

    const newTask={
        "model": this.state.model,
        "licensePlate": this.state.licensePlate,
        "engine": this.state.engine,
        "carHistory": this.state.carHistory,
        "dueDate": this.state.dueDate,
        "priority": this.state.priority,
        "status": this.state.status
    };
   this.props.addCar(this.state.clientIdentifier, newTask, this.props.history);
   }

    render() {


  

        const { id } = this.props.match.params;
        const { errors } = this.state;
        return (
            <div className="add-PBI">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <Link to={`/clientBoard/${id}`} className="btn btn-light">
                        Back to Client Board
                    </Link>
                    <h4 className="display-4 text-center">Add car to the client with id:{id}</h4>
                 <p className="lead text-center">Client Name + Client Code</p>
                    <Form onSubmit={this.onSubmit}>
    
                        <div className="form-group">
                        <Input type="text" className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.model
                        })} name="model" placeholder="Car model" 
                        value={this.state.model}
                        onChange={this.onChange}/>
                        {
                            errors.model && (
                                <div className="invalid-feedback">{errors.model}</div>
                            )
                        }
                    </div>
                    <div className="form-group">
                        <Input type="text" className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.licensePlate
                        })} name="licensePlate" placeholder="License plate" 
                        value={this.state.licensePlate}
                        onChange={this.onChange}/>
                        {
                            errors.licensePlate && (
                                <div className="invalid-feedback">{errors.licensePlate}</div>
                            )
                        }
                    </div>
                    <div className="form-group">
                    <Input type="text" className="form-control form-control-lg" name="engine" placeholder="Car engine"
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
                            <Input type="date" className="form-control form-control-lg" name="dueDate" 
                            value={this.state.dueDate}
                            onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <select className="form-control form-control-lg" name="priority"
                            value={this.state.priority}
                            onChange={this.onChange}>
                                <option value={0}>Select Priority</option>
                                <option value={1}>Car which needs to be repaired now</option>
                                <option value={2}>Car could be repaired in some time</option>
                                <option value={3}>Just a new car</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select className="form-control form-control-lg" name="status"
                            value={this.state.status}
                            onChange={this.onChange}>
                                <option value="">Select Status</option>
                                <option value="Current car">Add car</option>
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

        )
    }
}

AddCar.propTypes = {
    addCar: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, { addCar })(AddCar);
