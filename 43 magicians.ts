
let magician: string[] = ["Harry potter", "Hernione Granger", "Ron weasley", "Albus Dumbledore "];

function copyArray(arr: string[]){
return [...arr]
}


function make_great (magicianarray: string[]){

    for(let i=0; i<magicianarray.length; i++){

      magicianarray [i] = "The great "  +  magicianarray[i]
    }
}


function show_magicians(magicians: string[]){

    magicians.forEach(element => {

        console.log(element);
        
    });
}
const copymagicianArray = copyArray(magician)

make_great(copymagicianArray);
console.log("\n\nThis is my orignal array")
show_magicians(magician)


console.log("\n\nThis i my modified copy of the array")
show_magicians(copymagicianArray);



