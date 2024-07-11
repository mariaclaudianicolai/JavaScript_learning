console.log("Hello World!");

function myLog(par) {
    if (typeof par === "function")
        par("Ciao Claudia")
}

myLog(console.log)
myLog(cons => console.log(cons)) //simulate a promise