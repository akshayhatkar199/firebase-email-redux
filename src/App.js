import React,{useState,useEffect,useMemo} from "react"
import { DatePicker } from 'antd';
import Login from './component/Login'
import Home from './component/Home';
import Sendemail from './component/Sendemail/Email'
import {checkLogin} from './component/store/reducers/userReducer'
import { useSelector, useDispatch } from 'react-redux'
// import socketIOClient from "socket.io-client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// /port firebase from './firebase';
import { initializeFirebase, askForPermissionToReceiveNotifications } from './firebase';
import { notification } from 'antd';
import ls from 'localstorage-slim';

// import './firebase-background';
// import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { fetchToken, onMessageListener } from "./firebase"

const Context = React.createContext({
  name: 'Default',
});

function App() {
  const [api, contextHolder] = notification.useNotification();
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
    .then(function(registration) {
      //console.log('Registration successful, scope is:', registration.scope);
    }).catch(function(err) {
    //  console.log('Service worker registration failed, error:', err);
    });
  }

  const dispatch = useDispatch()  
  const userData = useSelector((state)=>state.userData);
  const [isLogin,setIsLogin] = useState(false);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
checkIsLogin();
  },[])

  const checkIsLogin = async() => {

    //console.log("localStorage.getItem(token)",localStorage.getItem("token"))
    const token = localStorage.getItem("token");
    if(token){
      const data=await dispatch(checkLogin(token))
       setIsLogin(true);
    }
    setLoading(false);
  }
  
  
const  text = (payload) => {
  console.log("notification payload",payload)

    api.info({
      message: payload.notification.title,
      description:  payload.notification.body,
      placement :"topRight",
      duration : 10
    });
  
 }

 const processStartStopNotifications = async () => {
  const result = await askForPermissionToReceiveNotifications();
  //console.log("processStartStopNotifications  ",result);
  if (result.code === 'messaging/permission-blocked' || result.code === 'messaging/permission-default') {
    //setOpen(true);

    api.info({
      message: Notification,
      description: 'You have blocked notifications. Please allow from address bar.',
      placement :"topRight",
    });
    
  } else if (result.code === 'success') {
    // sendPushTokenToServer(result.token);
    ls.set('pushnotificationtoken', result.token, {ttl:86400 });
  //  localStorage.setItem('pushnotificationtoken', result.token);
  }
}
useEffect(() =>{
  initializeFirebase(text);
  processStartStopNotifications();
},[]);

const contextValue = useMemo(
  () => ({
    name: 'Ant Design',
  }),
  [],
);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
    <div className="App">
     <BrowserRouter>
<Routes>
    <Route exact path="/" element= { <Login/>}/> 
    <Route  path="/login" element= { <Login />}/>
    <Route path="/home" element={<Home/>} />
    <Route path="/Sendemail" element={<Sendemail/>} />
  </Routes>
</BrowserRouter>
    </div>
    </Context.Provider>
  );
  
}

export default App;
