// Realm
// import Realm from '../realm-web';

// CC Info
const firstName = document.getElementById('firstName');
const secondName = document.getElementById('secondName');
const password = document.getElementById('password');
const country = document.getElementById('country');
const city = document.getElementById('city');
const address = document.getElementById('address');
const phoneNumber = document.getElementById('phoneNumber');
const cardExpiry = document.getElementById('cardExpiry');
const cardCcv = document.getElementById('cardCcv');


const cardNumber = document.getElementById('cardNumber');
const payButton = document.getElementById('payButton');

const luhnCheck = (val) => {
    let sum = 0;
    for (let i = 0; i < val.length; i++) {
        let intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
  }
  
  const validateCardNumber = (number) => {
    let regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;
  
    return luhnCheck(number);
  }

  async function createData(user){
    // Realm conneciton
    const app = new Realm.App({ id: "thenewusers-utfvj" });
    const credentials = Realm.Credentials.anonymous();
    try {
        const login = await app.logIn(credentials);
        await login.functions.insertNewUser(user);
    } catch(err) {
        console.error("Failed to log in", err);
    }
}
  
  payButton.addEventListener('click',async () => {
    const actualCardNumber = parseInt((cardNumber.value).replace(/-/g, ''));
    if(validateCardNumber(actualCardNumber)){
      // alert('You pay!');
      // Send the info 
      const user ={
        name : firstName.value  + ' '+ secondName.value,
        email : email.value,
        password :password.value,
        country:country.value,
        city:city.value,
        address:address.value,
        phoneNumber:phoneNumber.value,
        cardNumber:cardNumber.value,
        expiryDate:cardExpiry.value,
        cardSecurity:cardCcv.value
    };
      await createData(user).then(() => {
        window.location.href = "/done.html";
      });
      // Redirect user to the payment page
      
  
    }else{
      alert('card number is not valid');
      // Keep the user on the page until he enter correct information
  
    }
  })