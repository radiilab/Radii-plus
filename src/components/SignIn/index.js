import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';


// const SignIn = ({ history }) =>
//   <SignInForm  />
  


// const updateByPropertyName = (propertyName, value) => () => ({
//   [propertyName]: value,
// });


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
      )
  }
}

class SignIn extends React.Component {

componentWillReceiveProp(){
  
}
componentWillUpdate(){

}
render(){

   function Greeting(props) {
    
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn!=null) {
    return <GoToHome user={isLoggedIn}/>;
  }

  return <LoginButton />;

}
const pageStyle = {
      'maxWidth':'1400px',
      'marginTop':'80px'
    };
     return (

        <div class="w3-container w3-content" style= {pageStyle} >



        <div class="w3-panel w3-leftbar w3-sand">
        <p class="w3-xxlarge w3-serif"><i>"Make it as simple as possible, but not simpler."</i></p>
        <p>Albert Einstein</p>
        </div>
          <div class="imgcontainer">
          <img src="images/logo.png" alt="Avatar" class="avatar" />
          </div>

          <div class="w3-center">

      
            
            <Greeting isLoggedIn={this.props.authUser} />
            <br/>


            <label>
            <Link to="#" name="T&C"> Terms of Service </Link>
            </label>
          </div>
        
        </div>

          
    );
 
}
}
const mapStateToProps = (state) => (
{

  authUser: state.sessionState.authUser
});

export default compose(
  connect( mapStateToProps)
)(SignIn);