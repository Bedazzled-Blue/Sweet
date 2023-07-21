
//ADD YOUR FIREBASE LINKS HERE
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

    function addRoom()
    {
        room_name = document.getElementById("room_name").value;
    
        firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
        });
    
        localStorage.setItem("room_name", room_name);
    
        window.location = "kwitter_page.html";
    }
    
    
    function getData()
    {
        firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML
             Room_names = childKey;
            //Start Code
            console.log("room Name - " + Room_names);
            row="<dov class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
            });}
    
            function redirectToRoomName(name)
            {
                console.log(name);
                localStorage.setItem("room_name", name);
                window.location = "kwitter_page.html";
            }

            function logout()
            {
                localStorage.removeItem("user_name");
                localStorage.removeItem("room_name");
                window.location = "kwitter.html";
            }
           