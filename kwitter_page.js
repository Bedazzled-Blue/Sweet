//YOUR FIREBASE LINKS//

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
    console.log("firebase initialized");
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData()
 { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         //start
         console.log(firebase_message_id);
         console.log(message_data);
         name = ['You'];
         message = message_data['message'];
         name_with_tag = "<h4>" + name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+"onclick='updateLike(this.id)'>";
         span_with_tag = "<span_class='glyphicon glyphicon-thumbs-up'>Sent By Sweet!"+"</span></button><hr>";

         row = name_with_tag + message_with_tag  + span_with_tag;
         document.getElementById("output").innerHTML += row;
         //end

      } });  }); }
getData();


//Functions//

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            
      });

      document.getElementById("msg").value = "";

}



function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");

}