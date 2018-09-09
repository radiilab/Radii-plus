import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { SignUpLink } from '../SignUp';

import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';


const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} />
    
  
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  finished: false,
  stepIndex: 0,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }


  
  onEmailSignIn = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        this.props.history.push("/home");
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
        console.log("sign in error")
      });

    event.preventDefault();
  }

  handleGoogleSignin = (event) => {
   auth.doGoogleSignIn().then( ()=>{
     this.props.history.push("/home");

   }).catch( (reason)=> {
     console.log("error login ::"+ reason);
   })
    
  }

  render() {
    const {
      email,
      password,
      error,

    } = this.state;

    

    return (
      
        <form onSubmit={this.onEmailSignIn} className="w3-display-middle w3-large">
        <div className="w3-container w3-card w3-white w3-round w3-margin">
    
        <h4> Sign in</h4><br/>
        <hr className="w3-clear"/>
    <h4> { error && <p>{error.message}</p> } </h4>
    <label>enter the unique ID </label>
            <input
              value={email}
                onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                 
            />
            <br/>  
            <label>eneter the password that you had set </label>
            
            <input
        value={password}
        onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          
          type="password"
        />
        <br/>
        <button className="w3-button w3-theme-d1 w3-margin-bottom"
          
          
          type ="submit"
          onSubmit ={ this.onEmailSignIn }
        >See you </button>
           <PasswordForgetLink />
          <SignUpLink />
        </div>

        
          <div className="w3-container w3-card w3-white w3-round w3-margin">
        <h4>Alternate Sign in</h4><br/>
        <hr className="w3-clear"/>
        <button type="button"
        onClick={this.handleGoogleSignin} 
        primary={"true"}
        className="w3-button w3-theme-d2 w3-margin-bottom"> 
        Login with google</button>

          
        </div>
          </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
