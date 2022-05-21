const firebaseConfig = {
    apiKey: "AIzaSyC7JfePtGV-szUmI5q9ZEu0BgaD5m6D__Y",
    authDomain: "skyloria-13bcb.firebaseapp.com",
    databaseURL: "https://skyloria-13bcb-default-rtdb.firebaseio.com",
    projectId: "skyloria-13bcb",
    storageBucket: "skyloria-13bcb.appspot.com",
    messagingSenderId: "745250488561",
    appId: "1:745250488561:web:1d07fc772c4e2d2368a950",
    measurementId: "G-X8CPJNL28T"
  };
firebase.initializeApp(firebaseConfig);

document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("./dashboard/user/account.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}