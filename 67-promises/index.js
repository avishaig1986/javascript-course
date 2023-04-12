const promiseResolveReject = new Promise((resolve, reject) => {
    let fileLoaded = false;

    if(fileLoaded){
        resolve("File Loaded");
    }
    else{
        reject("File not loaded")
    }

});

promiseResolveReject.then(value => console.log(value))
      .catch(error => console.log(error));



const promiseNoReject = new Promise((resolve) => {
let fileLoaded = true;

    if(fileLoaded){
        resolve("File Loaded no reject");
    }

});

promiseNoReject.then(value => console.log(value))



const wait = time => new Promise(resolve => {
    setTimeout(resolve, time)
});

wait(3000).then(() => console.log("thanks for waiting"))



