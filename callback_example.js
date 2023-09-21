const userLeft = true;
const userWatchingTv = false;
function watchVideo(callback , errorCallback){
    if(userLeft){
        errorCallback({
            name : "userLeft",
            message : "Disappointed",
        })
    }
    else if(userWatchingTv){
        errorCallback({
            name : "userWatchingTv",
            message : "TV > Youtube"
        })
    }
    else{
        callback('ThumbsUp and subscribe')
    }
}

watchVideo((message) =>{
    console.log("success " + message)
},(error) =>{
    console.log(error.name + " " + error.message)
})