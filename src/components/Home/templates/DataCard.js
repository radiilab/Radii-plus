import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DataCard extends React.Component{

render(){

        function PaintTittle(props){
            if(props.tittle !=null){
                return (<h4> {props.tittle} </h4>);
            }else{
                return ( <h4> untittled Post </h4>);
            }
        }
        function PaintLink(props){
            if(props.link !=null){
                
                    if (props.link.default != null) {
                    return (
                        <a  target="_blank" href ={props.link.default} className="w3-button w3-theme-d1 w3-margin-bottom">
                        <i class="fas fa-arrow-alt-circle-right"></i>
                        Read more</a>
                    );
                    }else 
                        return null;
            }else{
                return null;
            }
        }
        function PaintImage(props){
            if(props.image !=null){
                    
                    return (
                        <img alt="Paint infographic" src ={props.image} className="w3-image">
                        </img>
                    );
            }else{
                return null;
            }
        }
        function PaintSubTitle(props){
            var text = "";
            if (props.subtitle != null) {
                 text = text +" " + props.subtitle.map((item, index) => {
                return item; 
                });
                
                return text;
            } else {
                return null;
            }
        }
        return (
            <div className="w3-container w3-card w3-white w3-round w3-margin"><br/>
                    <PaintTittle tittle={this.props.app.tittle} />
                <hr className="w3-clear"/>
                
                <div class="w3-row-padding" >
                <p><PaintSubTitle subtitle= {this.props.app.subtittle} /> </p>
                <PaintImage image = {this.props.app.image} />
                <PaintLink link= {this.props.app.link} />
                </div>
            </div>
                      
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

