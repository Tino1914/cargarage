import React, { Component } from 'react'
import { getClient, createClient } from "../../actions/clientActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";
import Feedback from 'react-bootstrap/esm/Feedback';



class UpdateClient extends Component {

    constructor(){
        super()

        this.state = {
            "id": "",
            "firstName": "",
            "lastName": "",
            "userName": "",
            "password": "",
            "phone": "",
            "clientIdentifier": "",
            "car": "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    componentWillReceiveProps(nexProps){


        if(nexProps.errors){
            this.setState({errors:nexProps.errors});
        }
        const {
            id,
        firstName,
        lastName,
        userName,
        password,
        phone,
        clientIdentifier,
        car} = nexProps.client;
        this.setState({
            id,
        firstName,
        lastName,
        userName,
        password,
        phone,
        clientIdentifier,
        car
        })
    }


    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.getClient(id, this.props.history);
    }

onChange(e){
    this.setState({[e.target.name]:e.target.value})
}

onSubmit(e){
    e.preventDefault()

    const updateClient = {
        id: this.state.id,
        firstName: this.state.firstName,
        lastName:  this.state.lastName,
        userName:  this.state.userName,
        password:  this.state.password,
        phone:  this.state.phone,
        clientIdentifier:  this.state.clientIdentifier,
        car: this.state.car
    };

    this.props.createClient(updateClient, this.props.history);
}

    render() {
        const {errors} = this.state;
        return    (  
            <div>
            <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Update  Client form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className={classnames("form-control form-control-lg", {
                                    "is-invalid": errors.firstName
                                })} placeholder="Client First Name" name="firstName" 
                                value={this.state.firstName}
                                onChange={this.onChange}/>
                                {
                                    errors.firstName && (
                                        <div className="invalid-feedback">{errors.firstName}</div>
                                    )
                                }
                            
                            </div>

                            <div className="form-group">
                            <input type="text" className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.lastName
                            })}placeholder="Client Last Name" name="lastName"
                             value={this.state.lastName}
                             onChange={this.onChange}/>
                             {
                                errors.lastName && (
                                    <div className="invalid-feedback">{errors.lastName}</div>
                                )
                            }
                           
                            </div>

                            <div className="form-group">
                                <input type="text" className={classnames("form-control form-control-lg", {
                                    "is-invalid": errors.clientIdentifier
                                })} placeholder="Unique Client ID" name="clientIdentifier" 
                                value={this.state.clientIdentifier}
                                onChange={this.onChange}
                                    />
                                    {
                                        errors.clientIdentifier && (
                                            <div className="invalid-feedback">{errors.clientIdentifier}</div>
                                        )
                                    }
                                   
                                    
                            </div>
                            <div className="form-group">
                            <input type="text" className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.phone
                            })} placeholder="Phone Number" name="phone" 
                            value={this.state.phone} 
                            onChange={this.onChange}/>
                            {
                                errors.phone && (
                                    <div className="invalid-feedback">{errors.phone}</div>
                                )
                            }
                           
                        </div>
                          
                        
                            <h6 className="text-light bg-dark">User Name</h6>
                            <div className="form-group">
                            <input type="text" className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.userName
                            })} placeholder="UserName" name="userName" 
                            value={this.state.userName}
                            onChange={this.onChange}/>
                            {
                                errors.userName && (
                                    <div className="invalid-feedback">{errors.userName}</div>
                                )
                            }
                           
                            </div>
                            <h6 className="text-light bg-dark">Password</h6>
                            <div className="form-group">
                            <input type="password" className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.password
                            })} placeholder="Password" name="password"  
                            value={this.state.password}
                            onChange={this.onChange}/>
                            {
                                errors.password && (
                                    <div className="invalid-feedback">{errors.password}</div>
                                )
                            }
                            
                           
                            </div>
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

        </div>)
          
         
        
    }
}

UpdateClient.propTypes = {
    getClient: PropTypes.func.isRequired,
    createClient: PropTypes.func.isRequired,
    client: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    client: state.client.client,
    errors: state.errors
});


export default connect(mapStateToProps, { getClient, createClient })(UpdateClient);
