import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import AuthService from "../../services/auth-service";

import Login from "../Auth/login-component";
import Register from "../Auth/register-component";
import Home from "../Auth/home-component";
import Profile from "../Auth/profile-component";
import BoardUser from "../Auth/board-user-component";
import BoardModerator from "../Auth/board-moderator-component"
import BoardAdmin from "../Auth/board-admin-component";


 class Header extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined,
        };
      }
    
      componentDidMount() {
        const user = AuthService.getCurrentUser();
    
        if (user) {
          this.setState({
            currentUser: user,
            showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
            showAdminBoard: user.roles.includes("ROLE_ADMIN"),
          });
        }
      }
    
      logOut() {
        AuthService.logout();
      }
    render() {
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

        return (
            <div>
                
                <nav className="navbar navbar-expand-sm navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="Dashboard.html">
                       Car Service Garage
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon" />
                    </button>

                    {showModeratorBoard && (
                        <li className="nav-item">
                          <Link to={"/mod"} className="nav-link">
                            Moderator Board
                          </Link>
                        </li>
                      )}
        
                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/dashboard">
                                    Clients
                                </a>
                            </li>
                        </ul>
                        {currentUser ? (
                            <div className="navbar-nav ml-auto">
                              <li className="nav-item">
                                <Link to={"/profile"} className="nav-link">
                                  {currentUser.username}
                                </Link>
                              </li>
                              <li className="nav-item">
                                <a href="/login" className="nav-link" onClick={this.logOut}>
                                  LogOut
                                </a>
                              </li>
                            </div>
                          ) : (
                            <div className="navbar-nav ml-auto">
                              <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                  Login
                                </Link>
                              </li>
                
                              <li className="nav-item">
                                <Link to={"/register"} className="nav-link">
                                  Sign Up
                                </Link>
                              </li>
                            </div>
                          )}
                    </div>
                </div>
              </nav>
              <div className="container mt-3">
              <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/user" component={BoardUser} />
                <Route path="/mod" component={BoardModerator} />
                <Route path="/admin" component={BoardAdmin} />
              </Switch>
            </div>
            </div>

       
            
           
        )
    }
}
export default Header;
