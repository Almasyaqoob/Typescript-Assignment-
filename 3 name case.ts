let personname :string ='';
personname  = prompt('what is your name?') ||'';


let lowercase :string = personname.toLowerCase() ;
let uppercase :string = personname.toUpperCase() ;
let titlecase :string = personname.split(' ').map(word => word.charAt(0).toUpperCase() + word.toLowerCase()).join(' ')

if(personname !== null && personname !==''){
    alert(`Hello ${personname} , here are your name in:
        LowerCase: ${lowercase}
        UpperCase:${uppercase}
     TitleCase ${titlecase}`)
}
else{
    alert('please fill your name!')
}