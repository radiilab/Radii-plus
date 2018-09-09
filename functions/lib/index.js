"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
// import { create } from 'domain';
// add Random uuid generator support for the new users
const uuidv4 = require('uuid/v4');
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// make the cloud as the admin panel for the apps to run
admin.initializeApp(functions.config().firebase);
// first time login the user should set an id and receive a welcome email
exports.onNewUserLogin = functions.auth.user().onCreate(function (event) {
    // Get the uid and display name of the newly created user.
    const mailid = event.email;
    const displayName = event.displayName;
    // Send a welcome email to the newly created user.
    // The sendEmail() method is left as an exercise to the reader.
    createNewUserRecords(mailid, displayName);
});
function createNewUserRecords(uid, displayName) {
    // Create a reference to the SF doc.
    const IamDocRef = admin.firestore().doc('users/' + displayName);
    admin.firestore().runTransaction(function (transaction) {
        // This code may get re-run multiple times if there are conflicts.
        return transaction.get(IamDocRef).then(function (IamDoc) {
            if (!IamDoc.exists) {
                console.log("a new user roasted" + displayName);
                const newUser = {
                    uuid: uuidv4(),
                    email: uid,
                    name: displayName,
                    LastSeen: new Date,
                    FCM: "null",
                };
                transaction.set(IamDocRef, newUser);
            }
        });
    }).then(function () {
        console.log("Transaction successfully committed!");
    }).catch(function (error) {
        console.log("Transaction failed: ", error);
    });
}
//# sourceMappingURL=index.js.map