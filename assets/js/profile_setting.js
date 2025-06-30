const firebaseConfig = {
  apiKey: "AIzaSyBGAd0juNHHMvoCM9g30vhHa-mGWr74-nw",
  authDomain: "tappware-16dbf.firebaseapp.com",
  databaseURL: "https://tappware-16dbf-default-rtdb.firebaseio.com",
  projectId: "tappware-16dbf",
  storageBucket: "tappware-16dbf.firebasestorage.app",
  messagingSenderId: "62867863973",
  appId: "1:62867863973:web:5fdfcb4f3b9879f323d04c",
  measurementId: "G-3BP2978JKJ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
    
    var alluser = firebase.database().ref().child("admin").child('super_admin');
    
    
    
    
    var admin = '';
    var pass = '';
    
  
  
  
  
  alluser.on("value", function (snapshot4) {
      if (snapshot4.exists()) {
  
  
  
  
        admin = snapshot4.val().username;
         pass = snapshot4.val().password ;
  
  
  
  
  
      }
  
  

  
      $('#bkas').val(admin);
      $('#nog').val(pass);
    
  
  
    });
  
  
    function validate() {
  
      var bkas  = document.getElementById("bkas").value;
      var nog = document.getElementById("nog").value;
   
      
    
    
      var ref10 = firebase.database().ref().child("admin");
    
      var didConfirm = confirm("Are you sure You want to submit??");
      if (didConfirm == true) {
    
        ref10.child('super_asdmin').set({
          "username": bkas,
          "password": nog,

        
          
    
        });
    
    
        location.reload();
        
    
    
      } else {
        return false;
      }
    
    
    
    
    
    }
    
    
    
    
    
  
  
    
    
    
    
  
  
    
    
  
    
  
    
  
  