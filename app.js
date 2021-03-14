document.getElementById("billAmt").addEventListener('keyup', function(){

    calc();

});

document.getElementById("tipPercentage").addEventListener('change', function(){

    calc();

});

function calc() {
    
    const billAmount = Number(document.getElementById("billAmt").value);
    const tipPercentage = Number(document.getElementById("tipPercentage").value);
    
    var tipAmount = billAmount * tipPercentage;
    var total = billAmount + Number(tipAmount);

    if (isNaN(billAmount)) {
        document.getElementById("tipAmt").value = "0.00";
        document.getElementById("total").value = "0.00";
    } else {
        document.getElementById("tipAmt").value = Number(tipAmount).toFixed(2);
        document.getElementById("total").value = Number(total).toFixed(2);
    }


    
    
    
}

