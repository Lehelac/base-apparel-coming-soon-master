// const changeName = document.getElementById("email");

// function changeName(newName) {

//     const formBox = document.getElementById("email");
//     formBox.style.color = ('pink');
// }

function validateForm() {
    var x = document.forms["emailForm"]["email"].value;
    if (x == "") {
      alert("Input field is empty. Please enter a valid E-mail address.");
      return false;
    }
  }
