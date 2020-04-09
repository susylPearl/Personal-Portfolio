import axios from 'axios';
import { RECEIVED_DATA_SUCCESS, RECEIVED_DATA_ERROR, EMAIL_SENT_SUCCESS, EMAIL_SENT_ERROR } from './actionTypes';
import resumeDataType from '../interfaces/dataType';
import { BASE_URL } from './constant';

export const fetchData = () => {
    return async (dispatch: any) => {
        try{
            const response = await axios.get('https://gist.githubusercontent.com/susylPearl/afbe4dfee15c3d9d704ca112ad2f1b59/raw/64b1c8ff866e030a2975b814e5f057237b5a8ec8/resumeData.json');
            dispatch({ type: RECEIVED_DATA_SUCCESS, payload: response.data });
        } catch {
            dispatch({ type: RECEIVED_DATA_ERROR });
        }
    }
}

export const submitForm = (data: resumeDataType["formData"]) => {
    return async (dispatch: any) => {
        try{
            const response = await axios.post(BASE_URL + 'sendMail', data);
            dispatch({ type: EMAIL_SENT_SUCCESS, payload: response });
        } catch {
            dispatch({ type: EMAIL_SENT_ERROR });
        }
    }
}
