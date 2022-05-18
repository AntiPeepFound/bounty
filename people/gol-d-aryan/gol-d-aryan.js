var bounty = "0";

function pageColor() {
    document.getElementById('bounty-amount').style.color = "red";
    setTimeout(function() {document.getElementById('bounty-amount').style.color = "black";}, 1300);
}

function updateBounty() {
    bounty = "99,999";
    document.getElementById("bounty-amount").innerHTML = " ";
    document.getElementById("bounty-amount").innerHTML = bounty + " Monberry";

    if (bounty.length > 15) {
        document.querySelector("#wanted").innerHTML = "Wanted: Medium";
        document.querySelector("#wanted").style.color = "orange";
    }

    if (bounty.length > 40) {
        document.querySelector("#wanted").innerHTML = "Wanted: High";
        document.querySelector("#wanted").style.color = "red";
        pageColor();
    }

    if (bounty.length > 70) {
        document.querySelector("#bounty-loading-alert-text").innerHTML = "We are currently experiencing high system stress trying to load this bounty.<br> We are sorry for any inconvience caused.";
        pageColor();
    }
}

setTimeout(updateBounty, 1000);

