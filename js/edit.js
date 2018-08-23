var loggedIn = false
var username = null;
var password = null;

var admin = {
    email:"admin@admin.com",
    password: "adminadmin"
}

function handleNewHash() {
    if ((window.location.hash != "#/edit" && window.location.hash !="#/" || window.location.hash == "#/")){
        window.location.hash = "/"
        LogOut(loggedIn);
        loggedIn = false;
    }else if(window.location.hash == "#/edit" && !loggedIn){
        var tryUsername = localStorage.getItem("username");
        var tryPassword = localStorage.getItem("password");
        if (tryUsername && tryPassword){
            username = tryUsername;
            password = tryPassword;
            logIn();
        }else{
            addClass(document.getElementById("js-body"),"loginModalShown")
        }
        
    }
  }

  function LogOut(state){
      if (state){
          var controll = document.querySelectorAll(".controlButtons")
          for (var i =0; i<controll.length; i++){
              addClass(controll[i],"disabledControll")
          }
          var controll = document.querySelectorAll(".dragHere")
          for (var i =0; i<controll.length; i++){
              addClass(controll[i],"disabledControll")
          }
        }
      fillArrayData();
      drawStuff();
  }


  function logIn(e){
    if (!localStorage.getItem("username") && !localStorage.getItem("password")){
        username = e.target.email.value;
        password = e.target.password.value;
    }
    var payload = {
        email:username,
        password: password,
        returnSecureToken:true
    };
    singIn.open("POST",'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDVOQ2HPS2v6ow2XVnyK8sn2piTLH0-aP0',true)
    singIn.send(JSON.stringify(payload))
  }


