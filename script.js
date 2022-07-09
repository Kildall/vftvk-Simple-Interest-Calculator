function compute()
{
    let amount = parseFloat(document.getElementById("amount").value);
    if(Number.isNaN(amount) || amount < 1){
        alert('Enter a positive number!');
        document.getElementById("amount").focus();
        return;
    }
    let interest = parseInt(document.getElementById("rate").value);
    let years = parseInt(document.getElementById("years").value);

    let interestAmount = amount * (interest/100) * years;
    let yearReceived = new Date().getFullYear() + years;
    
    document.getElementById("results").style.display = "block";
    document.getElementById("deposit").textContent = amount;
    document.getElementById("interest").textContent = interest;
    document.getElementById("amountReceived").textContent = amount + interestAmount;
    document.getElementById("year").textContent = yearReceived;
}

function changeValue(){
    document.getElementById("rateValue").textContent = document.getElementById("rate").value.toString();
}
        