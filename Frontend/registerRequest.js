// const my_db = require("mongoose");

const fetchContact = () => {
  var requestOption = {
    method: "GET",
    redirect: "follow",
  };

  fetch("http://localhost:5001/api/users/register", requestOption)
    .then((response) => response.text())
    .then((result) => console.log(JSON.parse(result)))
    .catch((error) => console.log("error", error));
};

const registerUser = () => {
  const userName = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const passWord = document.getElementById("password").value;

  if (userName.length < 1) {
    alert("Enter Your Username");
    return;
  }
  if (email.length < 1) {
    alert("Enter Your Email ID");
    return;
  }

  if (passWord.length < 1) {
    alert("Enter Your Password");
    return;
  }
  if (passWord.length < 6) {
    alert("Password can't be smaller than 6 characters");
    return;
  }
  
  var myHeaders = new Headers();
  myHeaders.append("Content-type", "application/json");

  var raw = JSON.stringify({
    username: userName,
    email: email,
    password: passWord,
  });

  var requestOption = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:5001/api/users/register", requestOption)
    .then((response) => response.json())
    .then((result) => {
      if (typeof result.message === 'undefined'){
        alert("Success cheers");
      }
      else{
        alert(result.message);
      }
    })
    .catch((error) => console.log("error", error));
};
