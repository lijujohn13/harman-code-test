/**
   * validates input fields in the signup form - adds or removes error classes to the input fields
   * @param {Element} field
*/
function validateInput(field){
    const isEmpty = isFieldEmpty(field);
    addOrRemoveErrorClass(field, isEmpty);
    if (isEmpty) {
        return;
    }

    if (field.type === 'email') {
        addOrRemoveErrorClass(field, isNotValidEmail(field.value));
    }
}

/**
   * validates the email value
   * @param {string} value
   * @return {boolean}
*/
function isNotValidEmail(value) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailRegex.test(value)){
        return false;
    }
    return true;
}

/**
   * checks whether a field is empty or not
   * @param {Element} field
   * @return {boolean}
*/
function isFieldEmpty(field) {
    const fieldData = field.value;
    if (!fieldData) {
        return true;
    }

    return false;
}

/**
   * adds or removes error classes from input field
   * @param {Element} field
   * @param {boolean} hasError
*/
function addOrRemoveErrorClass(field, hasError) {
    if (hasError) {
        field.classList.add("hct-input-error");
        return;
    }
    field.classList.remove("hct-input-error");
}