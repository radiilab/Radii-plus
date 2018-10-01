
import * as firestore from '../firebase/db'

export function getProjects() {  
    return {
      type: "PROJECTS"    
    };
}

export function getUserLogs(username) {  
    return {
      type: "USER_LOGS_GET",  
      payload : username  
    };
}
export function getFeedDocklets(count) { 
	console.log('get docklets') 
    return {
      type: "USER_GET_FEED_DOCKLETS",  
      payload : count  
    };
}

/*
get all the dockets from assemblage according to the action value
from the firestore dbase and the trigger actions to update the STATE with 
results from the compute
*/
export function assemblageFeedDockletAction(someValue) {
    return (dispatch, getState) => {
        dispatch({type : "DOCKLET_LOADING"});
        console.log('from assemblage');
        firestore.AssembladgeFeedDockletRef.get().then(snapshot => {
          snapshot.forEach(doc => {
        console.log("Parent Document ID: ", doc.id);

         firestore.AssembladgeFeedDockletRef.doc(doc.id).get()
          .then(snapshot => {
              console.log("Sub Document ID: ", doc.id);
              console.log("Sub Document Data: ", doc.data());
              dispatch({type : "DOCKLET_FOUND", payload : doc.data()})
              
          })
          .catch(err => {
            console.log("Error getting sub-collection documents", err);
            dispatch({type : "DOCKLET_FAILED", error : err})
          })
        }
        //action.payload = userInfo.data(),
        
        )
        }).catch(error => {
          console.log(error)
          dispatch({type : "DOCKLET_FAILED", error : error})
        }
        )   
    };
}

export function userLogoutAction(){
  return (dispatch, getState) => {
    dispatch({type:'RESET_POST_STATE'})
  }
}
export function resetHomeAction(){
  return (dispatch, getState) => {
    dispatch({type:'RESET_POST_STATE'})
  }
}