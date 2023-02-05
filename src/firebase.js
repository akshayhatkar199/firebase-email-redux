import { initializeApp } from "firebase/app";
import { getMessaging,onMessage,getToken } from "firebase/messaging";
export const initializeFirebase = (text) => {
 // try {   
    const firebaseApp = initializeApp({
        apiKey: "AIzaSyDu2OsOKzfB0oaaEZpNwNgpJFGPVxeo9ZM",
        appId: "1:45594232488:web:391e73e2d732fdd90fe49d",
        projectId: "react-app-7d973",
        messagingSenderId: "45594232488"
      });
      
      const messaging = getMessaging(firebaseApp);
      onMessage(messaging, (payload) => {
        text(payload);
      });

  //   } catch (error) {
  //     console.error(error);
  //     return { code: 'error', error: error };
  // }
 }

export const askForPermissionToReceiveNotifications = async () => {
 // return { code: 'success', token: "" };
    try {   
    const messaging = getMessaging();
    const currentToken = await getToken(messaging, { vapidKey: "BG5bBrvlPGuN1vXv740rodlzdkSzXIiVEWAUDYShQvOpQ8Os_A0NvHbKY-pUEwT7A9GGicN76wdt1fIwZFwL_f0" })
    if (currentToken) {
        return { code: 'success', token: currentToken };
    } else {
        return { code: 'error', error: 'No registration token available. Request permission to generate one.' };
    }

} catch (error) {
        console.error(error);
        return { code: 'error', error: error };
    }

}
