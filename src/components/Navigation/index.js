import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import SignOut from '../SignOut';
import * as routes from '../../constants/routes';
import { auth } from '../../firebase'


import { 
userLogoutAction
} from '../../actions/defActions'
  

const styles = {
  title: {
    cursor: 'pointer',
  },
  Notifications: {
    width: '300px',
  },
  SignOut: {
    height: '23px',
    width: '23px',
  },
};
const Navigation = ({ authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth/>
        : <NavigationNonAuth/>
    }
  </div>

const NavigationAuth = () =>
<div class="w3-row w3-padding w3-theme-d2 w3-black w3-top">
  <div class="w3-col s3">
      <a href="#" title=" devops page" className="w3-bar-item w3-button">
      <i className="fas fa-chalkboard"></i>
      </a>
    </div>
 <div class="w3-col s3">
  <a href="#" title=" devops page" className="w3-bar-item w3-button">
  <i className="fa fa-bars"></i>
  </a>
  </div>
  <div class="w3-col s3">
      <Link to={routes.HOME} className="w3-bar-item w3-button w3-left">
      HOME
      </Link>
  </div>
  <div className="w3-col s3">
      <a href="#" 

       onClick= {() => {
        auth.doSignOut().then(()=>{
           console.log("logout done")
        }).catch(error => {
            console.log("Sign-out error");
        })}
       }

       class="w3-col s3"
       ><i class="fas fa-hand-point-down" title="Options"></i></a>
    </div>
</div>




const NavigationNonAuth = () =>
<div className="w3-row w3-padding w3-theme-d2 w3-top ">
  <div className="w3-half">
    <div className="w3-bar">
      <a href="https://adysenlab.github.io/" title="Dev ops page" className="w3-bar-item w3-button w3-left"><i className="fas fa-chalkboard"></i></a>
    </div>
  </div>

 

  <div class="w3-half">
    <div class="w3-bar ">
      
      <a href={routes.LANDING} title="main page"class="w3-bar-item w3-button w3-right"><i class="fas fa-hands"></i></a>
    </div>

  </div>
</div>


const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    userLogoutAction 
}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);


