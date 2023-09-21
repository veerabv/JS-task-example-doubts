// console.log(globalVar)  // it is declared in "globalscope" file so it is accessed here also but we don't want this in this file
                        //we have to link the "globalscope" file in html file also .

import { exportedVar } from "./modulescope.js";
console.log(exportedVar);


function test(){
    const a = 5;
    if(true){
        var b=10;
    }
    console.log(a,b)
}
test()


function log(){
    console.log(value)
  }
  
  let value = 1
  log()