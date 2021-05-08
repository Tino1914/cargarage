import React, { Component } from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createClient} from "../../actions/clientActions";
import classnames from "classnames";
import Feedback from 'react-bootstrap/esm/Feedback';

 class AddClient extends Component {
     constructor(){
         super();

         this.state={
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            phone: "",
            clientIdentifier: "",
            errors:{}
         };
         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);

     }

     componentWillReceiveProps(nextProps){
         if(nextProps.errors){
             this.setState({ errors:nextProps.errors })
         }

     }




     onChange(e){
        this.setState({[e.target.name]:e.target.value })
     }

     onSubmit(e){
         e.preventDefault();
         const newClient ={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            password: this.state.password,
            phone: this.state.phone,
            clientIdentifier: this.state.clientIdentifier

         };

         this.props.createClient(newClient, this.props.history)
     }



    render() {

        const {errors} = this.state  //extract errors on the text boxes

        

        return (
            <div>
          


            <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create  Client form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className={classnames("form-control form-control-lg ",{
                                    "is-invalid":errors.firstName
                                }) } placeholder="Client First Name" name="firstName" value={this.state.firstName}
                                onChange={this.onChange}/>
                              {errors.firstName && (
                                  <div className="invalid-feedback">{errors.firstName}</div>
                              )}
                            </div>

                            <div className="form-group">
                            <input type="text" className={classnames("form-control form-control-lg ",{
                                "is-invalid":errors.lastName
                            }) } placeholder="Client Last Name" name="lastName" value={this.state.lastName}  onChange={this.onChange}/>
                            {errors.lastName && (
                                <div className="invalid-feedback">{errors.lastName}</div>
                            )}
                            </div>

                            <div className="form-group">
                                <input type="text" className={classnames("form-control form-control-lg ",{
                                    "is-invalid":errors.clientIdentifier
                                }) } placeholder="Unique Client ID" name="clientIdentifier" value={this.state.clientIdentifier}
                                onChange={this.onChange}
                                
                                    />
                                    {errors.clientIdentifier && (
                                        <div className="invalid-feedback">{errors.clientIdentifier}</div>
                                    )}
                                    
                            </div>
                            <div className="form-group">
                            <input type="text" className={classnames("form-control form-control-lg ",{
                                "is-invalid":errors.phone
                            }) } placeholder="Phone Number" name="phone" value={this.state.phone}  onChange={this.onChange}/>
                            {errors.phone && (
                                <div className="invalid-feedback">{errors.phone}</div>
                            )}
                        </div>
                          
                        
                            <h6>User Name</h6>
                            <div className="form-group">
                            <input type="text" className={classnames("form-control form-control-lg ",{
                                "is-invalid":errors.userName
                            }) } placeholder="UserName" name="userName" value={this.state.userName}  onChange={this.onChange}/>
                            {errors.userName && (
                                <div className="invalid-feedback">{errors.userName}</div>
                            )}
                            </div>
                            <h6>Password</h6>
                            <div className="form-group">
                            <input type="password" className={classnames("form-control form-control-lg ",{
                                "is-invalid":errors.password
                            }) } placeholder="Password" name="password" value={this.state.password}  onChange={this.onChange}/>
                            {errors.password && (
                                <div className="invalid-feedback">{errors.password}</div>
                            )}
                           
                            </div>
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

        </div>
        )
    }
}

AddClient.propTypes = {
    createClient : PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
    errors: state.errors 
});

export default connect(
    mapStateToProps,
     { createClient }
     )(AddClient);
