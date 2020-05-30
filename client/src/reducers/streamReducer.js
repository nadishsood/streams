import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./../actions/types";

import _ from 'lodash';

export default(state = {}, action)=>{
  switch(action.type){
    case FETCH_STREAMS: 
      return {...state, ..._.mapKeys(action.payload, "id")}
    case FETCH_STREAM:  
      return {...state, [action.payload.id]: action.payload}
    case CREATE_STREAM: 
      return {...state, [action.payload.id]: action.payload}
    case EDIT_STREAM: 
      return {...state, [action.payload.id]: action.payload}
    case DELETE_STREAM: 
      return _.omit(state, action.payload)
    case FETCH_STREAMS: 

      return 
    default: 
    return state;
  }
}

// ..._.mapKeys(action.payload, id) creates a big Object, we take that and add it to whatever
// new object got created in the first argument (...)

