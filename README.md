# async-completer

Add possibility to create promises and to complete them when we want.

## Installation

```bash
$ npm install async-completer
```

## Getting started

The usual use-case of `completer` is to transform a synchronous function with a callback into an async one.

In our example, we will create a synchronous function, and we'll add to it a `complete` object to transform it into an async one.

```typescript
const foo = ...
const completer = new Completer();

foo.bar((text: String) => {
    if (text === "example") {
        completer.complete("something");
    }
});

return completer.promise;
```

As you can see in this example, we transformed a function with a callback into an async one. It means that it will be easier to access the data we want in our program.