import { EMAIL_SENT_SUCCESS, EMAIL_SENT_ERROR } from '../actions/actionTypes';

type ActionProps = {
    type: string,
    payload: boolean,
}

export default function(state = {}, action: ActionProps) {
    switch (action.type) {
        case EMAIL_SENT_SUCCESS:
            return {...state, hasError: false, emailSent: true };

        case EMAIL_SENT_ERROR: 
            return {...state, hasError: true, emailSent: false };

        default:
            return state;
    }
}