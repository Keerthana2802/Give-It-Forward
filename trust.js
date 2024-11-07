function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function toggleContent(contentId, trustItemId) {
  var content = document.getElementById(contentId);
  var trustItem = document.getElementById(trustItemId);

  if (content.style.display === "none") {
    content.style.display = "block";
    trustItem.classList.add("show-content");
  } else {
    content.style.display = "none";
    trustItem.classList.remove("show-content");
  }
}

function handleEdit() {
  const infoElements = document.querySelectorAll(".info");
  const editButton = document.getElementById("edit");

  if (editButton.textContent === "Edit ✏️") {
    infoElements.forEach((element) => (element.contentEditable = "true"));
    editButton.textContent = "Done ✅";
  } else {
    infoElements.forEach((element) => (element.contentEditable = "false"));
    editButton.textContent = "Edit ✏️";
  }
}
