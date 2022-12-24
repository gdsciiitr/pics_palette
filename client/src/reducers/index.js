import { combineReducers } from "redux";
import auth from './auth';
// import post from './post';
import reducerPost from "./post";


export default combineReducers({
   auth:auth,
   post:reducerPost
})
