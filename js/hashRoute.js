'use stict';

function HashRoute({ name, htmlName, callback, defaultRoute }) {
    try {
        if(!name || !htmlName) {
            throw 'error: name and htmlName params are mandatories';
        }
        this.constructor(name, htmlName, callback, defaultRoute);
    } catch (e) {
        console.error(e);
    }
}

HashRoute.prototype = {
    name: undefined,
    htmlName: undefined,
    callback: undefined,
    default: undefined,
    constructor: function (name, htmlName, callback, defaultRoute) {
        this.name = name;
        this.htmlName = htmlName;
        this.callback = callback;
        this.default = defaultRoute;
    },
    isActiveRoute: function (hashedPath) {
        return hashedPath.replace('#', '') === this.name; 
    }
}