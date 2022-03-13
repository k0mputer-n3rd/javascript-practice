/* BitWise JavaScript */
/* Homework */
/* K0mputer N3rd */
/* 03/13/2022 */

/***********\
* script.js *
\***********/

const theBody = document.body;
const theButton = document.getElementById("button1");
theBody.style.color = "darkblue";
theBody.style.backgroundColor = "deeppink";
theButton.style.color = "crimson";
theButton.style.backgroundColor = "lightblue";

/*************\
* logInAndOut *
\*************/

function logInAndOut() {
  if (theBody.style.color === "crimson") {
    // If logged in, then log out and change colors
    theBody.style.color = "darkblue";
    theBody.style.backgroundColor = "deeppink";
    theButton.style.color = "crimson";
    theButton.style.backgroundColor = "lightblue";
    theButton.innerText = "Click to Log In";
  } else {
    // Else logged out, so log in
    var valid = getPassword();
    if (valid) {
      // If valid password, change colors
      theBody.style.color = "crimson";
      theBody.style.backgroundColor = "lightblue";
      theButton.style.color = "darkblue";
      theButton.style.backgroundColor = "deeppink";
      theButton.innerText = "Click to Log Out";
    }
  }
}

/*************\
* getPassword *
\*************/

function getPassword() {
  var valid = false;
  var password;
  do {
    password = prompt("Enter Password (6-20 characters)");
    if (password === null) {
      return false; // If cancel button clicked
    }
    if (password.length === 0) {
      return false; // If nothing entered
    }
    valid = validatePassword(password);
  } while (!valid);
  return true; // Valid password entered
}

/******************\
* validatePassword *
\******************/

function validatePassword(password) {
  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }
  if (password.length > 20) {
    alert("Password must be no more than 20 characters");
    return false;
  }
  var firstChar = password.charAt(0).toUpperCase();
  if (firstChar < "A" || firstChar > "Z") {
    alert("Password must begin with a letter");
    return false;
  }
  return true;
}
