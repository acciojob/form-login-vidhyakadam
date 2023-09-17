function getFormvalue() {
    //Write your code here
 const form = document.getElementById("myForm");

  // Get the values of the First and Last name fields by their IDs
  const firstName = form.elements["firstName"].value;
  const lastName = form.elements["lastName"].value;

  // Check if either of the fields is empty
  if (firstName === "" || lastName === "") {
    alert("Both First Name and Last Name are required.");
  } else {
    // Display the First and Last name using alert
    alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
  }
}
