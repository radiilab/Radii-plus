const INITIAL_STATE = {
  // the object prototype that holds the data to be displayed on site
  // memory management routines can be found in this 
    docklets:[] 
    //ticker useful to find the next set of data to be queried
  };
  
const applySetPosts = (state, action) => ({
  ...state, // destructuring es6
  posts: action.payload
});

const applyAddDocklet = (state, action) => ({
  ...state, // destructuring es6
  docklets: [...state.docklets , action.payload] 
});
const resetState = (state, action) => ({
  ...state, // destructuring es6
  docklets: [] 
});


function postReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'PROJECTS' : {
      console.log('posts set')
      return applySetPosts(state, action);
    
    };
    break;
    case 'POSTS_GET': {
      console.log("posts get" , action )
      return applySetPosts(state, action); // change tis function
    };
    break;
    
    case 'ADD_POST': {
      console.log("posts add" , action )
      return state = state + action.payload; 
    };
    break;
    case 'DOCKLET_FOUND':{
      console.log("adding docklet to state", action)
      return applyAddDocklet(state, action);
    };
    break;
    case 'RESET_POST_STATE':{
      
      console.log("reset the array ... user not available")
      return resetState(state, action);
    };
    break;
    default : return state;
  }
}
  
export default postReducer;