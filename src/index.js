import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
import firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBxsONU9IRW4ls5MCXvA4ie0sZyElC26aE",
    authDomain: "todo-on-react.firebaseapp.com",
    databaseURL: "https://todo-on-react.firebaseio.com",
    projectId: "todo-on-react",
    storageBucket: "todo-on-react.appspot.com",
    messagingSenderId: "1076528486199"
  };
  
  firebase.initializeApp(config);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
