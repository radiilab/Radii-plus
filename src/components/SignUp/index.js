import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';


const SignUpPage = ({ history }) =>
  <div>
    <SignUpForm history={history} />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
        

        <div className="w3-container w3-card w3-white w3-round w3-margin">
        <h4>SignUpForm</h4>
    
    
    <input
        value={username}
        onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
          hintText="Full Name"
        />
        
        <br/>
        <input
        value={email}
        onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          hintText="Email Address"
        />
        
        <br/>
        <input
        value={passwordOne}
        onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
        />
        <br/>
       
        <input
        value={passwordTwo}
        onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
        />
        
        
    
    
    <button label="Sign Up"  type="submit" disabled={isInvalid} />

    { error && <p>{error.message}</p> }
  </div>


        
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.LANDING}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};