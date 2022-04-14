let counter = "0";
fetch('sathvik.json').then(response => response.json()).then(data => {counter = data.counter})

var counterJSON = {
    "counter": counter
}

setInterval(increaseCounter(), 1000);

function increaseCounter() {
    counter = counter + "999999999999";
    counterJSON = { 
        "counter": counter,
    };
    document.getElementById('bounty-amount').innerHTML = counter + " Mon Berry"
}

let data = JSON.stringify(counterJSON);
