let today = new Date();

let myMonth = today.getMonth(6);

let myYear = today.getFullYear();

document.getElementById("dateOfTomorrow").innerText =
  "0" + (today.getDate() + 1) + ":" + "0" + myMonth + ":" + myYear;
