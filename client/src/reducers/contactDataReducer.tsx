import { EMAIL_SENT_SUCCESS, EMAIL_SENT_ERROR, RESET_SENT_STATUS } from '../actions/actionTypes';

type ActionProps = {
    type: string,
    payload: boolean,
}

export default function (state = { emailSuccess: false }, action: ActionProps) {
    switch (action.type) {
        case EMAIL_SENT_SUCCESS:
            return { ...state, emailSuccess: true };

        case EMAIL_SENT_ERROR:
            return { ...state, emailError: true };
        
        case RESET_SENT_STATUS:
            return { ...state, emailSuccess: false, emailError: false };
        
        default:
            return state;
    }
}