import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app';
import 'firebase/analytics'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5y1nv-D0D0z4fKzsmzwTEPchEHfnP6Qg",
  authDomain: "slingshot-saas-27f0c.firebaseapp.com",
  projectId: "slingshot-saas-27f0c",
  storageBucket: "slingshot-saas-27f0c.appspot.com",
  messagingSenderId: "299866784970",
  appId: "1:299866784970:web:da55e68e479a880997a033",
  measurementId: "G-G0MJPD2C8P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const analytics = firebase.analytics();
analytics.logEvent('notification_received');
reportWebVitals();
