import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { feedDockets }  from '../constants/constants'



/**
 * 
 * the prime retiever of data from database ... when a callable cloudfunction is started
 */

 export default const onFetchFeedDockletsFromDatabase = functions.https.onCall((data, context) =>{
 // Message text passed from the client -- the hash loader that is used to select tht 
const text = data.text;
// Authentication / user information is automatically added to the request.
const uid = context.auth.uid;
const name = context.auth.token.name || null;
const picture = context.auth.token.picture || null;
const email = context.auth.token.email || null;

// required for Cloud messaging FCM token

const fcm_key = context.auth.token;

// -- {{ presently manual }} =>> REQUIRES URGENT ATTENTION 
//check if this key is there in the dbase  
console.log("fcm key :: " + fcm_key + " :: " + email + " ? ")

// shuffle the results so that the user sees the reults in different order
const hash =0 ; // to be changed to a server timestamp fuction
//the result that is to be sent back to the user
// Checking attribute.


		if (!(typeof text === 'string') || text.length === 0) {
		  // Throwing an HttpsError so that the client gets the error details.
		  throw new functions.https.HttpsError('invalid-argument', 'The function must be called with ' +
		      'one arguments "text" containing the message text to add.');
		}
//match if the correct user id is used against the name of the callable cloud functiion
	if (sessionExists(uid, email)) { 
		return parseResult(getDocklets(feedDockets, text), hash)
	}else{
		// return Error in Json Structure
		
		// Checking that the user is authenticated.
		if (!context.auth) {
		  // Throwing an HttpsError so that the client gets the error details.
		  throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' +
		      'while authenticated.');
		}
	}



 });


 function sessionExists(userSessionID, mailID ) {
 	admin.auth().getUserByEmail(mailID).then((record) =>{
 		if (record.uid === userSessionID) { 
 			return true
 		} else {
 			return false
 		}
 	}).catch(error => {
 		console.error("error :" + error)
 		return false
 	})
 }


 function parseResult(dataset, hashID) {

 	// presently being skipped

 	// change the order of {data} in {dataset} -- in JSON

 	return dataset
 }

 function getDocklets(path,text) {
 	/*

 	generates the first five results in  Firestore

 	[ about the document {path}  hashed by {text}  limited by {3} ] in JSON result  
 	*/
 	return admin.database().ref(path)
 			.startAt(0,text).limitToFirst(3).toJSON();
 }