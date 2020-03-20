import { RECEIVED_DATA } from './actionTypes';
import resumeDataType from '../interfaces/dataType';

export const receivedData = (payload: resumeDataType) => {
    return {
        type: RECEIVED_DATA,
        payload
    }
}

export const fetchData = () => {
    return function(dispatch: any){
        return fetch('https://gist.githubusercontent.com/susylPearl/afbe4dfee15c3d9d704ca112ad2f1b59/raw/11800f560e51a224829a29bb834816eb4a63673c/resumeData.json')
        .then(data => data.json())
        .then(data => {
            dispatch(receivedData(data));
        })
    }
}
