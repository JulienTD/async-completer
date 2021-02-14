/**
 * Completer
 * @description Create a promise with the possibility to complete it later.
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
    private _promise;
    /**
     * _isCompleted
     * @description If the promise is completed
     * @private
     * @type {boolean}
     * @memberof Completer
     */
    private _isCompleted;
    /**
     * resolveFunction
     * @description Callback to resolve the promise
     * @private
     * @memberof Completer
     */
    private resolveFunction;
    /**
     * rejectFunction
     * @description Callback to reject the promise
     * @private
     * @memberof Completer
     */
    private rejectFunction;
    /**
     * Creates an instance of Completer.
     * @memberof Completer
     */
    constructor();
    /**
     * promise
     * @description The promise handled by this completer
     * @readonly
     * @memberof Completer
     */
    get promise(): Promise<T | undefined>;
    /**
     * isCompleted
     * @description If the promise is completed
     * @readonly
     * @memberof Completer
     */
    get isCompleted(): boolean;
    /**
     * complete
     * @description Completes promise with provided result
     * @param {(T | PromiseLike<T>)} [result]
     * @memberof Completer
     */
    complete(result?: T | PromiseLike<T>): void;
    /**
     * completeError
     * @description Completes promise with an error
     * @param {object} error
     * @memberof Completer
     */
    completeError(error?: object): void;
}
