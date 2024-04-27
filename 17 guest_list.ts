


 let guest_list :string[] = ['Eshal','anisa','aqsa'] ;

// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Ms,' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_Guest :string = 'Eshal' ;
let new_Guest :string = 'kamran Tessori' ;
guest_list[0] = new_Guest ;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Ms,' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
console.log(`Ms. ${absent_Guest} is not coming to the party.`) ;
console.log('Good News! we find Big Table So we are invite 3 more guests.')

// arry mae 3 guest add kiye hai.
guest_list.unshift('sir zia khan') ;
guest_list.splice(2, 0, 'heena') ;
guest_list.push('hoorain') ;

// yahn par mane 6 guest k arry lo print krwaya hai.
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Ms,' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
// sorry guest for not invited .

console.log('\nSorry we can not arrang big table ,only two people will be invite.') ;

// yahn par mane guest remove kiye hai.
while(guest_list.length >  2){

    let remove_guest = guest_list.pop() ;
    console.log(`sorry Ms. ${remove_guest}, you are not invite for Dinner.`) ;
}

// hamare bachy huwe 2 invited guest.
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Ms,' + guest_list[i] + ',\n\nyou are still invited.\n\nThank You!\n\n');

}

//mae ne sare guest arry se remove krdeye.
guest_list.splice(0, 2) ;
console.log(guest_list) ;

