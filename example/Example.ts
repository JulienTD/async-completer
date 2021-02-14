import Completer from 'async-completer';

async function foobar()  {
    const completer = new Completer();

    setTimeout(() => {
        completer.complete(42);
        console.log(`isCompleted: ${completer.isCompleted}`);

    }, 2000);

    console.log(`isCompleted: ${completer.isCompleted}`);
    return completer.promise;
}

async function main() {
    const result = await foobar();

    console.log("Result: " + result);
}

main();
