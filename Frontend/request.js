const fetchContacts = () => {
  var requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token" + "abs")}`,
    },
    redirect: "follow",
  };

  fetch("http://localhost:5001/api/contacts", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(JSON.parse(result)))
    .catch((error) => console.log("error", error));
};

const loginUser = () => {
  const userName = document.getElementById("mail").value;
  const password = document.getElementById("pass").value;

  if (userName.length < 1) {
    alert("Enter Your Username");
    return;
  }

  if (password.length < 1) {
    alert("Enter Your Password");
    return;
  }

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: userName,
    password: password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:5001/api/users/login", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.accessToken) {
        localStorage.setItem("token", result?.accessToken);

        // alert("You're successfully loggen in");
        
        function goToPage() {
          window.location.href = "mainContacts.html";
        }
        goToPage();
      } else {
        alert("Invalid User/Password");
      }
    })
    .catch((error) => console.log("error", error));
};
