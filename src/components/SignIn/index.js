import React from 'react';
import { withRouter, Link } from 'react-router-dom';


import { auth } from '../../firebase';
import * as routes from '../../constants/routes';


const SignInModal = ({ history }) =>
  <SignInForm history={history} />
  


const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});
const error = 'np'
class SignInForm extends React.Component {

handleGoogleSignin = (event) => {
 auth.doGoogleSignIn().then( ()=>{
   this.props.history.push("/home");

 }).catch( (reason)=> {
   console.log("error login ::"+ reason);
 })
  
}
render(){
     return (
      <div id="LoginModal" className="modal modal-content animate">

          <div class="imgcontainer">
          <img src="img_avtar.jpg" alt="Avatar" class="avatar" />
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

          <div class="container" style={{"background-color":"#f1f1f1"}}>
            <button type="button" onclick="document.getElementById('LoginModal').style.display='none'" 
              class="cancelbtn">Return to news</button>
            <span class="psw"><h4> { error && <p>{error.message}</p> } </h4></span>
          </div>
        
        </div>
          
    );
 
}
}

export default withRouter(SignInModal);


