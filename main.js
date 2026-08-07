function calculation() {
    let price = Number(document.getElementById("price").value);
    let tip = Number(document.getElementById("tip").value);
    let PriceTip = (tip / 100) * price;
    document.getElementById("priceTip").textContent = "Pret bacsis: " + PriceTip;
    let total = price + PriceTip;
    document.getElementById("total-p").textContent = "Total: " + total;
}

function reset() {
    Number((document.getElementById("price").value = ""));
    Number((document.getElementById("tip").value = ""));
    document.getElementById("priceTip").textContent = "Pret bacsis: ";
    document.getElementById("total-p").textContent = "Total";
}
