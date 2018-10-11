const INITIAL_STATE = {
  // the object prototype that holds the data to be displayed on site
  // memory management routines can be found in this
    LoadCount: 0,
    docklets:[] 
    //ticker useful to find the next set of data to be queried
  };
  
const applySetPosts = (state, action) => ({
  ...state, // destructuring es6
  posts: action.payload
});

const applyAddDocklet = (state, action) => ({
  ...state, // destructuring es6
  LoadCount : state.LoadCount + 1,
  //put the docklet key into the storage space as a pattern
  docklets: [...state.docklets , action.payload] 
});
const resetState = (state, action) => ({
  ...state, // destructuring es6
  docklets: [] 
});


function postReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'PROJECTS' : {
      console.log('posts set');
      return applySetPosts(state, action);
    
    };
    break;

    case 'DOCKLET_FOUND':{
      
      return applyAddDocklet(state, action);
    };
    break;
    case 'RESET_POST_STATE':{
      
      
      return resetState(state, action);
    };
    break;
    default : return state;
  }
}
  
export default postReducer;