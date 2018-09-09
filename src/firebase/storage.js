import { storage } from './firebase'


/**
 * this file stores the file hirararchy present in the cloud storage
 */

export const storageRef = storage.ref();

export const logsRef = storage.ref('logs');

export const notif_logRef = storage.ref('logs/notification'); 

export const user_logRef = storage.ref('logs/users');

export const events_logRef = storage.ref('logs/events');
