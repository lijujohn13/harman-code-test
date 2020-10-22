/**
   * validates the dollar input field to be not empty and to conatin only two decimal numbers
   * @param {number} isSubmit
*/
function validateDollarInput(isSubmit = false){
    const input = document.getElementById('dollar-input');
    const regex  = /^(\d+)(\.\d{2})?$/;

    if (regex.test(input.value)) {
        input.classList.remove("hct-input-error");
    } else {
        input.classList.add("hct-input-error");
        if (isSubmit) {
            if (!input.value) {
                alert('Please specify the amount');
                return;
            }
            alert('Amount should contain exactly 2 decimals or no decimals');
        }
    }
}