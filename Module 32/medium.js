
function validateAge() {
    const ageInput = document.getElementById('userName').value;
    const errorSpan = document.getElementById('error');
    const agePattern = /^[A-Za-z]+$/;
  
    if (!agePattern.test(ageInput)) {
      errorSpan.textContent = "Only Numbers are allowed.";
      return false;
    } else {
      errorSpan.textContent = "";
      return true;
    }
  }