const form = document.getElementById('contact-form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

function validateName() {
  if (nameField.value.trim() === "") {
    nameError.textContent = "Name is required.";
    nameError.style.visibility = 'visible';
    return false;
  } else {
    nameError.style.visibility = 'hidden';
    return true;
  }
}

function validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (emailField.value.trim() === "") {
    emailError.textContent = "Email is required.";
    emailError.style.visibility = 'visible';
    return false;
  } else if (!emailPattern.test(emailField.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.visibility = 'visible';
    return false;
  } else {
    emailError.style.visibility = 'hidden';
    return true;
  }
}

function validateMessage() {
  if (messageField.value.trim() === "") {
    messageError.textContent = "Message is required.";
    messageError.style.visibility = 'visible';
    return false;
  } else {
    messageError.style.visibility = 'hidden';
    return true;
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  if (isNameValid && isEmailValid && isMessageValid) {
    alert("Form successfully submitted!");
    form.reset();  
  }
});
  
nameField.addEventListener('blur', validateName);
emailField.addEventListener('blur', validateEmail);
messageField.addEventListener('blur', validateMessage);
