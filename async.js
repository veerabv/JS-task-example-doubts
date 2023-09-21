// eg1
const p1 = new Promise((res,_) =>{
    setTimeout(() =>{
        res("PRV")
    },10*1000)
})
async function a(){
    // p1.then((val) =>console.log(val))
    let val = await p1
    console.log(val)
    console.log("hi")
}
a()


// eg2

// const p1 = new Promise((res,rej) =>{
//     setTimeout(() =>{
//         res("PRV")
//     },10*1000)
// })
// const p2 = new Promise((res,rej) =>{
//     setTimeout(() =>{
//         res("PRV2")
//     },5*1000)
// })

// async function a(){
//     let val = await p1
//     console.log(val)
//     console.log("hi")

//     let val1 = await p2
//     console.log(val1)
//     console.log("hi1")
// }
// a()


// eg 3  p1 with less time and p2 with more time
// const p1 = new Promise((res,rej) =>{
//     setTimeout(() =>{
//         res("PRV")
//     },5*1000)
// })
// const p2 = new Promise((res,rej) =>{
//     setTimeout(() =>{
//         res("PRV2")
//     },10*1000)
// })

// async function a(){
//     let val = await p1
//     console.log(val)
//     console.log("hi")

//     let val1 = await p2
//     console.log(val1)
//     console.log("hi1")
// }
// a()
