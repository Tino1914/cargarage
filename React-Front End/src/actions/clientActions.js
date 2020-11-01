import axios from "axios";
import { GET_ERRORS, GET_CLIENTS, GET_CLIENT, DELETE_CLIENT } from "./types";


export const createClient = (client, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8080/api/client", client)
        history.push("/dashboard");
        dispatch({
            type: GET_ERRORS,
            payload: {}//clear out errors form previous state 
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};



export const getClients = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/client/all")
    dispatch({
        type: GET_CLIENTS,
        payload: res.data
    });
};



export const getClient = (id, history) => async dispatch => {

   try {
    const res = await axios.get(`http://localhost:8080/api/client/${id}`)
    dispatch({
        type: GET_CLIENT,
        payload: res.data
    });
   } catch (error) {
       history.push("/dashboard");//redirect you if there is no such project existing
   }




  
};


export const deleteClient = id => async dispatch => {
    await axios.delete(`http://localhost:8080/api/client/${id}`)
    dispatch({
        type: DELETE_CLIENT,
        payload: id
    });
}