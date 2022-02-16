document.getElementById('case-plus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-input');
    const caseInputValue = caseInput.value;
    caseInput.value = parseInt(caseInputValue) + 1;
})
document.getElementById('case-minus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-input');
    if (caseInput.value >= 1) {
        const caseInputValue = caseInput.value;
        caseInput.value = parseInt(caseInputValue) - 1;
    }
})