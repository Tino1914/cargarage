import React, { Component } from 'react'
import "../aboutpage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {  faInstagram } from '@fortawesome/free-brands-svg-icons';
import {  faTwitter } from '@fortawesome/free-brands-svg-icons';







export default class AboutPage extends Component {
    render() {
        return (
       

            <div>
            <head>
            <meta charset="utf-8"/>
            <title>Responsive Footer Section | CodingNepal</title>
            <link rel="stylesheet" href="../aboutpage.css"/>
            <script src="https://kit.fontawesome.com/a076d05399.js"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </head>
          <body>
      <div style={{marginTop: "10px", marginBottom: "300px" }} class="content1">
               
            <div class="about-section">
            <h1>About Us</h1>
            <p>The place where your car is being reapired with love</p>
            <h2 style={{text: "center", color:"black"}}>Our Team</h2>
          </div>
          
         
          <div class="row">
            <div class="column">
              <div class="card">
                <img src={require("../Image/bjorn.jpg")}  style={{width:"100%",  height:"500px"}}/>
                <div class="container">
                  <h2>Bjorn Ironside</h2>
                  <p class="title">Mechanic</p>
                  <p>I was pashionate about cars since young age</p>
                  <p>bjorn.garage@gmail.com</p>
                 
                </div>
              </div>
            </div>
          
            <div class="column">
              <div class="card">
                <img src={require("../Image/IMG_0078.jpg")} style={{width:"100%", height:"500px"}}/>
                <div class="container">
                  <h2>Konstantin Hadjiyankov</h2>
                  <p class="title">CEO, Founder of the garage</p>
                  <p>Born to create</p>
                  <p>konstnantin.garage@gmail.com</p>
                  
                </div>
              </div>
            </div>
          
            <div class="column">
              <div class="card">
                <img src={require("../Image/John-Wick-3-Parabellum-movie-trailer.jpg")} a style={{width:"100%" ,height:"500px"}}/>
                <div class="container">
                  <h2>John Wick</h2>
                  <p class="title">Architect</p>
                  <p>Love making roll cages</p>
                  <p>john@gamil.com</p>
                
                </div>
              </div>
            </div>
          </div>
          <br/>
         </div>

          


           
 
        
            <footer>
              <div class="main-content">
                <div class="left box">
                  <h2>About us</h2>
                  <div class="content">
                    <p>This is the best carservice management web application. You can log in and view your car information if you are our client. We are working on repairing your car as soon as possible.</p>
                    <div class="social">
                      <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                     <span></span>
                      <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                      <span></span>
                      <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                  </div>
                </div>
        
                <div class="center box">
                  <h2>Address</h2>
                  <div class="content">
                    <div class="place">
                      <span class="fas fa-map-marker-alt"></span>
                      <span class="text">Eindhoven, Netherlands</span>
                    </div>
                    <div class="phone">
                      <span class="fas fa-phone-alt"></span>
                      <span class="text">+31765432100</span>
                    </div>
                    
                  </div>
                </div>
        
                <div class="right box">
                  <h2>Contact us</h2>
                  <div class="content">
                    <form action="#">
                    <div class="email">
                    <span class="fas fa-envelope"></span>
                    <span class="text">carservice@example.com</span>
                  </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="bottom">
                <center>
                  <span class="credit">Created By <a href="https://www.carservice.com">Konstantin Hadjiyankov</a> | </span>
                  <span class="far fa-copyright"></span><span> 2021 All rights reserved.</span>
                </center>
              </div>
            </footer>
          </body>


            </div>
            
      
  
  











                
         
        )
    }
}



