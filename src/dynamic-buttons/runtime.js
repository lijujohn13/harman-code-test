function emptyFn () {};

var global = {};
global.app = {};

global.app.test = global.app.test || emptyFn;
global.app.assert = global.app.assert || emptyFn;
global.app.createButtons = global.app.createButtons || emptyFn;