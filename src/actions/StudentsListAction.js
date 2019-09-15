import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { STUDENT_CHANGED, CREATE_REQUEST_SUCCESS, CREATE_REQUEST } from './types';
import { Actions } from 'react-native-router-flux';

export const studentChanged = ({ props, value }) => {
    return (dispatch) => {
        dispatch({
            type: STUDENT_CHANGED,
            payload: {props, value}
        });
    };
};

export const studentCreate = ({ isim, soyisim, ogrencinumara, sube }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({type: CREATE_REQUEST});

        firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
        .push({ isim, soyisim, ogrencinumara, sube })
        .then(() => {
            dispatch({type: CREATE_REQUEST_SUCCESS});
            Actions.pop();
           

        });
    };
};