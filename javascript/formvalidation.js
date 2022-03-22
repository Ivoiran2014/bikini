// Form submission
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.input');
const errorElement = document.getElementById('error');
const email = document.getElementById('email');
const payButton = document.getElementById('payButton');

// Email address validation
const validateEmail = (mail) => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.match(mailformat)){
      // alert("Valid email address!");
      // document.form1.text1.focus();
      return true;
    }
    else{
      alert("You have entered an invalid email address!");
      // document.form1.text1.focus();
      return false;
    }
}

let tofill = false;

payButton.addEventListener('click',(e) => {
    let messages = [];
    inputs.forEach((userInput)  => {
      if(userInput.value ==='' || userInput.value == null){
        tofill = true;
      }
    });

    if(tofill){
      alert('Please fill all the required information');
      tofill = false;
    }

    if(messages> 0 || !validateEmail(email.value)){
      e.preventDefault();
    }

  })


