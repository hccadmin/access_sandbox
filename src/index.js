import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyAPYLzjWOPQkwvvOkicm5cxrNM_2gDH0n4",
  authDomain: "access-sandbox-49729.firebaseapp.com",
  databaseURL: "https://access-sandbox-49729.firebaseio.com",
  projectId: "access-sandbox-49729",
  storageBucket: "access-sandbox-49729.appspot.com",
  messagingSenderId: "926699663789",
  appId: "1:926699663789:web:50f97430cd416d3587f124"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
