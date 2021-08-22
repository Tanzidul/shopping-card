function updateProductNumber(product, isIncreasing, price) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // upadte case total price
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price
    // calculateTotal
    calculateTotal()
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tex = subTotal / 10;
    const totalPrice = subTotal + tex;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tex-amount').innerText = tex;
    document.getElementById('total-price').innerText = totalPrice;
}


//handle phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', true, 1219)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', false, 1219)
})

//handle case increase decrease event
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', true, 59)
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', false, 59)
})
//handle case increase decrease even