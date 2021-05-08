import { GET_BACKLOG, GET_CLIENT_CAR, DELETE_CLIENT_CAR } from "../actions/types";

const initialState = {
    cars: [],
    car: {}
}
export default function(state=initialState, action){
    switch(action.type){

        case GET_BACKLOG:
            return{
                ...state,
                cars: action.payload
            }

        case GET_CLIENT_CAR:
                return{
                    ...state,
                    car: action.payload
                }


        case DELETE_CLIENT_CAR:
                return {
                    ...state,
                    cars: state.cars.filter(car=>car.carSequence !== action.payload)


                    //to do

 
                }

        default:
            return state;
    }
}