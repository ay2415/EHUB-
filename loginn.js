  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBqC6avatMMd0x7RmHPrQIMDf_zXFEuJ50",
    authDomain: "loginandregisterform-d0d0a.firebaseapp.com",
    projectId: "loginandregisterform-d0d0a",
    storageBucket: "loginandregisterform-d0d0a.appspot.com",
    messagingSenderId: "56874729489",
    appId: "1:56874729489:web:395cff98f7341a76bcf1b0",
    measurementId: "G-CDVGCEPL9G"
  };
  firebase.initializeApp(firebaseConfig);
  
  var LoginandRegisterFormDB = firebase.database().ref("LoginandRegisterForm");

  document.getElementById("LoginandRegisterForm").addEventListener('submit',submitForm);

  function submitForm(e) {

    e.preventDefault();

    var name = getElementVal('name');
    var password = getElementVal('password');
    var emailid = getElementVal('emailid');

    saveMessages(name,password,emailid);
    

  }
  const saveMessages = (name,password,emailid) => {
    var LoginandRegisterForm = LoginandRegisterFormDB.push();
     
    LoginandRegisterForm.set({
        name : name,
        password : password,
        emailid :  emailid,

    });

  }
  const getElementVal = (id) => {
    return document.getElementById(id).value; 
  };

