let current_users: string[] = ["AlMas" , "AqSa" , "HeEna" , "AniSa" , "EsHal"];

let new_users: string[] = ["Zeeshan" , "Burhan" , "AlMas" , "Rehan" , "AqSa"];

new_users.forEach(newUsername => {

    let lowercase: string = newUsername.toLowerCase();
    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)){
        console.log(`The username ${newUsername} is not available.please write a diffrent username`);

    }
    else{
        console.log(`The username ${newUsername} is available`);
    }

})