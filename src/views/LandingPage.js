import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage(props) {
   return(
       <div>
           {
               window.location.pathname === '/' ?
               <div>
               <div className="landing">
               <span className="card-title">Welcome to TRIBE!</span>
               <p><span className="profile-card-title-content">Login or Sign Up to get Started</span></p>
               </div>
               <Link className="waves-effect waves-light teal teal lighten-2 btn-large" to="/sign_up">Sign Up</Link> <span></span>
               <Link className="waves-effect waves-light light-green darken-2 btn-large" to="/login">Login</Link>
               </div> 
                :
                null
            }
       </div>
   ) 
}

export default LandingPage
