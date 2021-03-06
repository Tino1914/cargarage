import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { deleteClient } from "../../actions/clientActions"

 class ClientItem extends Component {


  onDeleteClick = id => {
      this.props.deleteClient(id);
  }


    render() {
        const { client } = this.props;
        return (
           
            <div className="container">
            <div className="card card-body bg-info mb-3">
                <div className="row">
                    <div className="col-2">
                        <span className="mx-auto">ID: {client.clientIdentifier}</span>
                    </div>
                    <div className="col-lg-6 col-md-4 col-8">
                        <h3>{client.firstName} {client.lastName}</h3>
                        <p>Email: {client.email}</p>
                    </div>
                    <div className="col-md-4 d-none d-lg-block">
                        <ul className="list-group">
                        <Link to={ "/createAppointment/" + client.id}>
                        <li className="list-group-item list-group-item-secondary">
                            <i style={{color:"blue"}} className="fa fa-flag-checkered pr-1">Make an appointment </i>
                        </li>
                    </Link>

                            <Link to={`/clientBoard/${client.clientIdentifier}`}>
                                <li className="list-group-item list-group-item-secondary">
                                    <i style={{color:"black"}} className="fa fa-flag-checkered pr-1">Client Board </i>
                                </li>
                            </Link>
                            <Link to={`/updateClient/${client.clientIdentifier}`}>
                                <li className="list-group-item list-group-item-secondary">
                                    <i className="fa fa-edit pr-1">Update Client Info</i>
                                </li>
                            </Link>
                            
                                <li className="list-group-item delete" onClick={this.onDeleteClick.bind(this, client.clientIdentifier)}>
                                    <i className="fa fa-minus-circle pr-1">Delete Client</i>
                                </li>
                          
                        </ul>
                    </div>
                </div>
            </div>
        </div>
       
        )
    }
}



ClientItem.propTypes={
    deleteClient: PropTypes.func.isRequired
};


export default connect(null, {deleteClient})(ClientItem);