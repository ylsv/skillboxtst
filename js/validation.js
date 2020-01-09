// Form variables
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const nameValidator = document.getElementById('name-validator');
const phoneValidator = document.getElementById('phone-validator');
const emailValidator = document.getElementById('email-validator');

// Form regular expressions to compare to
const nameRe = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
const phoneRe = /^\d[\d\(\)\ -]{4,14}\d$/;
const emailRe = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

name.addEventListener('blur', validateName);
phone.addEventListener('blur', validatePhone);
email.addEventListener('blur', validateEmail);

function validateName() {
  if(!nameRe.test(name.value)){
    nameValidator.classList.add('enroll-form_invalid');
  } else {
    nameValidator.classList.remove('enroll-form_invalid');
  }
}

function validatePhone() {
  if(!phoneRe.test(phone.value)){
    phoneValidator.classList.add('enroll-form_invalid');
  } else {
    phoneValidator.classList.remove('enroll-form_invalid');
  }
}

function validateEmail() {
  if(!emailRe.test(email.value)){
    emailValidator.classList.add('enroll-form_invalid');
  } else {
    emailValidator.classList.remove('enroll-form_invalid');
  }
}