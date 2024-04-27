
// Equlity and Inequlity Test. 1
console.log("Equlity test with string: " ,"Apple" === "Apple");
// Equlity and Inequlity Test. 2
console.log("inequlity test with string: " ,( "Apple" as string) != "Orange");

//Test using the lower case function 3
console.log("lower Case function test: " , "HELLO". toLowerCase() === "hello")

//Numarical tests involving equlity and inequlity 4 
console.log("Equlity test with number:", 26 === 26);
//Numarical tests involving  inequlity 4 
console.log("Inequlity test with number:", (26 as number) != 35);



// greater than test
console.log("Greater than test: ", 10 > 5);
// less than test
console.log("less than test: ", 5 < 10);

//greater than  or equal to 
console.log("Greater than and equal to test: ",10 >=10 );
// less than or equal to 
console.log("Less thanor equal to test: ",5 <= 10);

//Tests using "and" operator
console.log("And operator test: ",5===5 && 10 > 5);
//Tests using  "or" operator
console.log("or operator test: ",5===5 || false);

// Test whether an item is in a array
const fruits :string[] = ["nashpati", "banana", "amrood"];
console.log('test "nashpati" in the array: ', fruits.includes("nashpati")); 
// Test whether an item is not in a array
console.log('testing "Aplle" is not in array:' ,!fruits.includes('Aplle'));

