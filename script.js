function compute()
{
    let amount = parseFloat(document.getElementById("amount").value);
    let interest = parseFloat(document.getElementById("rate").value);
    let years = parseInt(document.getElementById("years").value);

    let resultAmount = amount * Math.pow(1+(interest/100), years);
    let yearReceived = new Date().getFullYear() + years;
    
    document.getElementById("results").style.display = "block";
    document.getElementById("deposit").textContent = amount;
    document.getElementById("interest").textContent = interest;
    document.getElementById("amountReceived").textContent = parseInt(resultAmount);
    document.getElementById("year").textContent = yearReceived;
    debugger;
}

function changeValue(){
    document.getElementById("rateValue").textContent = document.getElementById("rate").value.toString();
}
        