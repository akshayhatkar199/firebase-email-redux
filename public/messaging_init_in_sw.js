import { initializeApp } from "firebase/app";
import { getMessaging,onMessage,onBackgroundMessage } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
    apiKey: "AIzaSyD-7OhJh4CAA_XW2YIOasoOM4dObBv3DDA",
    authDomain: "react-app-9991b.firebaseapp.com",
    projectId: "react-app-9991b",
    storageBucket: "react-app-9991b.appspot.com",
    messagingSenderId: "930973621466",
    appId: "1:930973621466:web:4880d93dd6491d5f4e99e3"
});


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);
onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // ...
  });
  
  onBackgroundMessage(messaging, (payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    // self.registration.showNotification(notificationTitle,
    //   notificationOptions);
  });