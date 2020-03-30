import { CONTACT_FORM_SUBMITTED } from '../actions/actionTypes';

type ActionProps = {
    type: string,
    payload: boolean,
}

export default function(state = {}, action: ActionProps) {
    switch (action.type) {
        case CONTACT_FORM_SUBMITTED:
            return action.payload;
        default:
            return state;
    }
}