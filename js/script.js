//Data collection
const userAge = parseInt(prompt("quanti anni hai?"));
const userKilometers = parseInt(prompt("Quanti kilometri devi percorrere?"));

//variable definition
const euroPerKm = 0.21;
const childDiscount = 0.2;
const elderDiscount = 0.4;
let msg = "Oh oh, hai rotto qualcosa... adesso il Dev si arrabbierà molto!";

//price calc
let price = userKilometers * euroPerKm;

if (userAge < 18){ 
    price -= (price * childDiscount);
    msg = `Per la tua giovane età, pagherai solamente ${price} &euro;`;
}
if (userAge > 65){
    price -= (price * elderDiscount);
    msg = `Per gli over65, il prezzo è di solamente ${price} &euro;`;
}

//output
document.getElementById("ticket").innerHTML = msg;
console.log(price.toFixed(2));
