var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var discountCode = document.getElementById('discount_code1');

function decreaseNumber(incdec, itemprice, unitprice) {
var itemval = document.getElementById(incdec);
var itemprice = document.getElementById(itemprice);
var price = document.getElementById(unitprice);
console.log( itemprice.innerHTML);
// console.log(itemval.value);
if(itemval.value <= 0){
itemval.value = 0;
alert('Negative quantity not allowed');
}else{
itemval.value = parseInt(itemval.value) - 1;
itemval.style.background = '#fff';
itemval.style.color = '#000';
//prix de item = prix unitaire * quantité
itemprice.innerHTML  =  parseInt(price.innerHTML ) * itemval.value;

// product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) - parseInt(price.innerHTML);
// total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML) ;
totalPrice();
charge();
}
}

function increaseNumber(incdec, itemprice, unitprice) {
var itemval = document.getElementById(incdec);
var itemprice = document.getElementById(itemprice);
var price = document.getElementById(unitprice);
// console.log(itemval.value);
if(itemval.value >= 5) {
itemval.value = 5;
alert('max 5 allowed');
itemval.style.background = 'red';
itemval.style.color = '#fff';
}
else{
itemval.value = parseInt(itemval.value) + 1;
itemprice.innerHTML  =  parseInt(price.innerHTML ) * (itemval.value);
// product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(price.innerHTML);
// total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
totalPrice();
charge();
}
}

// function discount_code() {
// let totalamtcurr = parseInt(total_cart_amt.innerHTML);
// let error_trw = document.getElementById('error_trw');
// if(discountCode.value === 'tente'){
// let newtotalamt = totalamtcurr - 15;
// total_cart_amt.innerHTML = newtotalamt;
// error_trw.innerHTML = "Hurray! code is valid";
// }else{
// error_trw.innerHTML = "Try Again! Valid code is tente";
// }
// }

function totalPrice(){
    let sum = 0;
let prices = document.getElementsByClassName('prix');

for (let i = 0; i < prices.length; i++) {
    
    sum += parseInt(prices[i].innerHTML) ;
    
}

return (product_total_amt.innerHTML  = sum);

}
//shipping_charge
function charge() {
    if(parseInt(product_total_amt.innerHTML) != 0)
 return (total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML));   
    else
    return (total_cart_amt.innerHTML  = 0);
}

//btn like
var like = Array.from(document.getElementsByClassName('fa-heart'));
for(let btn of like){
    btn.addEventListener("click", function(){
        if(btn.style.color === "red")
        btn.style.color = "black";
        else
        btn.style.color = "red";
    });
}

//btn Remove
var remove = Array.from(document.getElementsByClassName('remove'));

for(let el of remove) {
   
    el.addEventListener("click", function() {
    var del = confirm("Are you sure to delete this item?");
    if(del == true){
        const parent = el.closest('.card');
        while (parent.firstChild) {
            parent.firstChild.remove();            
            }
    totalPrice();
    charge()
    }
   
    });
    
}

