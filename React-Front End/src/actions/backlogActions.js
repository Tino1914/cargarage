
import axios from "axios";
import Backlog from "../components/ClientBoard/Backlog";
import authHeader from "../services/auth-header";
import { GET_ERRORS, GET_BACKLOG } from "./types";


export const addCar = (backlog_id, car, history) => async dispatch => {
  try{

    await axios.post(`/api/backlog/${backlog_id}`, car, { headers: authHeader() });
  history.push(`/clientBoard/${backlog_id}`);
  dispatch({
    type: GET_ERRORS,
    payload: {}//clear out errors form previous state 
});

  }catch(err){
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    });
  }
  
    

};


export const getBacklog = backlog_id => async dispatch => {
  try{
   const res = await axios.get(`/api/backlog/${backlog_id}`, { headers: authHeader() })
   dispatch({
     type: GET_BACKLOG,
     payload: res.data
   });
  }catch (err) {

  }
}