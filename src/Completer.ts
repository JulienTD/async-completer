/**
 * Completer
 * @description Add possibility to create promises and to complete them when we want.
 * @export
 * @class Completer
 * @template T
 */
export default class Completer<T> {
    /**
     * _promise
     * @description The promise handled by this completer
     * @private
     * @type {(Promise<T | undefined>)}
     * @memberof Completer
     */
    private _promise: Promise<T | undefined>;
    /**
     * _isCompleted
     * @description If the promise is completed
     * @private
     * @type {boolean}
     * @memberof Completer
     */
    private _isCompleted: boolean;

    /**
     * resolveFunction
     * @description Callback to resolve the promise
     * @private
     * @memberof Completer
     */
    private resolveFunction!: (value?: T | PromiseLike<T>) => void;
    /**
     * rejectFunction
     * @description Callback to reject the promise
     * @private
     * @memberof Completer
     */
    private rejectFunction!: (reason?: any) => void;

    /**
     * Creates an instance of Completer.
     * @memberof Completer
     */
    constructor() {
        this._isCompleted = false;
        this._promise = new Promise((
            resolve: (value?: T | PromiseLike<T>) => void,
            reject: (reason?: any) => void) => {
            this.resolveFunction = resolve;
            this.rejectFunction = reject;
        });
    }

    /**
     * promise
     * @description The promise handled by this completer
     * @readonly
     * @memberof Completer
     */
    get promise() {
        return this._promise;
    }

    /**
     * isCompleted
     * @description If the promise is completed
     * @readonly
     * @memberof Completer
     */
    get isCompleted() {
        return this._isCompleted;
    }

    /**
     * complete
     * @description Completes promise with provided result
     * @param {(T | PromiseLike<T>)} [result]
     * @memberof Completer
     */
    public complete(result?: T | PromiseLike<T>): void {
        if (this._isCompleted)
            return;
        this._isCompleted = true;
        this.resolveFunction(result);
    }

    /**
     * completeError
     * @description Completes promise with an error
     * @param {object} error
     * @memberof Completer
     */
    public completeError(error?: object): void {
        if (this._isCompleted)
            return;
        this._isCompleted = true;
        this.rejectFunction(error);
    }
}
