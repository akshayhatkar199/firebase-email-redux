importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {

apiKey: "AIzaSyDu2OsOKzfB0oaaEZpNwNgpJFGPVxeo9ZM",
//   authDomain: "FROM FIREBASE CONSOLE",
//   databaseURL: "FROM FIREBASE CONSOLE",
  projectId: "react-app-7d973",
//   storageBucket: "FROM FIREBASE CONSOLE",
  messagingSenderId: "45594232488",
  appId:"1:45594232488:web:391e73e2d732fdd90fe49d",
};


// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});