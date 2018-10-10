import React from 'react';
import { withRouter, Link, Redirect} from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';


// const SignIn = ({ history }) =>
//   <SignInForm  />
  


const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});


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
  console.log(this.props);
}
componentWillUpdate(){
  console.log(this.props);
}
render(){

   function Greeting(props) {
    console.log('greeting function in sign in :: '+ props.isLoggedIn)
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn!=null) {
    return <GoToHome user={isLoggedIn}/>;
  }

  return <LoginButton />;

}

     return (

        <div >

      <h2>You must log in to view the page at </h2>
      <p>Resize the browser window to see the responsive effect. 
      When the screen is less than 650px wide, make the two columns 
      stack on top of each other instead of next to each other.</p>


          <div class="imgcontainer">
          <img src="images/logo.png" alt="Avatar" class="avatar" />
          </div>

          <div class="w3-center">

            { console.log('greeting  state :: '+ this.props.authUser)}
            
            <Greeting isLoggedIn={this.props.authUser} />
            <br/>


            <label>
            <Link to="routes.TERMS" name="T&C"> Terms of Service </Link>
            </label>
          </div>
        
        </div>

          
    );
 
}
}
const mapStateToProps = (state) => (
  console.log('state', state),
{

  authUser: state.sessionState.authUser
});

export default compose(
  connect( mapStateToProps)
)(SignIn);