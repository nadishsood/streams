import { SIGN_IN, SIGN_OUT } from "./../actions/types";


const INITIAL_STATE = {
    isSignedIn: null,
    userId: null

}

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
      case SIGN_IN:
        return { ...state, isSignedIn: true, userId: action.payload  };
      case SIGN_OUT:
        return { ...state, isSignedIn: false, userId: null };
      default:
        return state;
    }
};


//we want to default the state object to have a property isSignedin 
// and that should be null initially

//FIRST TIME when this runs, then when it runs - see video 223. 

