var firebaseConfig = {
    apiKey: "AIzaSyBBs3MUPKf-arLc_JgAaCB9tPdnUIjw230",
    authDomain: "actual-kwitter-88ca2.firebaseapp.com",
    databaseURL: "https://actual-kwitter-88ca2-default-rtdb.firebaseio.com",
    projectId: "actual-kwitter-88ca2",
    storageBucket: "actual-kwitter-88ca2.appspot.com",
    messagingSenderId: "45626888273",
    appId: "1:45626888273:web:53f5669449ec4a2866e870"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name= document.getElementById("user_name").value;
    localStorage.setItem("user name", user_name);
    window.location= "kwitter_room.html";

}