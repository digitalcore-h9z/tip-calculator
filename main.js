function calculation() {
    let price = Number(document.getElementById("price").value);
    let tip = Number(document.getElementById("tip").value);
    let priceTip = (tip / 100) * price;
    document.getElementById("priceTip").textContent = "Pret Bacsis: " + priceTip;
    let total = price + priceTip;
    document.getElementById("total-p").textContent = "Total: " + total;
}

function reset() {
    document.getElementById("price").value = "";
    document.getElementById("tip").value = "";
    document.getElementById("priceTip").textContent = "Pret Bacsis: ";
    document.getElementById("total-p").textContent = "Total: ";
}
