var modal = document.getElementById("myEditModal");
var btn = document.getElementById("divData");
var AdBtn = document.getElementById("EditBtn");
var span = document.getElementsByClassName("editClose")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
