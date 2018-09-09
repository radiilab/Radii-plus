import * as firestore from '../firebase/db'


const INITIAL_STATE = {
  user: {},
};

// pure immutable function
const getUserImg = (state, action) => ({
  ...state,
  user: action.users
});

const applyToUserLogs = (state, action) => ({
  ...state,
  data: action.payload,
  newData: firestore.AssembladgeFeedDockletRef.get().then(userInfo =>
        userInfo,
        
        ).catch(error => console.log(error))
});

function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'USER_LOGS_GET' : {
      return applyToUserLogs(state, action);
    }
    case 'USER_IMG_GET': {
      return getUserImg(state, action);
    }
    default : return state;
  }
}

export default userReducer;