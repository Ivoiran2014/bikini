// Realm
import * as Realm from '../realm-web';

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


async function createData(){
    // Realm conneciton
    const app = new Realm.App({ id: "thenewusers-utfvj" });
    const credentials = Realm.Credentials.anonymous();
    try {
        const login = await app.logIn(credentials);
        const response = await login.functions.insertNewUser(user);
        console.log(response);
    } catch(err) {
        console.error("Failed to log in", err);
    }
}

