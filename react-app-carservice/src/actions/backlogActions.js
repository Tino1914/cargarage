
import axios from "axios";
import Backlog from "../components/ClientBoard/Backlog";
import authHeader from "../services/auth-header";
import { GET_ERRORS, GET_BACKLOG, GET_CLIENT_CAR, DELETE_CLIENT_CAR } from "./types";


export const addCar = (backlog_id, car, history) => async dispatch => {
  try{

    await axios.post(`http://localhost:8080/api/backlog/${backlog_id}`, car, { headers: authHeader() });
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
   const res = await axios.get(`http://localhost:8080/api/backlog/${backlog_id}`, { headers: authHeader() })
   dispatch({
     type: GET_BACKLOG,
     payload: res.data
   });
  }catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
  });

  }


 
};

export const getCar = (backlog_id, car_id, history) => async dispatch => {
       try {
         const res = await axios.get(`http://localhost:8080/api/backlog/${backlog_id}/${car_id}`, { headers: authHeader() })
         dispatch({
           type: GET_CLIENT_CAR,
           payload: res.data
         })
       } catch (err) {
         history.push("/dashboard");
       }
};



export const updateCar = (backlog_id, car_id, car, history) => async dispatch => {
  try {

   await axios.patch(`http://localhost:8080/api/backlog/${backlog_id}/${car_id}`, car, { headers: authHeader() })
    history.push(`/clientBoard/${backlog_id}`)
    dispatch({
      type: GET_ERRORS,
      payload: {}
    })
  } catch (err) {
    
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });


  }
};


export const deleteCar = (backlog_id, car_id) => async dispatch => {
  if(window.confirm(`You are deleting car ${car_id}, this action cannot be undone`)){
    await axios.delete(`http://localhost:8080/api/backlog/${backlog_id}/${car_id}`, { headers: authHeader() })
    dispatch({
      type: DELETE_CLIENT_CAR,
      payload: car_id
    });
  }
}