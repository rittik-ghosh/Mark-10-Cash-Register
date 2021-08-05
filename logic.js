var amountToPay = document.querySelector("#amountToPay");
var amountPaid = document.querySelector("#amountPaid");
var nextBtn = document.querySelectorAll(".btn");
var checkBtn = document.querySelectorAll(".btn");
var billAmountValidationText = document.querySelector(".billAmountValidation");
var paidAmountValidationText = document.querySelector(".paidAmountValidation");
var amountLeft;
var twoThousand;
var fiveHundred;
var hundred;
var twenty;
var ten;
var five;
var one;

checkBtn[0].addEventListener('click', function () {
    billAmountValidationText.style.display="none";
       if (amountToPay.value <= 0) {
        billAmountValidationText.style.display="block";
        billAmountValidationText.innerHTML = "Enter a Valid Bill Amount.";
    }
});
checkBtn[1].addEventListener('click', function () {
    paidAmountValidationText.style.display="none";
    console.log(amountPaid.value);
    console.log(amountToPay.value);
    if ((amountPaid.value < 0 || amountToPay.value <= 0)) {
        paidAmountValidationText.style.display="block";
        paidAmountValidationText.innerHTML = "Enter a valid Cash Amount.";
    } 
    else if ((amountPaid.value-amountToPay.value)<0) {
        paidAmountValidationText.style.display="block";
        console.log(amountToPay.value-amountPaid.value);
        paidAmountValidationText.innerHTML = "Cash is less than bill, please enter right amount.";
    }

     else if (amountPaid.value === amountToPay.value) {
        paidAmountValidationText.style.display="block";
        paidAmountValidationText.innerHTML = "No Cash is to be returned.";
    } 
    else if((amountPaid.value-amountToPay.value)>0) {
        var amountLeft = (amountPaid.value - amountToPay.value);
        while (amountLeft > 0) {
            twoThousand = parseInt(amountLeft / 2000);
            amountLeft = amountLeft - twoThousand * 2000;
            fiveHundred = parseInt(amountLeft / 500);
            amountLeft = amountLeft - fiveHundred * 500;
            hundred = parseInt(amountLeft / 100);
            amountLeft = amountLeft - hundred * 100;
            twenty = parseInt(amountLeft / 20);
            amountLeft = amountLeft - twenty * 20;
            ten = parseInt(amountLeft / 10);
            amountLeft = amountLeft - ten * 10;
            five = parseInt(amountLeft / 5);
            amountLeft = amountLeft - five * 5;
            one = parseInt(amountLeft / 1);
            amountLeft = amountLeft - 1 * one;
        };
        var notes = document.querySelectorAll(".notes");
        
        notes[0].innerHTML = Math.floor(twoThousand);
        notes[1].innerHTML = Math.floor(fiveHundred);
        notes[2].innerHTML = Math.floor(hundred);
        notes[3].innerHTML = Math.floor(twenty);
        notes[4].innerHTML = Math.floor(ten);
        notes[5].innerHTML = Math.floor(five);
        notes[6].innerHTML = Math.floor(one);
    };
});