//updating the total text function
function updateTotal() {
    const inputPhone = document.getElementById('phone-input').value;
    const inputCase = document.getElementById('case-input').value;
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = parseFloat(inputPhone) * 1219 + parseFloat(inputCase) * 59;
}

//increase decrease function
function updateProduct(product, isIncreasing, price) {
    const productInput = document.getElementById(product + '-input');
    let productInputValue = productInput.value;
    if (isIncreasing == true) {
        productInputValue = parseInt(productInputValue) + 1;
    }
    else if (isIncreasing == false && productInput.value > 0) {
        productInputValue = parseInt(productInputValue) - 1;
    }
    productInput.value = productInputValue;
    const productNumber = document.getElementById(product + '-number')
    productNumber.innerText = productInputValue * price;
    updateTotal()
}
//updating increase decrease in phone
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProduct("phone", true, 1219);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProduct("phone", false, 1219);
})
//updating increase decrease in case
document.getElementById('case-plus').addEventListener('click', function () {
    updateProduct('case', true, 59);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProduct('case', false, 59);
})