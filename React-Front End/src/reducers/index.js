import { combineReducers } from "redux";
import backlogReducer from "./backlogReducer";
import clientReducer from "./clientReducer";

import  errorReducer  from "./errorReducer";


export default combineReducers({
    errors:errorReducer,
    client: clientReducer,
    backlog: backlogReducer
});