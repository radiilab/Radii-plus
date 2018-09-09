import { messaging } from './firebase';

/**
 * the cloud can be used to reach out to the users with new content so that that 
 * users find a more emersive experience 
 * and the users are also happy that they can get their job done
 *  
 * and live happily
 * 
 * 
 * steps to enable cloud messaging 
 *  request permission
 *  get the fcm token from the clients browser and 
 *  push it to the firestore api
 *  use this token to reach out to the user on requirement 
 * 
 * user needs to have a working service worker model for using this cloud messaging as a service 
 * there are 2 ways to let that happen 
 * 
 * if the site is not presently open in the users browser the service worler would show a noitfication 
 * if the site or the app is open then a toast/badge will be received from the server's end
 */

const FCMenable = messaging.requestPermission().then(() => {
    console.log('the permission for sending cloud messages are enabled now');
    return messaging.getToken();
 }).then((token) => {
    console.log('token' + token);
 }).catch((err) => {
    console.log('error' + err);
 })


export {
    FCMenable
};