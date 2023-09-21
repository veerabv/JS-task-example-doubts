function makeRequest(service){
    return new Promise((resolve, reject) =>{
        console.log("request started");
        if(service === "google"){
            resolve("Google says Hi !!");
        }
        else{
            reject('we can  talk to only google');
        }
    })
}

function processResponse(res){
    return new Promise((resolve, reject) =>{
        console.log("processing response");
        resolve(`ExtraInfo + ${res}`)
    })
    
}
// ****using promise
// makeRequest("google")
// .then(res =>{
//     console.log("response Received");
//     return processResponse(res)
// })
// .then(res => {
//     console.log(res)
// })
// .catch((err) => console.log(err))

// upto this promise ****

// convert the promise chaining to async await


// *** using async await
async function doWork(){
    try{
    const res = await makeRequest("google");
    console.log('response Received');
    const processedRes = await processResponse(res);
    console.log(processedRes);
    }
    catch(err){
        console.log(err)
    }
}
doWork()

//upto this async await***