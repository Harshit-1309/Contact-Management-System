// import { delContact } from "./deleteControl";
const token = localStorage.getItem("token");

fetch("http://localhost:5001/api/contacts", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => response.json())
  .then((result) => {
    result.map(function getFullDetails(item) {
      document.getElementById(
        "divData"
      ).innerHTML += ` <i class="icofont-ui-user"></i> &nbsp; Name &nbsp;:&nbsp; ${item.name} <br> <br><i class="icofont-ui-message"></i> &nbsp; Email &nbsp;:&nbsp; ${item.email} <br> <br> <i class="icofont-ui-call"></i> &nbsp; Phone &nbsp;:&nbsp; ${item.phone} <br> <br> `;

      document.getElementById("divData").innerHTML +=
        ` <i class="icofont-ui-edit" id="popup" onclick='module.editContact("${item._id}")'></i> &nbsp;&nbsp;`;
      
      document.getElementById("divData").innerHTML +=
        `<i class="icofont-ui-delete" onclick='module.delContact("${item._id}")' ></i> <br> <hr class='line'> <br>`;
    });
  })
  .catch((error) => console.log("error", error));
