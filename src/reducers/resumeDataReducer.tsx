import { RECEIVED_DATA } from '../actions/actionTypes';
import resumeDataType from '../interfaces/dataType';

type ActionProps = {
    type: string,
    payload: resumeDataType,
}

export default function(state = {}, action: ActionProps) {
    switch (action.type) {
        case RECEIVED_DATA:
            return action.payload;
        default:
            return state;
    }
}