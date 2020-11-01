import { combineReducers } from "redux";
import clientReducer from "./clientReducer";

import  errorReducer  from "./errorReducer";


export default combineReducers({
    errors:errorReducer,
    client: clientReducer
});