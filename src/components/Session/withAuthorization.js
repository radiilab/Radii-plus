import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter, Redirect } from 'react-router-dom';

import { firebase } from '../../firebase';
import * as routes from '../../constants/routes';
const withAuthorization = (condition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          console.log('user not authenticated ... please sign in')
        }
      });
    }

    render() {
      return this.props.authUser ? <Component /> : <Redirect to={routes.LOGIN}/> ;
    }
  }

  const mapStateToProps = (state) => ({
    authUser : state.sessionState.authUser
  });

  return compose(
    withRouter,
    connect(mapStateToProps),
  )(WithAuthorization);
}

export default withAuthorization;