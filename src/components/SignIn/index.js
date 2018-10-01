import React from 'react';
import { withRouter, Link, Redirect} from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';


const SignIn = ({ history }) =>
  <SignInForm history={history} />
  


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

class SignInForm extends React.Component {

componentDidMount(){
  
}
render(){
   const { from } = this.props.history.state || { from: { pathname: "/" } };

   function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn!=null) {
    return <GoToHome user={isLoggedIn}/>;
  }
  return <LoginButton />;
}

     return (
      this.props.authUser ? <Redirect to={routes.HOME} /> : (

        <div >

      <h2>You must log in to view the page at </h2>
      <p>Resize the browser window to see the responsive effect. 
      When the screen is less than 650px wide, make the two columns 
      stack on top of each other instead of next to each other.{from.pathname}</p>


          <div class="imgcontainer">
          <img src="images/future.jpg" alt="Avatar" class="avatar" />
          </div>

          <div class="container">

            
            
            <Greeting isLoggedIn={this.props.authUser} />

            <form onSubmit={this.handleFacebookSignin} >
            <button type="submit">Login With Facebook</button>
            </form>

            <label>
            <Link to="routes.TERMS" name="T&C"> Terms of Service </Link>
            </label>
          </div>
        
        </div>
        )
          
    );
 
}
}
const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser
});

export default compose(
  connect( mapStateToProps)
)(withRouter(SignIn));