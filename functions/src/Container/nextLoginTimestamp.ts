import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// make the cloud as the admin panel for the apps to run

admin.initializeApp(functions.config().firebase);

//on every new login tihe timestamp of the user is to be noted for an existing user


export default const onNewUserLogin =functions.auth.user().onCreate(function(event){

    const mailid = event.email;
    const displayName = event.displayName;
    const uuid = event.uid;
    const timestamp = server timestamp;
    //return somthing
    return
});

function updateUserLoginTimestamp()