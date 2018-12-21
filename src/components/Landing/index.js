import React from 'react';
import { auth } from '../../firebase';

import * as routes from '../../constants/routes';
import { connect } from 'react-redux';

import {  Link } from 'react-router-dom';

// const style = {
//   'max-width':'1400px',
//   'margin-top':'80px'
// }
class LoginButton extends React.Component{

handleGoogleSignin = (event) => {
  auth.doGoogleSignIn().then( ()=>{
    // redirect to the home route

  }).catch( (reason)=> {
    console.log("error login :: "+ reason);
  })
   
 }

  render(){
    return(
      <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top" 
    onClick={this.handleGoogleSignin.bind(this)}>Login With Google</button>
      )
  }
}

class GoToHome extends React.Component{
  render(){
    return(
    <Link className="w3-button w3-black w3-padding-large w3-large w3-margin-top" 
    to={routes.HOME}>{this.props.user.displayName}</Link>
      );
  }
}
 class LandingPage extends React.Component{



 render(){
  
   function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn!=null) {
    return <GoToHome user={isLoggedIn}/>;
  }
  return <LoginButton />;
}

   return(
    <div  >
<div class="w3-container w3-pale-yellow w3-center" style={{"padding":"128px 16px"}} >
    <h1 class="w3-margin w3-jumbo">Radii Plus Commute Network</h1>
    <p class="w3-xlarge">Sustainability. Personified.</p>
    

    <Greeting isLoggedIn={this.props.authUser} />
  </div>
  
  <div class="w3-row-padding w3-theme">
  
  <div class="w3-third w3-section">
  <div class="w3-card-4">
  <img src="images/future.jpg" alt="read the docs" style={{"width":"100%"}}/>
  <div class="w3-container w3-white">
  <h4>Not Available</h4>
  <p>The Cinque Terre (five lands) is a portion of the Italian Riviera. The coastline with five villages: Monterosso, Vernazza, Corniglia, Manarola, and Riomaggiore
  is a UNESCO World Heritage Site.</p>
  </div>
  </div>
  </div>
  
  <div class="w3-third w3-section">
  <div class="w3-card-4">
  <img src="images/atomics.jpg" style={{"width":"100%"}} alt="read the docs"/>
  <div class="w3-container w3-white">
  <h4>Not Available</h4>
  <p>Monterosso al Mare is located at the center of a small natural gulf, protected by a small artificial reef,
  in the Riviera of La Spezia. It is the northernmost village of the Cinque Terre.</p>
  </div>
  </div>
  </div>
  
  <div class="w3-third w3-section">
  <div class="w3-card-4">
  <img src="images/success.jpg" alt="read the docs" style={{"width":"100%"}} />
  <div class="w3-container w3-white">
  <h4>Not Available</h4>
  <p>Vernazza is another of the five towns in the region. Vernazza is the fourth town heading north. It has no car traffic, and is one of the truest
  "fishing villages" on the Italian Riviera.</p>
  </div>
  </div>
  <br /><br/><br/>
  </div>
  </div>
  
  <div class="w3-container w3-theme-d4">
  <p class="w3-large">Radii Con-centre is an initiative of Diganto Tech Pvt. Ltd.
  </p>
  </div>
</div>

   )
 }
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});


export default connect(mapStateToProps)(LandingPage) ;