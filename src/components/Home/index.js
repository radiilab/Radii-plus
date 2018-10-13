import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import withAuthorization from '../Session/withAuthorization';
import DataCard from './templates/DataCard'
import BottomScrollListener from 'react-bottom-scroll-listener';

import {
   getProjects,
   assemblageFeedDockletAction,
   resetHomeAction
  } from '../../actions/defActions'


class HomePage extends Component {
  componentWillMount() {
    //const { getPosts } = this.props;
    // get the next 3 docklets from the database server
     this.props.assemblageFeedDockletAction(this.props.count);
    
  }
    

reachedBottomOfPage(event){
  //update the ui with elements
   this.props.assemblageFeedDockletAction(this.props.count);
   var delayInMilliseconds = 4000; //4 second delay between fetches from firestore 
 
setTimeout(function() {
  //your code to be executed after 1 second
}, delayInMilliseconds);

}
 componentWillUnmount(){
  // all the post arrays have to be cleaned
  this.props.resetHomeAction();
 }
  render() {
    
    const pageStyle = {
      'maxWidth':'1400px',
      'marginTop':'80px'
    };
    const today = new Date().toLocaleDateString('en-GB', {  
      day : 'numeric',
      month : 'short',
      year : 'numeric'
    })

    return (
      
      <div   >

        <div class="w3-container w3-content" style= {pageStyle} >    
  
  <div class="w3-row">
    
    <div class="w3-col m3">
     
      <div class="w3-card w3-round w3-white">
        <div class="w3-container">
         <h4 class="w3-center">Welcome {this.props.authUser.displayName}</h4>
           
         <p class="w3-center"><img alt="photoURL" src={this.props.authUser.photoURL} className='w3-image'/></p>
         <hr/>
         <p><i class="fas fa-user-check w3-margin-right w3-text-theme"></i> {this.props.authUser.email}</p>
         <p><i class="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> {today}</p>
        </div>
      </div>
      <br/>


      <div class="w3-card w3-round w3-white w3-hide-small">
        <div class="w3-container">
          <p>Areas of work</p>
          <p>
            <span class="w3-tag w3-small w3-theme-d5">Quantum Computing</span>
            <span class="w3-tag w3-small w3-theme-d4">Artificial Intelligence</span>
            <span class="w3-tag w3-small w3-theme-d3">Machine Learning</span>
            <span class="w3-tag w3-small w3-theme-d2">Networking</span>
            <span class="w3-tag w3-small w3-theme-d1">Compiler</span>
            <span class="w3-tag w3-small w3-theme">Internet Of things</span>
            <span class="w3-tag w3-small w3-theme-l1">Blockchain</span>
          </p>
        </div>
      </div>
      <br/>
      

      <div class="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
        <span  class="w3-button w3-theme-l3 w3-display-topright">
          <i class="fas fa-american-sign-language-interpreting"></i>
        </span>
        <p><strong>Hey!</strong></p>
        <p>We are not done yet with all the features somethings may go wrong but we will get it right</p>
      </div>
    

    </div>
    
  
    <div class="w3-col m7">
    
      <div class="w3-row-padding">
        <div class="w3-col m12">
          <div class="w3-card w3-round w3-white">
            <div class="w3-container w3-padding">
              <h6 class="w3-opacity">Have some thing you want to share with us </h6>
              <textarea class="w3-border w3-padding" placeholder= 'Status: Feeling Blue' style={{
    float: "left",
    width: "75%",
    marginTop: "6px",
}}></textarea> <br/>
              <button type="button" class="w3-button w3-theme"><i class="fa fa-pencil"></i>  Post</button> 
            </div>
          </div>
        </div>
      </div>
      

      {
        this.props.docklets.map(app =>
                                  <DataCard app = {app}/>
              )
      }
        
      <div class="w3-container w3-card w3-white w3-round w3-margin"><br/>
        <img src="/w3images/avatar5.png" alt="Avatar" class="w3-left w3-circle w3-margin-right"  />
        <span class="w3-right w3-opacity">16 min</span>
        <h4>Jane Doe</h4><br/>
        <hr class="w3-clear"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
      </div>  

      <div class="w3-container w3-card w3-white w3-round w3-margin"><br/>
        <img src="/w3images/avatar6.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" />
        <span class="w3-right w3-opacity">32 min</span>
        <h4>Angie Jane</h4><br/>
        <hr class="w3-clear"/>
        <p>Have you seen this?</p>
        <img src="/w3images/nature.jpg" alt="Avatar" class="w3-margin-bottom"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
      </div> 

    </div>


    <div class="w3-col m2">
      <div class="w3-card w3-round w3-white w3-center">
        <div class="w3-container">
          <p>Upcoming Events:</p>
          <img src="/images/forest.jpg" class='w3-image' alt="Event" />
          <p><strong>Holiday</strong></p>
          <p>Friday 15:00</p>
          <p><button class="w3-button w3-block w3-theme-l4">Info</button></p>
        </div>
      </div>
      <br/>
      
      <div class="w3-card w3-round w3-white w3-center">
        <div class="w3-container">
          <p>Public poll</p>
          <img src="/w3images/avatar6.png" alt="Shorts" /><br/>
          <span>Jane Doe</span>
          <div class="w3-row w3-opacity">
            <div class="w3-half">
              <button class="w3-button w3-block w3-green w3-section" title="Accept"><i class="fa fa-check"></i></button>
            </div>
            <div class="w3-half">
              <button class="w3-button w3-block w3-red w3-section" title="Decline"><i class="far fa-window-close"></i></button>
            </div>
          </div>
        </div>
      </div>
      <br/>
      
      <div class="w3-card w3-round w3-white w3-padding-16 w3-center">
        <p>ADS</p>
      </div>
      <br/>
      
      <div class="w3-card w3-round w3-white w3-padding-32 w3-center">
        <p><i class="fa fa-bug w3-xxlarge"></i></p>
      </div>
      
      <BottomScrollListener offset={300} onBottom={this.reachedBottomOfPage.bind(this) } />
    </div>
    

  </div>
  

</div>
<br/>
<div class="w3-container w3-theme-d4">
    <p class="w3-large" >Radii Consortium an initiative of Diganto Tech Pvt. Ltd.
    </p>
    </div>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  docklets: state.postState.docklets,
  count: state.postState.LoadCount,
  user: state.userState,
  authUser: state.sessionState.authUser,
});

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getProjects,
    assemblageFeedDockletAction ,
    resetHomeAction,
}, dispatch);
}

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
