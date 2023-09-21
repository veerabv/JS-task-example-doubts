
//  Using promise
let check = (data) => {
    return new Promise((resolve,reject)=> {
    let currentAge = 2023 - data.DOB.split("/").map(Number)[2];
    if(currentAge > 20){
        data.age = currentAge;
        resolve(data)
    }
    else{
        reject(data)
    }
    })
}

// using callback
let verify = (data,callback,error) =>{
    let currentAge = 2023 - data.DOB.split("/").map(Number)[2];
     if(currentAge > 20){
        data.age = currentAge;
        callback(data);
     }
     else{
         error(data);
     }
    
}


const datas = [
    {name:"Ravi",
    DOB : "25/08/1992",
    gender : "Male",
    },
    {name:"Ramu",
    DOB : "25/08/1979",
    gender : "Female",
    },
    {name:"Raji",
    DOB : "25/08/1998",
    gender : "Male",
    },
    {name:"Raghu",
    DOB : "25/08/2020",
    gender : "Male",
    },
]


for(keys in datas){
    // for promise
    // check(datas[keys])
    // .then((data) => console.log(`${data.name} age is ${data.age}`))
    
    


    
    
    //  for callback
    verify(datas[keys],
     (data) =>{
        console.log(`${data.name} age is ${data.age}`);
        
                    
        },
       
        (error) =>{
            console.log(`${error.name} age is below 20` )
        
    })
}




// verify(datas[keys],
//     (data) =>{
//         if(data.gender !== "Female"){
//             verify(data,(data) =>{
//             console.log(`${data.name} age is ${data.age}`)
                
//             })
//         }
//         },
       
//         (error) =>{
//             console.log(`${error.name} age is below 20` )
        
//     })
// }


// yesterday cut code

// verify(data,(data) =>{
//     if(data.gender == "Male"){
// console.log(`${data.name}  is ${data.gender}`)
//     }
    
// })








// for loop task
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");
let input = 4 
//   for (i=1; i<=input ; i++){
//       var result = []
//       for(let j=0; j<i ; j++){
//           if(j%2 === 0){
//               result.push("*")
//           }
//           else{
//           result.push("0")
//           }
//       }
//       console.log(result.join(""))
//   }
//   eg-2
  for (i=input; i>=1 ; i--){
      var result = []
      for(j=0; j<i ; j++){
          if(j%2 === 0){
              result.push("*")
          }
          else{
          result.push("0")
          }
      }
      console.log(result.join(""))
  }