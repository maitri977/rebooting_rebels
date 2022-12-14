//Initialize values
let fnameVal = document.getElementById('fname');
let lnameVal = document.getElementById('lname');
let visitDateVal = document.getElementById('visitDate');
let emailVal = document.getElementById('email');
let phoneVal = document.getElementById('phone');
let detailsContainer = document.getElementById('detailsList');
let saveDetailsBtn = document.getElementById("submitBtn");
let viewVisitBtn = document.getElementById("viewVisitBtn");
let notification = document.getElementById("notification");
let visitDetails = JSON.parse(localStorage.getItem("visit_details")) || [];
let isDone = false;
let isHidden = true;

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("viewVisitBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

getDetails = () => {
    let userFname = fnameVal.value;
    let userLname = lnameVal.value;
    let userVisitDate = visitDateVal.value;
    let userEmail = emailVal.value;
    let userPhone = phoneVal.value;
   
    visitDetails.push(userFname, userLname, userVisitDate, userEmail, userPhone);

    isDone = true;
    if (isDone == true) {
      saveDetailsBtn.style.display="none";
      fnameVal.disabled=true;
      lnameVal.disabled=true;
      emailVal.disabled=true;
      visitDateVal.disabled=true;
      phoneVal.disabled=true;
      notification.style.display="block";
      notification.innerHTML="Visit scheduled successfully!";
      viewVisitBtn.style.display="block";
      saveToStorage();
      // clearStorage(); 
      console.log(visitDetails)
    }
    finalFname.innerHTML += userFname;
    finalLname.innerHTML += userLname;
    finalDate.innerHTML += userVisitDate;
    finalEmail.innerHTML += userEmail;
    finalPhone.innerHTML += userPhone;
}

//Populate the task list and select tag
listVisits = () => {

    for (visitDetail of visitDetails) {
        let listItem = document.createElement("li");
        let listValue = document.createTextNode(visitDetail);

        listItem.appendChild(listValue);

        detailsContainer.appendChild(listItem);
    };
}
fadeOut = () => {
  notification.style.display="none";
}

//Data saved to local storage to avoid deletion upon refresh
saveToStorage = () => {
    localStorage.setItem("visit_details",
    JSON.stringify(visitDetails));
}

// Clear local storage for testing purposes
clearStorage = () => {
    localStorage.clear();
    window.location.reload();
}