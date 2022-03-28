


function updateBalance(extraProductCost, price, isConfig) {
    let extraProuctCost = document.getElementById(extraProductCost);
    let extraProductCostText = extraProuctCost.innerText;
    let extraProductCostNumber = parseInt(extraProductCostText);

    let basePrice = document.getElementById('basePrice');
    let basePriceText = basePrice.innerText;
    let basePriceNumber = parseInt(basePriceText);

    let totalPrice = document.getElementById('totalPrice');
    let totalPriceText = totalPrice.innerText;
    let totalPriceNumber = parseInt(totalPriceText);


    let finalPrice = document.getElementById('finalPrice');
    let finalPriceText = finalPrice.innerText;
    let finalPriceNumber = parseInt(finalPriceText);

    if (extraProuctCost.innerText == 0 && isConfig == true) {
        extraProuctCost.innerText = extraProductCostNumber + price;

        totalPrice.innerText = totalPriceNumber + price;
        finalPrice.innerText = finalPriceNumber + price;
    }

    else if (extraProuctCost.innerText > 0 && isConfig == false) {
        extraProuctCost.innerText = extraProductCostNumber - price;

        totalPrice.innerText = totalPriceNumber - price;
        finalPrice.innerText = finalPriceNumber - price;




    }

}






document.getElementById('8Gb-memory-product').addEventListener('click', function () {




    updateBalance('extraMemoryCost', 180, false);

})
document.getElementById('16Gb-memory-product').addEventListener('click', function () {


    updateBalance('extraMemoryCost', 180, true);


})


document.getElementById('256Gb-storage-product').addEventListener('click', function () {
    updateBalance('extraStorageCost', 100, false);

})
document.getElementById('512Gb-storage-product').addEventListener('click', function () {
    updateBalance('extraStorageCost', 100, true);
    calculateTotal();
})
document.getElementById('1TB-storage-product').addEventListener('click', function () {
    updateBalance('extraStorageCost', 180, true);
    calculateTotal();
})

document.getElementById('late-delivery-product').addEventListener('click', function () {
    updateBalance('extraDeliveryCost', 20, false);
    calculateTotal();
})
document.getElementById('fast-delivery-product').addEventListener('click', function () {
    updateBalance('extraDeliveryCost', 20, true);

})
