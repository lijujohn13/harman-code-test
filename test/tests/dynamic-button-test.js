/*** Test Cases ***/

global.app.test('createButtons function should return error message when count is passed as null or falsy value', function () {
   const err = global.app.createButtons(null);
   global.app.assert(err === 'Count has to be specified');
});

global.app.test('createButtons function should return error message when a non integer is passed as count', function () {
    const err = global.app.createButtons('5');
    global.app.assert(err === 'Count should be a number');
});

global.app.test('createButtons function should return error message when negative count is passed', function () {
    const err = global.app.createButtons(-2);
    global.app.assert(err === 'Count should be a positive number');
});

global.app.test('createButtons when called should add 5 buttons to the document', function () {
    global.app.createButtons();
    const selector = document.querySelector('#btn-container');
    global.app.assert(selector.childElementCount === 5);
});

global.app.test('node name of the first element inside the button container should be BUTTON', function () {
    const selector = document.querySelector('#btn-container');
    const firstButton = selector.firstChild;
    global.app.assert(firstButton.nodeName === 'BUTTON');
});

global.app.test('last button name should be Button 5', function () {
    const selector = document.querySelector('#btn-container');
    const lastButton = selector.lastChild;
    global.app.assert(lastButton.innerText === 'Button 5');
});