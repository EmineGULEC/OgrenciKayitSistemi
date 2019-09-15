import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';

class Main extends Component {
    componentDidMount () {
        firebase.initializeApp({
            apiKey: 'AIzaSyBwRz2F9b9VtZwrjqiPFqucU56BDcsBeug',
            authDomain: 'studentregister-4c24c.firebaseapp.com',
            databaseURL: 'https://studentregister-4c24c.firebaseio.com',
            projectId: 'studentregister-4c24c',
            storageBucket: '',
            messagingSenderId: '725485334021',
            appId: '1:725485334021:web:5ec921b3fb042c0beff66c'
        });
    }
    render () {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <Router />
            </Provider>
        );
    };
  

};

export default Main;