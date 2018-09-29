import React from 'react';
import { withRouter, Link, Redirect} from 'react-router-dom';
import withAuthentication from '../Session/withAuthorization';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';


const SignIn = ({ history }) =>
  <SignInForm history={history} />
  


const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});
const error = ''
class SignInForm extends React.Component {

handleGoogleSignin = (event) => {
 auth.doGoogleSignIn().then( ()=>{
   this.props.history.push("/home");

 }).catch( (reason)=> {
  
   console.log("error login ::"+ reason);
 })
  
}
componentDidMount(){
  console.log(this.props.history)
}
render(){
   const { from } = this.props.history.state || { from: { pathname: "/" } };
     return (
      this.props.authUser ? <Redirect /> : (

        <div >

      <h2>You must log in to view the page at </h2>
      <p>Resize the browser window to see the responsive effect. 
      When the screen is less than 650px wide, make the two columns 
      stack on top of each other instead of next to each other.{from.pathname}</p>


          <div class="imgcontainer">
          <img src="images/future.jpg" alt="Avatar" class="avatar" />
          </div>

          <div class="container">

            <form onSubmit={this.handleGoogleSignin} >
            <button type="submit">Login With Google</button>
            </form>

            <form onSubmit={this.handleFacebookSignin} >
            <button type="submit">Login With Facebook</button>
            </form>

            <label>
            <Link to="routes.TERMS" name="T&C"> Terms of Service </Link>
            </label>
          </div>

          <div class="container" style={{"backgroundColor":"#f1f1f1"}}>
            <button type="button" onclick="document.getElementById('LoginModal').style.display='none'" 
              class="cancelbtn">Return to news</button>
            <span class="psw"><h4> { error && <p>{error.message}</p> } </h4></span>
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