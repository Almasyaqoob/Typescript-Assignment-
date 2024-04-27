// write a program that creates objects containing these items.

//data type of person object
interface person {
    age : number,
    name :string,
    nationality :string,
    student : boolean
}
//person object
let preson :person = {
    age :30 ,
    name : 'Almas' ,
    nationality :'Pakistan' ,
    student : true
}
// print person
console.log(preson) ;

//data type of car object
interface car {
    maker :string,
    color :string,
    automatic : boolean
}
//car object
let car = {
    meker : 'toyota',
    color : 'black',
    automatic : true
}
// print car
console.log(car) ;

