document.getElementById("myButton").onclick = function() {

    const myCheckBox = document.getElementById("myCheckBox")
    const visaBtn = document.getElementById("visaBtn");
    const masterCardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    function updateResult(result){
        document.getElementById("subscribeResult").innerHTML=`${result}`

    }

    function updatePaymet(result){
        document.getElementById("paymentResult").innerHTML=`${result}`

    }

    if(myCheckBox.checked){
        console.log("you are subscribed")
        updateResult("you are subscribed")
    }
    
    else{
        console.log("you are not subscribed")
        updateResult("you are not subscribed")
    }

    if (visaBtn.checked){
        console.log("you are paying with visa")
        updatePaymet("you are paying with visa")
    }

    else if(masterCardBtn.checked){
        console.log("you are paying with mastercard")
        updatePaymet("you are paying with mastercard")
    }

    else if(paypalBtn.checked){
        console.log("paying with payapl")
        updatePaymet("paying with payapl")
    }

    else {
        console.log("you must select a payment type")
        updatePaymet("you must select a payment type")
    }

}