import React, { Component } from 'react';



import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

class SignOut extends Component{
onSubmit= () => {
auth.doSignOut().then(()=>{
    window.history.replaceState(routes.LANDING);
}).catch(error => {
    console.log(error);
})
}

render(){
    return(
        <button onClick={this.onSubmit} >Sign out Button</button>
    )
}


}

export default SignOut;
