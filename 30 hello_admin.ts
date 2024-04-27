

const userNames:  string[] = ["admin" , "bunny" , "daffy duck" , "sylvester " , "tweety"];

// for(let i=0; i<userNames.length; i++)
//     {
//     if(userNames[i] === "admin"){
//         console.log("Hello admin, would you like to see a status report?");
//     }
//     else{
        // console.log(`Hello ${userName[i]} , thank you for logging in again`) 


//     }
// } 
userNames.forEach(userName => {
    if(userName === "admin"){
        console.log("Hello admin, would you like to see a status report? ");
    }
    else{
        console.log(`Hello ${userName}, thank you for logging in again`);
    }
})