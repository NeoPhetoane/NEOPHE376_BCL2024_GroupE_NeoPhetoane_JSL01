function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = " "; // Placeholder for validation result

  //The conditions that need to be met
  let regex = /^pet_[0-9]{4}[a-z]+$/gi;

  // TODO: Write your validation logic here

  // Check if input starts with 'pet_' and followed by alphanumeric characters
  if (regex.test(input)) {
    result = "Valid Syntax <span class='valid'></span>";
  } else {
    result = "Invalid Syntax <span class='invalid'></span>";
  }

  document.getElementById("result").innerHTML = result;
}
