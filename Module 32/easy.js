
function validateName() {
  const nameInput = document.getElementById('userName').value;
  const errorSpan = document.getElementById('error');
  const namePattern = /^[A-Za-z]+$/;

  if (!namePattern.test(nameInput)) {
    errorSpan.textContent = "Only letters are allowed.";
    return false;
  } else {
    errorSpan.textContent = "";
    return true;
  }
}