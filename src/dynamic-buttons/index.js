/**
   * removes all child nodes from an element
   * @param {Element} parent
*/
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/**
   * creates buttons dynamically and attached event handlers to each button
   * @param {number} count
*/
function createButtons (count = 5) {
    /** we are returning error message purely for the test cases to work.
    ideally exceptions should be thrown **/
    if (!count) {
        return 'Count has to be specified';
    }

    if (!Number.isInteger(count)) {
        return 'Count should be a number';
    }

    if (count < 0) {
        return 'Count should be a positive number';
    }

    const buttonContainer = document.getElementById('btn-container');
    if (buttonContainer) {
        removeAllChildNodes(buttonContainer);
    }

    for(let idx=0; idx<count; idx++) {
        const button = document.createElement('button');
        const buttonName = 'Button ' + (idx + 1);
        button.appendChild(document.createTextNode(buttonName));
        button.style.marginRight = '10px';
        button.style.marginBottom = '10px';
        button.addEventListener('click', function() {
           console.log('Name: ' + buttonName + ', Index: ' + (idx + 1));
        }, false);
        
        if (buttonContainer) {
            buttonContainer.appendChild(button);
        } else {
            document.body.appendChild(button);
        }
    }
}

/**
   * handles the button creation from the UI
*/
function handleButtonCreation () {
    const countInput = document.getElementById('btn-count');
    if (!countInput) {
        throw new Error('Cannot find input with id: btn-count');
    }
    
    if (!validateInput(countInput, true)) {
        return;
    }

    createButtons(parseInt(countInput.value));
}

/**
   * validates the count input field
   * @param {Element} field
   * @param {boolean} isSubmit
*/
function validateInput (field, isSubmit = false) {
    const parsedValue = field.value && parseInt(field.value);

    if (!parsedValue) {
        field.classList.add("hct-input-error");
        if (isSubmit) {
            alert('Count has to be specified');
        }
        return false;
    }

    if (parsedValue < 0) {
        field.classList.add("hct-input-error");
        if (isSubmit) {
            alert('Count should be a positive number');
        }
        return false;
    }

    if (parsedValue > 50) {
        field.classList.add("hct-input-error");
        if (isSubmit) {
            alert('cannot input more than 50');
        }
        return false;
    }

    field.classList.remove("hct-input-error");
    return true;
}

global.app.createButtons = createButtons;