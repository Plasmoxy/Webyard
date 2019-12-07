"use strict";
(async () => {
    let boolarr = [true, true, false];
    boolarr[1] = false;
    console.table(boolarr);
    const [a, b, c] = boolarr;
    console.table([a, b, c]);
    const X = [1, 2];
    const X2 = [1, 2, 3];
    console.log(X[0]);
})()
    .catch(console.log);
