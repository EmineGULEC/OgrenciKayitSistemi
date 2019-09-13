import { Alert } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL } from './types';

export const emailChanged = (email) => {
    return (dispatch) => {
        dispatch({
            type: EMAIL_CHANGED,
            payload: email
        });
    };
};

export const passwordChanged = (password) => {
    return (dispatch) => {
        dispatch({
            type: PASSWORD_CHANGED,
            payload: password
        });
    };
};

export const loginUser = ({ email, password }) => {
    return(dispatch) => {
        dispatch({ type: LOGIN_USER});
        if (email === '' || password === '') {
            Alert.alert(
              'Mesaj',
              'Her iki alanda dolu olmalı!',
              [
                { text: 'Tamam', onPress: () => null }
              ]
            );
          } else {
            firebase.auth().signInWithEmailAndPassword(email, password)
              .then(user => loginSucces(dispatch,user))
              .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                  .then(user => loginSucces(dispatch,user))
                  .catch(() => loginFail());
              });
          }

    };
};

const loginFail = (dispatch) => {
    if (email === '' || password === '') {
        Alert.alert(
          'Mesaj',
          'Her iki alanda dolu olmalı!',
          [
            { text: 'Tamam', onPress: () => null }
          ]
        );
    dispatch({
        type: LOGIN_USER_FAIL
    });
};
};
const loginSucces = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};