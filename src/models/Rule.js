const uuidV4  = require('uuid/v4');

export function Rule(options) {
    this.active = options.active;
    this.domain = options.domain || '';
    this.resourceType = options.resourceType || '';
    this.coerceWith = options.coerceWith;
    this.id = options.id || uuidV4();
}

Rule.prototype.isValid = function() {
    this.error = null;

    if(!this.domain) {
        this.error = 'Domain is blank';
        return false;
    }

    const coerceWith = eval(this.coerceWith);
    if(typeof coerceWith !== 'function' || coerceWith.length !== 1 ) {
        this.error = 'Coerce with is not a function or it\'s not receiving 1 arguments';
        return false
    }

    return !this.error;
};