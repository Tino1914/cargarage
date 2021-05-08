import axios from "axios";
import authHeader from "../services/auth-header";
import { GET_ERRORS, GET_CLIENTS, GET_CLIENT, DELETE_CLIENT } from "./types";


export const createClient = (client, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/client", client, { headers: authHeader() });
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
    const res = await axios.get("http://localhost:8080/api/client/all", { headers: authHeader() })
    console.log(res);
    dispatch({
        type: GET_CLIENTS,
        payload: res.data
    });
};

export const getClient = (id, history) => async dispatch => {

   try {
    const res = await axios.get(`http://localhost:8080/api/client/${id}`, { headers: authHeader() })
    dispatch({
        type: GET_CLIENT,
        payload: res.data
    });
   } catch (error) {
       console.log(error);
       history.push("/dashboard");//redirect you if there is no such project existing
   }


};

export const deleteClient = id => async dispatch => {
   if(window.confirm("Are you sure you want to delete this client and his information"
   )
   ){
    await axios.delete(`http://localhost:8080/api/client/${id}`, { headers: authHeader() })
    dispatch({
        type: DELETE_CLIENT,
        payload: id
    });
   }

}
