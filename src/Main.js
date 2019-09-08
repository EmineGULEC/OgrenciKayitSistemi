import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class Main extends Component {
    componentWillMount () {
        firebase.initializeApp({
            apiKey: 'AIzaSyBXfB17IUAnlAqI_oPqwEfxh-4G3WT7w4E',
            authDomain: 'ogrencikayit-9492e.firebaseapp.com',
            databaseURL: 'https://ogrencikayit-9492e.firebaseio.com',
            projectId: 'ogrencikayit-9492e',
            storageBucket: 'ogrencikayit-9492e.appspot.com',
            messagingSenderId: '743052728196',
            appId: '1:743052728196:web:7ec5b0e2340d39c74d2fd1'
        });
    }
    render () {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
            <View>
                <LoginForm />
            </View>
            </Provider>
        );
    };
  

};

export default Main;