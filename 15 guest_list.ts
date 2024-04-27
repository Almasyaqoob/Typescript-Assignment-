


let guest_list :string[] = ['Eshal','anisa','aqsa'] ;

for(let i=0; i<guest_list.length; i++){
    console.log('Dear Ms,' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}


let absent_Guest :string = 'Eshal' ;

let new_Guest :string = 'kamran Tessori' ;
guest_list[0] = new_Guest ;

for(let i=0; i<guest_list.length; i++){
    console.log('Dear Ms,' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

console.log(`Ms. ${absent_Guest} is not coming to the party.`)
