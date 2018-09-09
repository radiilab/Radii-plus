/**
 * this fuction handles the assync loading of the firebase activities 
 * @param {*} store 
 */

const cursor= (store) => (next) => (action) => {
    console.log("logged middleware" , action);
    switch (action.type){
        case 'PROJ_SEARCH':
        console.log(action.payload);
        
        break;
        default :
            console.log(action);
    }
    next(action);
} 

export default cursor;