import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import { create } from 'domain';



// add Random uuid generator support for the new users



// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// make the cloud as the admin panel for the apps to run

admin.initializeApp(functions.config().firebase);

// first time login the user should set an id and receive a welcome email

export default const onNewUserLogin =functions.auth.user().onCreate(function(event){
    // Get the uid and display name of the newly created user.
  const mailid = event.email;
  const displayName = event.displayName;
    const uuid = event.uid;
  // Send a welcome email to the newly created user.
  // The sendEmail() method is left as an exercise to the reader.
   return createNewUserRecords(mailid, displayName, uuid);
   // wait till the function ends executing 
});

function createNewUserRecords(mail,displayName, uuid){

    // Create a reference to the SF doc.

    const IamDocRef = admin.firestore().doc('users/'+mail);
   

     admin.firestore().runTransaction(function(transaction) {
        // This code may get re-run multiple times if there are conflicts.
       return transaction.get(IamDocRef).then(function(IamDoc) {
            if (!IamDoc.exists) {
                console.log("a new user roasted" + displayName);
                const newUser = {
                    uid : uuid,
                    email : mail,
                    name : displayName, 
                    LastSeen : new Date,
                    FCM : "null",
                    isDeveloper: "false"

                }

                transaction.set(IamDocRef, newUser);

            }
    
            
        });
    }).then(function() {
        console.log("Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });
}
/*

load all the components from the container and deploy them to the cloud fuction as is 

@adysenlab DEVELOPMENT VERSION ONLY
*/
