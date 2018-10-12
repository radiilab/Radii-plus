import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

//all middle wares
import thunk from '../middleware/thunk';  



const initialState = {}

const store = createStore(
    rootReducer,
    initialState,
     compose(
         applyMiddleware( thunk),
         //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
         )
        );
store.subscribe(()=> {
    //console.log("store updated! ", store.getState())
})

export default store;