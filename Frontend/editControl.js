const token = localStorage.getItem("token");
export function editContact(_id) {
  var name;
  var email;
  var phone;

  try {
    name = document.getElementById("AddName").value;
    email = document.getElementById("AddMail").value;
    phone = document.getElementById("AddPhone").value;
  } catch (err) {
    console.log("Unable to find dom element", err);
  }

  try {
    const response = fetch("http://localhost:5001/api/contacts/" + _id, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
      }),
    }).then((response) => {
      const res = response.json();
      res.then((data) => {
        if (data) {
          var modal = document.getElementById("myModal");
          modal.style.display = "none";
          location.reload(true);
        }
      });
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

editContact;
