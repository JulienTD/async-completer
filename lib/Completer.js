"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Completer
 * @description Create a promise with the possibility to complete it later.
 * @export
 * @class Completer
 * @template T
 */
var Completer = /** @class */ (function () {
    /**
     * Creates an instance of Completer.
     * @memberof Completer
     */
    function Completer() {
        var _this = this;
        this._isCompleted = false;
        this._promise = new Promise(function (resolve, reject) {
            _this.resolveFunction = resolve;
            _this.rejectFunction = reject;
        });
    }
    Object.defineProperty(Completer.prototype, "promise", {
        /**
         * promise
         * @description The promise handled by this completer
         * @readonly
         * @memberof Completer
         */
        get: function () {
            return this._promise;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Completer.prototype, "isCompleted", {
        /**
         * isCompleted
         * @description If the promise is completed
         * @readonly
         * @memberof Completer
         */
        get: function () {
            return this._isCompleted;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * complete
     * @description Completes promise with provided result
     * @param {(T | PromiseLike<T>)} [result]
     * @memberof Completer
     */
    Completer.prototype.complete = function (result) {
        if (this._isCompleted)
            return;
        this._isCompleted = true;
        this.resolveFunction(result);
    };
    /**
     * completeError
     * @description Completes promise with an error
     * @param {object} error
     * @memberof Completer
     */
    Completer.prototype.completeError = function (error) {
        if (this._isCompleted)
            return;
        this._isCompleted = true;
        this.rejectFunction(error);
    };
    return Completer;
}());
exports.default = Completer;
