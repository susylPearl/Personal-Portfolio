import { RECEIVED_DATA, CONTACT_FORM_SUBMITTED } from './actionTypes';
import resumeDataType from '../interfaces/dataType';

export const receivedData = (payload: resumeDataType) => {
    return {
        type: RECEIVED_DATA,
        payload
    }
}

export const contactFormSubmit = (payload: any) => {
    return {
        type: CONTACT_FORM_SUBMITTED,
        payload
    }
}

export const fetchData = () => {
    return function(dispatch: any){
        return fetch('https://gist.githubusercontent.com/susylPearl/afbe4dfee15c3d9d704ca112ad2f1b59/raw/da2a80326dc1ff2bdf72d54a7ca76b0af53259d2/resumeData.json')
        .then(data => data.json())
        .then(data => {
            dispatch(receivedData(data));
        })
    }
}

export const submitForm = (data: resumeDataType["formData"]) => {
    return function(dispatch: any){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        return fetch('https://node-mailer-api-akatwbj3u.now.sh', requestOptions)
        .then(data => {
            dispatch(contactFormSubmit(true));
        })
        .catch(error => {
            dispatch(contactFormSubmit(false));
        })
    }
}
