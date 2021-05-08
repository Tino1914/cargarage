import React, { Component } from 'react'
import { getClient, createClient } from "../../actions/clientActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";
import Feedback from 'react-bootstrap/esm/Feedback';
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";



class UpdateClient extends Component {

    constructor(){
        super()

        this.state = {
            "id": "",
            "firstName": "",
            "lastName": "",
            "username": "",
            "password": "",
            "clientIdentifier": "",
            "email": "",
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
        username,
        password,
        clientIdentifier,
        email} = nexProps.client;
        this.setState({
            id,
        firstName,
        lastName,
        username,
        password,
        clientIdentifier,
        email
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
        username:  this.state.username,
        password:  this.state.password,
        clientIdentifier:  this.state.clientIdentifier,
        email: this.state.email
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
                        <Form onSubmit={this.onSubmit}>
                        <div className="form-group">
                        <Input type="text" className={classnames("form-control form-control-lg ",{
                               "is-invalid":errors.firstName
                           }) } placeholder="Client First Name" name="firstName" value={this.state.firstName}  onChange={this.onChange}/>
                           {errors.firstName && (
                               <div className="invalid-feedback">{errors.firstName}</div>
                           )}
                           </div>
     
                           <div className="form-group">
                           <Input type="text" className={classnames("form-control form-control-lg ",{
                                  "is-invalid":errors.lastName
                              }) } placeholder="Client Last Name" name="lastName" value={this.state.lastName}  onChange={this.onChange}/>
                              {errors.lastName && (
                                  <div className="invalid-feedback">{errors.lastName}</div>
                              )}
                              </div>
     
     
     
                                       
                              <div className="form-group">
                              <Input type="text" className={classnames("form-control form-control-lg ",{
                                     "is-invalid":errors.username
                                 }) } placeholder="Client User Name" name="username" value={this.state.username}  onChange={this.onChange}/>
                                 {errors.username && (
                                     <div className="invalid-feedback">{errors.username}</div>
                                 )}
                                 </div>
     
     
                                 <div className="form-group">
                                 <Input type="text" className={classnames("form-control form-control-lg ",{
                                        "is-invalid":errors.email
                                    }) } placeholder="Client  Email" name="email" value={this.state.email}  onChange={this.onChange}/>
                                    {errors.email && (
                                        <div className="invalid-feedback">{errors.email}</div>
                                    )}
                                    </div>
     
                              <div className="form-group">
                              <Input type="text" className={classnames("form-control form-control-lg ",{
                                     "is-invalid":errors.password
                                 }) } placeholder="Client License Plate" name="password" value={this.state.password}  onChange={this.onChange}/>
                                 {errors.password && (
                                     <div className="invalid-feedback">{errors.password}</div>
                                 )}
                                 </div>
     
     
     
     
                                    <div className="form-group">
                                    <Input type="text" className={classnames("form-control form-control-lg ",{
                                           "is-invalid":errors.clientIdentifier
                                       }) } placeholder="Client Identifier" name="clientIdentifier" value={this.state.clientIdentifier}  onChange={this.onChange}/>
                                       {errors.clientIdentifier && (
                                           <div className="invalid-feedback">{errors.clientIdentifier}</div>
                                       )}
                                       </div>
     
     
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </Form>
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
