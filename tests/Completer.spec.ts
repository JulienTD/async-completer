import Completer from '../lib/Completer';

describe("Completer test", () => {
    test("Completer resolving with a return value", async () => {
        const COMPLETER_RESULT = 42;
        const completer = new Completer<number>();

        completer.complete(COMPLETER_RESULT);
        expect(completer.promise).resolves.toEqual(COMPLETER_RESULT);
    });

    test("Completer resolving without a return value", async () => {
        const completer = new Completer<number>();

        completer.complete();
        expect(completer.promise).resolves.toBeUndefined();
    });

    test("Completer rejecting with an error", async () => {
        const COMPLETER_RESULT = new Error("foobar")
        const completer = new Completer<number>();

        completer.completeError(COMPLETER_RESULT);
        expect(completer.promise).rejects.toMatchObject(COMPLETER_RESULT);
    });

    test("Completer rejecting without error", async () => {
        const completer = new Completer<number>();

        completer.completeError();
        expect(completer.promise).rejects.toBeUndefined();
    });

    test("Variable isCompleted", async () => {
        const completer = new Completer<number>();

        expect(completer.isCompleted).toEqual(false);
        completer.complete();
        await completer.promise;
        expect(completer.isCompleted).toEqual(true);
    });
});
