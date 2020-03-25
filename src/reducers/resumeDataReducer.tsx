import { RECEIVED_DATA, CONTACT_FORM_SUBMITTED } from '../actions/actionTypes';
import resumeDataType from '../interfaces/dataType';

type ActionProps = {
    type: string,
    payload: resumeDataType,
}

export default function(state = {}, action: ActionProps) {
    switch (action.type) {
        case RECEIVED_DATA:
            return action.payload;
        case CONTACT_FORM_SUBMITTED:
            return action.payload;
        default:
            return state;
    }
}