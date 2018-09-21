import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';


import { auth } from '../../firebase';
import * as routes from '../../constants/routes';


const SignInModal = ({ history }) =>
<div>
  <SignInForm history={history} />
  

</div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignInForm extends Component {

handleGoogleSignin = (event) => {
 auth.doGoogleSignIn().then( ()=>{
   this.props.history.push("/home");

 }).catch( (reason)=> {
   console.log("error login ::"+ reason);
 })
  
}

    return (
      
        <div id="LoginModal" className="modal modal-content animate">
-------------------------------
        <div class="imgcontainer">
      <img src="img_avatar2.png" alt="Avatar" class="avatar">
    </div>

    <div class="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
      ------------------
      <form onSubmit={this.handleGoogleSignin} >
      <button type="submit">Login With Google</button>
      </form>
      ----------------------- MOVE TO CENTRE
      ------------------
      <form onSubmit={this.handleFacebookSignin} >
      <button type="submit">Login With Facebook</button>
      </form>
      ----------------------- MOVE TO CENTRE
      <label>
        <Link to="routes.TERMS" name="T&C"> Terms of Service </Link>
      </label>
    </div>

    <div class="container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('LoginModal').style.display='none'" 
        class="cancelbtn">Return to news</button>
      <span class="psw"><h4> { error && <p>{error.message}</p> } </h4></span>
    </div>
    ------------------------
        
        </div>
          
    );
  }
}

export default withRouter(SignInModal);


