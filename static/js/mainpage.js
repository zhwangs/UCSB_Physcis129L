// JavaScript Document
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

let timeoutId;

function showDropdownContent() {
    clearTimeout(timeoutId);
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.style.display = "block";
    dropdownContent.style.opacity = 1;
}

function hideDropdownContent() {
    const dropdownContent = document.getElementById("dropdown-content");
    // Set a timeout to hide the dropdown-content after 10 seconds
    timeoutId = setTimeout(function () {
        dropdownContent.style.display = "none";
        dropdownContent.style.opacity = 0;
    }, 10000); // 10 seconds in milliseconds
}