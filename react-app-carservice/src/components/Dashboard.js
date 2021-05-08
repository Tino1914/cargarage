import React, { Component } from 'react'
import ClientItem from './Client/ClientItem';
import CreateClientButton from './Client/CreateClientButton';
import { connect } from "react-redux";
import { getClients, getClient } from "../actions/clientActions";


import PropTypes from "prop-types";
import authService from '../services/auth-service';


class Dashboard extends Component {

 


 state = {
     currentUser: null
 }



    //lifecylce hook 
    componentDidMount(){
        this.props.getClients();
      const currentUser = authService.getCurrentUser();
      
      this.setState({
       currentUser: currentUser
    });
        
     
    }
   


    render() {



        const {clients} = this.props.client;
       // console.log(clients);
        const {currentUser} = this.state;
        //console.log(currentUser && currentUser.roles.includes("ROLE_ADMIN"));

    
        return (
           
            <body className="dashboard">
            <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <br />
                    <br />
                        <h1 style={{color:"black"}} className="display-5 text-center">Clients</h1>
                        <br />
                        <CreateClientButton />
                        
                        <br />
                        <hr />
                         
                        <>
                        {currentUser && currentUser.roles && currentUser.roles.includes("ROLE_ADMIN")?
                            clients.map(client => (
                            <ClientItem key={client.id} client={client} />
                        ))
                        :
                       
                       clients.map(client => (
                        
                           client.id === currentUser.id?

                         <ClientItem key={client.id} client={client} />
                         :
                         null
                        
                        )
                        
                       )
                    
                    
                    }
                    </>
                      

                      
                       
                      
    
                    </div>
                </div>
            </div>
        </div>
        </body>
    
        );
    }
}


Dashboard.propTypes = {
    client:PropTypes.object.isRequired,
    getClients: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    client:state.client

});
export default connect(mapStateToProps, { getClients })(Dashboard);