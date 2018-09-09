import * as firestore from '../firebase/db'

/**
 * this fuction handles the assync loading of the firestore activities 
 * @param {*} store 
 */

const logger= (store) => (next) => (action) => {
    console.log("logged middleware" , action);
    switch (action.type){
        case 'USER_LOGS_GET':
        //the middlewares should be non blocking --should be resolved with immediate effect
        firestore.AssembladgeFeedDockletRef.get().then(snapshot => {
          snapshot.forEach(doc => {
        console.log("Parent Document ID: ", doc.id);

        let subCollectionDocs = firestore.AssembladgeFeedDockletRef.doc(doc.id).get()
          .then(snapshot => {
              console.log("Sub Document ID: ", doc.id);
              console.log("Sub Document Data: ", doc.data());
              
          })
          .catch(err => {
            console.log("Error getting sub-collection documents", err);
          })
        }
        //action.payload = userInfo.data(),
        
        )
        }).catch(error => console.log(error))
        //the middlewares should be non blocking --should be resolved with immediate effect
        break;
                
        case "USER_GET_FEED_DOCKLETS":
                // var onFetchFeedDockletsFromDatabase = functions().httpsCallable('onFetchFeedDockletsFromDatabase');
                // onFetchFeedDockletsFromDatabase({text: action.payload}).then(function(result) {
                //   // Read result of the Cloud Function.
                //   action.payload = result
                // }).catch(function(error) {
                //   // Getting the Error details.
                //   var code = error.code;
                //   var message = error.message;
                //   var details = error.details;
                // });
        break;
        default :
            console.log(action);
    }
    next(action);
} 

export default logger;