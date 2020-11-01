import { DELETE_CLIENT, GET_CLIENT, GET_CLIENTS } from "../actions/types";




const initialState = {
    clients: [],
    client: {}
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_CLIENTS:
        return{
            ...state,
            clients: action.payload
        };
        case GET_CLIENT:
            return{
                ...state,
                client: action.payload
            };

            case DELETE_CLIENT:
                return{
                    ...state,
                clients: state.clients.filter(client=>client.clientIdentifier !== action.payload)//remove it from the redux server and show it without refresh
                };
            

        default:
            return state;
    }
}