var bounty = "999,999,";

function pageColor() {
    document.getElementById('bounty-amount').style.color = "red";
    setTimeout(function() {document.getElementById('bounty-amount').style.color = "black";}, 1000);
}

function updateBounty() {
    bounty += "999,999,";
    document.getElementById("bounty-amount").innerHTML = bounty + " Monberry";

    if (bounty.length-10 > 15) {
        document.querySelector("#wanted").innerHTML = "Wanted: Medium";
        document.querySelector("#wanted").style.color = "orange";
    }

    if (bounty.length-10 > 40) {
        document.querySelector("#wanted").innerHTML = "Wanted: High";
        document.querySelector("#wanted").style.color = "red";
        pageColor();
    }

    if (bounty.length-10 > 70) {
        document.querySelector("#bounty-loading-alert-text").innerHTML = "We are currently experiencing high system stress trying to load this bounty.<br> We are sorry for any inconvience caused.";
        pageColor();
    }
}

setInterval(updateBounty, 0500);