import { RECEIVED_DATA_SUCCESS, RECEIVED_DATA_ERROR } from '../actions/actionTypes';
import resumeDataType from '../interfaces/dataType';

type ActionProps = {
    type: string,
    payload: resumeDataType,
}

export default function(state = {}, action: ActionProps) {
    switch (action.type) {
        case RECEIVED_DATA_SUCCESS:
            return action.payload;

        case RECEIVED_DATA_ERROR:
            return {...state, hasError: true };
        
        default:
            return state;
    }
}