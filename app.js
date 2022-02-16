function updateCase(product, isIncreasing, price) {
    const caseInput = document.getElementById(product + '-input');
    let caseInputValue = caseInput.value;
    if (isIncreasing == true) {
        caseInputValue = parseInt(caseInputValue) + 1;
    }
    else if (isIncreasing == false && caseInput.value > 0) {
        caseInputValue = parseInt(caseInputValue) - 1;
    }
    caseInput.value = caseInputValue;
    const caseNumber = document.getElementById(product + '-number')
    caseNumber.innerText = caseInputValue * price;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    updateCase(phone, true, 1219);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateCase(phone, false, 1219);
})

document.getElementById('case-plus').addEventListener('click', function () {
    updateCase(case, true, 59);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateCase(case, false, 59);
})