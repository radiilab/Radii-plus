import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import withAuthorization from '../Session/withAuthorization';
import DataCard from './templates/DataCard'



import { 
  getUserLogs,
   getProjects,
   getFeedDocklets,
   assemblageFeedDockletAction
  } from '../../actions/defActions'


class HomePage extends Component {
  componentWillMount() {
    //const { getPosts } = this.props;
     this.props.getUserLogs();
     this.props.getFeedDocklets(0);
     this.props.assemblageFeedDockletAction(0);
    // db.onceGetPosts().then(snapshot =>
    //   onSetPosts(snapshot.data())
    // );
  }

 
  render() {
    const { posts } = this.props;
    
    const pageStyle = {
      'maxWidth':'1400px',
      'marginTop':'80px'
    }
    
    return (
      
      <div   >

        <div class="w3-container w3-content" style= {pageStyle} >    
  
  <div class="w3-row">
    
    <div class="w3-col m3">
     
      <div class="w3-card w3-round w3-white">
        <div class="w3-container">
         <h4 class="w3-center">Welcome {}</h4>
           
         <p class="w3-center"><img class="w3-circle" alt="Avatar" /></p>
         <hr/>
         <p><i class="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Designer, UI</p>
         <p><i class="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> London, UK</p>
         <p><i class="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> April 1, 1988</p>
        </div>
      </div>
      <br/>
      
      
      <div class="w3-card w3-round">
        <div class="w3-white">
          <button  class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups</button>
          <div id="Demo1" class="w3-hide w3-container">
            <p>Some text..</p>
          </div>
          <button  class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events</button>
          <div id="Demo2" class="w3-hide w3-container">
            <p>Some other text..</p>
          </div>
          <button class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-users fa-fw w3-margin-right"></i> My Photos</button>
          <div id="Demo3" class="w3-hide w3-container">
         <div class="w3-row-padding">
         <br/>
           <div class="w3-half">
             <img src="/w3images/lights.jpg"class="w3-margin-bottom" />
           </div>
           <div class="w3-half">
             <img src="/w3images/nature.jpg"  class="w3-margin-bottom" />
           </div>
           <div class="w3-half">
             <img src="/w3images/mountains.jpg"  class="w3-margin-bottom" />
           </div>
           <div class="w3-half">
             <img src="/w3images/forest.jpg"  class="w3-margin-bottom" />
           </div>
           <div class="w3-half">
             <img src="/w3images/nature.jpg"  class="w3-margin-bottom" />
           </div>
           <div class="w3-half">
             <img src="/w3images/snow.jpg" class="w3-margin-bottom" />
           </div>
         </div>
          </div>
        </div>      
      </div>
      <br/>
      
       
      <div class="w3-card w3-round w3-white w3-hide-small">
        <div class="w3-container">
          <p>Interests</p>
          <p>
            <span class="w3-tag w3-small w3-theme-d5">News</span>
            <span class="w3-tag w3-small w3-theme-d4">W3Schools</span>
            <span class="w3-tag w3-small w3-theme-d3">Labels</span>
            <span class="w3-tag w3-small w3-theme-d2">Games</span>
            <span class="w3-tag w3-small w3-theme-d1">Friends</span>
            <span class="w3-tag w3-small w3-theme">Games</span>
            <span class="w3-tag w3-small w3-theme-l1">Friends</span>
            <span class="w3-tag w3-small w3-theme-l2">Food</span>
            <span class="w3-tag w3-small w3-theme-l3">Design</span>
            <span class="w3-tag w3-small w3-theme-l4">Art</span>
            <span class="w3-tag w3-small w3-theme-l5">Photos</span>
          </p>
        </div>
      </div>
      <br/>
      

      <div class="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
        <span  class="w3-button w3-theme-l3 w3-display-topright">
          <i class="fa fa-remove"></i>
        </span>
        <p><strong>Hey!</strong></p>
        <p>People are looking at your profile. Find out who.</p>
      </div>
    

    </div>
    
  
    <div class="w3-col m7">
    
      <div class="w3-row-padding">
        <div class="w3-col m12">
          <div class="w3-card w3-round w3-white">
            <div class="w3-container w3-padding">
              <h6 class="w3-opacity">Social Media template by w3.css</h6>
              <p class="w3-border w3-padding">Status: Feeling Blue</p>
              <button type="button" class="w3-button w3-theme"><i class="fa fa-pencil"></i>  Post</button> 
            </div>
          </div>
        </div>
      </div>
      
      <div class="w3-container w3-card w3-white w3-round w3-margin"><br/>
        <img src="/w3images/avatar2.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" />
        <span class="w3-right w3-opacity">1 min</span>
        <h4>John Doe</h4><br/>
        <hr class="w3-clear"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div class="w3-row-padding" >
            <div class="w3-half">
              <img src="/w3images/lights.jpg"  alt="Northern Lights" class="w3-margin-bottom" />
            </div>
            <div class="w3-half">
              <img src="/w3images/nature.jpg"  alt="Nature" class="w3-margin-bottom" />
          </div>
        </div>
        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
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
        <img src="/w3images/nature.jpg"  class="w3-margin-bottom"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
      </div> 

    </div>


    <div class="w3-col m2">
      <div class="w3-card w3-round w3-white w3-center">
        <div class="w3-container">
          <p>Upcoming Events:</p>
          <img src="/w3images/forest.jpg" alt="Forest" />
          <p><strong>Holiday</strong></p>
          <p>Friday 15:00</p>
          <p><button class="w3-button w3-block w3-theme-l4">Info</button></p>
        </div>
      </div>
      <br/>
      
      <div class="w3-card w3-round w3-white w3-center">
        <div class="w3-container">
          <p>Friend Request</p>
          <img src="/w3images/avatar6.png" alt="Avatar" /><br/>
          <span>Jane Doe</span>
          <div class="w3-row w3-opacity">
            <div class="w3-half">
              <button class="w3-button w3-block w3-green w3-section" title="Accept"><i class="fa fa-check"></i></button>
            </div>
            <div class="w3-half">
              <button class="w3-button w3-block w3-red w3-section" title="Decline"><i class="fa fa-remove"></i></button>
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
      

    </div>
    

  </div>
  

</div>
<br/>
<div class="w3-container w3-theme-d4">
    <p class="w3-large" >Radii Labs Pvt. Ltd. an enterprice of <a href=" https://adysenlab.github.io/ ">Adysenlab</a>
    </p>
    </div>
      </div>
      
    );
  }
}
// class UserList extends React.Component{
//   render(){
//     return(
//       <div >

//       <Postings postings={this.props.users}/>

//       </div>
//     );
//   }
// }

const mapStateToProps = (state) => ({
  docklets: state.postState.docklets,
  user: state.userState,
  authUser: state.sessionState.authUser,
});

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getProjects,
    getUserLogs,
    getFeedDocklets,
    assemblageFeedDockletAction 
}, dispatch);
}

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
