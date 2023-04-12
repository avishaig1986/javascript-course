async function loadFile(){
    let fileLoaded = true;

    if(fileLoaded){
        return "File Loaded";
    }
    else{
        throw "File not loaded";
    }
}

async function locateFile(){
    let fileLoaded = true;

    if(fileLoaded){
        return "File Loaded";
    }
    else{
        throw "File not loaded";
    }
}

async function closeFile(){
    let fileLoaded = true;

    if(fileLoaded){
        return "File Loaded";
    }
    else{
        throw "File not loaded";
    }
}

async function startProcess(){
    try{
        let loadFileMessage = await loadFile();
        console.log(loadFileMessage)

        let locateFileMessage = await locateFile();
        console.log(locateFileMessage)

        let closeFileMessage = await closeFile();
        console.log(closeFileMessage)
    }
    catch(error) {
        console.log(error);
        
    }
}

startProcess()




