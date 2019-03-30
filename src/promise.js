export default class ItsAPromise {
    constructor(runner) {
        //runner is initial version of promise
        this.callbacks = [];
        this._resolve = this._resolve.bind(this);

        runner(this._resolve);

    }

    _resolve(value) {
        if (this.callbacks.length > 0) {
            const callback = this.callbacks.shift();
            var newValue = callback(value);
            this._resolve(newValue);
        }
    }

    then(callback) {
        this.callbacks.push(callback);
        return this;
    }
}