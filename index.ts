#!/usr/bin/env node
import promptSync from "prompt-sync"
const prompt =promptSync();


let marks:number = parseInt(prompt('Enter Marks To Get Result :'));

let result:string = "";
if(marks >= 80 && marks <= 99){
   console.log("Your Grade Is 'A'");
    
}
else if(marks >= 70 && marks <= 80)
{console.log("Yor Grade is 'B'");
}
    else if(marks >= 55 && marks <= 70){
        console.log("Your Grade Is 'C'");
    }
    
    else if(marks >= 40 && marks <= 55){
        console.log("Your Grade Is 'D'");
    }

    else if(marks >= 15 && marks <= 40){
        console.log("'You Are Fail'");
    }
    else{console.log("Sorry");
    }
    console.log(result);
    

    



