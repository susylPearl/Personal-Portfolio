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
        return fetch('https://gist.githubusercontent.com/susylPearl/afbe4dfee15c3d9d704ca112ad2f1b59/raw/4b5c32ac92c0529b2e190cf73bd06f879769d9f4/resumeData.json')
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
        return fetch('http://localhost:5000/api/sendEmail', requestOptions)
        .then(data => {
            console.log('data sent successuflly');
            dispatch(contactFormSubmit(true));
        })
        .catch(error => {
            console.log('error occurs while sending email');
            dispatch(contactFormSubmit(false));
        })
    }
}
