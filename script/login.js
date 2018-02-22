$(document).ready(function(){
  //when the user click outside the login form, close Login
  var loginForm = document.getElementById('login-div');
  var form = document.getElementsByTagName('form')[0];
  window.onclick = function(event){
    if(event.target == loginForm){
      loginForm.style.display = "none";
    }
  }

  //open login form
  var login = document.getElementById('login');
  login.onclick=openLogin;

  function openLogin(){
    loginForm.style.display='block';
  }

  //close login form
  var closeLogin = document.getElementById('close-div');
  closeLogin.onclick= closeLogin;

  function closeLogin(){
      loginForm.style.display='none';
  }

  var emailInput=document.getElementById('email');
  var pswdInput = document.getElementById('password');

  //change type text to type password on focus on password field
  pswdInput.onfocus=function(){
    this.type = "password";
  };

  //use default value for email if input is empty
  emailInput.onblur= function(){
    if($(this).val()==''){
      $(this).val('Your e-mail');
    }

  //validation for email input. If input is not correct, an error message
  //is shown.
    var error = document.getElementsByClassName('email-error')[0];
    if (!validateField($(this).val())){
      emailInput.style.boxShadow='0 0 5px 1px red';
      emailInput.style.backgroundColor="#f00";
      error.innerHTML="Please add an email address!";
    }else{
      emailInput.style.boxShadow='0 0 0 0';
      emailInput.style.backgroundColor="none";
      error.innerHTML="";
    }
  }

  //Validation funtion for email input
  function validateField(email){
    var regex=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  //use default value for password if input is empty
  pswdInput.onblur=function(){
    if($(this).val()==''){
      this.type = "text";
      $(this).val('Your password');
    }

    //validation for password input. If input is not correct, an error message
    //is shown.
    var error = document.getElementsByClassName('pswd-error')[0];
    if(!validatePswd($(this).val())){
      pswdInput.style.boxShadow='0 0 5px 1px red';
      pswdInput.style.backgroundColor="#f00";
      error.innerHTML="This password is incorect!";
    }else{
      pswdInput.style.boxShadow='0 0 0 0';
      pswdInput.style.backgroundColor="none";
      error.innerHTML="";
    }

  }

  function validatePswd(password){
    var pswdRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    return (pswdRegex.test(password)
            );
  }

  //on click, clear input fields for email and password
  emailInput.onclick=clearField;
  pswdInput.onclick=clearField;

  function clearField(){
    this.value="";
  }

});
