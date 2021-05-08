import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import {connect} from "react-redux";
import classnames from "classnames";
import  register  from "../../services/auth-service";
import validator from 'validator';
import PropTypes from "prop-types";


import AuthService from "../../services/auth-service";



const email = (value) => {
  if (!validator.isEmail(value)) {
      return  <div className="alert alert-danger" role="alert"> {`${value} is not a valid email.`}</div>
     
  }
};

const vname = value => {
  if (value.length < 1) {
      return (
          <div className="alert alert-danger" role="alert">
             Please insert valid First Name 
          </div>
      );
  }
};


const vuser = value => {
  if (value.length < 1) {
      return (
          <div className="alert alert-danger" role="alert">
             Please insert valid First Name 
          </div>
      );
  }
};
const vlast = value => {
  if (value.length < 1) {
      return (
          <div className="alert alert-danger" role="alert">
             Please insert valid Last Name 
          </div>
      );
  }
};
const vplate = value => {
  if (value.length < 3) {
      return (
          <div className="alert alert-danger" role="alert">
              The license plate must be between 3 and 8 characters.
          </div>
      );
  }
};

 class Register extends Component {
  constructor() {
    super();
    
    this.state = {
      firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        clientIdentifier: "",
      errors:{}
    };
    this.onChange = this.onChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    

  }

  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
        this.setState({ errors:nextProps.errors })
    }

}
  onChange(e){
    this.setState({[e.target.name]:e.target.value })
 }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    // const newClient ={
    //   firstName: this.state.firstName,
    //   lastName: this.state.lastName,
    //    username: this.state.username,
    //   email: this.state.email,
    //   password: this.state.password,
    //   clientIdentifier: this.state.clientIdentifier,
      
    //  };

    // console.log(newClient);

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
       this.state.firstName,
       this.state.lastName,
       this.state.username,
       this.state.email,
       this.state.password,
       this.state.clientIdentifier,
    //  newClient
     
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
            
          });
          this.setState({
          client: response.data.clientIdentifier,
          successful: true
            
          });
          
       //   this.props.register(newClient, this.props.history)
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
          
        }
      );
    }
  }

  

  



  render() {

    const {errors} = this.state

    return (




      <div>
          


      <div className="project">
      <div className="container">
          <div className="row">
              <div className="col-md-8 m-auto">
                  <h5 className="display-4 text-center">Create  Client form</h5>
                  <hr />
                  <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
              <div className="form-group">
                   <Input type="text" className={classnames("form-control form-control-lg ",{
                          "is-invalid":errors.firstName
                      }) } placeholder="Client First Name"  name="firstName"  validations={[vname]}  value={this.state.firstName}  onChange={this.onChange}/>
                      {errors.firstName && (
                          <div className="invalid-feedback">{errors.firstName}</div>
                      )}
                      </div>

                      <div className="form-group">
                      <Input type="text" className={classnames("form-control form-control-lg ",{
                             "is-invalid":errors.lastName
                         }) } placeholder="Client Last Name" name="lastName" validations={[vlast]} value={this.state.lastName}  onChange={this.onChange}/>
                         {errors.lastName && (
                             <div className="invalid-feedback">{errors.lastName}</div>
                         )}
                         </div>



                                  
                         <div className="form-group">
                         <Input type="text" className={classnames("form-control form-control-lg ",{
                                "is-invalid":errors.username
                            }) } placeholder="Client User Name" name="username" validations={[vuser]} value={this.state.username}  onChange={this.onChange}/>
                            {errors.username && (
                                <div className="invalid-feedback">{errors.username}</div>
                            )}
                            </div>


                            <div className="form-group">
                            <Input type="text" className={classnames("form-control form-control-lg ",{
                                   "is-invalid":errors.email
                               }) } placeholder="Client  Email" name="email" validations={[email]}  value={this.state.email}  onChange={this.onChange}/>
                               {errors.email && (
                                   <div className="invalid-feedback">{errors.email}</div>
                               )}
                               </div>

                         <div className="form-group">
                         <Input type="password" className={classnames("form-control form-control-lg ",{
                                "is-invalid":errors.password
                            }) } placeholder="Client License Plate" name="password"validations={[vplate]}  value={this.state.password}  onChange={this.onChange}/>
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
               
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>


          </div>
          </div>
      </div>
  </div>

  </div>

     );
  }
}

Register.propTypes = {
  register : PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
  errors: state.errors 
});

export default connect(
  mapStateToProps,
   { register }
   )(Register);