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



async function loadFile(){
    let fileLoaded = true;

    if(fileLoaded){
        return "File Loaded";
    }
    else{
        throw "File not loaded";
    }
}



loadFile().then(value => console.log(value))
      .catch(error => console.log(error));

