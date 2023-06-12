const token = localStorage.getItem("token");
export function delContact(_id) {

if(confirm(`Delete this contact ? `)===true){
  try {
    const response = fetch("http://localhost:5001/api/contacts/" + _id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,

        "Content-Type": "application/json",
      },

    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Data deleted successfully");
        if (result) {
          location.reload(true);
        } else {
          console.error("Error deleting data");
        }
      });
  } catch (error) {
    console.error("Error:", error);
  }
}else{
  return;
}
}

delContact;


