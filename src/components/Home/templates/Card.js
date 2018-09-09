import React, { Component } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DataCard extends React.Component{
    render(){
        return (
            <div className="w3-container w3-card w3-white w3-round w3-margin"><br/>
                <h4> {this.props.app.tittle} </h4>    
                <hr className="w3-clear"/>
            </div>

                // <div className="embed-container">
                // <iframe src={this.props.app.href} title={this.props.app.title} width="560" height="315" 
                // frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                // </iframe>
                //  </div>   
            
                
            
            // <button type="button" 
            // className="w3-button w3-theme-d1 w3-margin-bottom">
            // <i className="fa fa-thumbs-up"></i>
            //  Action 1</button> 


            // <button type="button" 
            // className="w3-button w3-theme-d2 w3-margin-bottom">
            // <i className="fa fa-comment"></i>
            //   Action 2</button> 
            
        
        );
        
    }
}

const mapStateToProps = (state) => ({
  

});

function mapDispatchToProps(dispatch){
  return bindActionCreators({

}, dispatch);
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(DataCard);