console.log("**using promise**")
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
let checkGender = (data) =>{
    return new Promise((resolve,reject)=> {
    
    if(data.gender === "Male"){
      data.lname = "Mohan"
        resolve(data)
    }
    
})
}



const datas = [
    {name:"Ravi",
    DOB : "25/08/1992",
    gender : "Male",
    },
    {name:"Janu",
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
  check(datas[keys])
   .then((data) => {console.log(`${data.name} age is ${data.age}`);
    return data;
     })
  .then((data) => {
      checkGender(data)
      .then((data) => console.log(`${data.name} ${data.lname}  is ${data.gender}`))    
  })
        
      .catch((msg)=> console.log(`${msg.name} age is below 20`))
}