import { db } from './firebase';

// Actions api

/*
all the projects that are being processed in the promotional

1 -> Database ... to be changed into distributed patterns soon
2 :-> video series ...
3 :-> ml kit that I have been planning is to be the later year but one 
      ml project this year
4 :-> scholar variables:: 

*/

const AssembladgeFeedDockletRef = db.collection('/assemblage/feeds/dockets');

const usersRef = db.collection('users');

const projectsRef = db.collection('projects');

const educationalRef = db.collection('study');

/**
 * 
 * intermittently there has to be updates regarding the
 * whereabouts in the world of Radii
 *  
 */

const BlogsRef = db.collection('Blog');  // inclusive of vlogs
// Other db APIs ...

export {
      db,
      AssembladgeFeedDockletRef,
      usersRef,
      projectsRef,
      educationalRef,
      BlogsRef
};