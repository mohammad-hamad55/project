const signUpButton=document.getElementById("sign-up");
const logInButton=document.getElementById('log-in');
const logInForms=document.getElementById('logInForm');
const formLog=logInForms.querySelectorAll('.form-style')[0];
const formSign=logInForms.querySelectorAll('.form-style')[1];
const signUpButtonHandler=()=>{
formLog.classList.toggle('hidden');
formSign.classList.toggle('hidden');
}
signUpButton.addEventListener('click',signUpButtonHandler)
logInButton.addEventListener('click',signUpButtonHandler)