// store the arry .make sure the array is not in alphabatical order.

let places :string[] = ['Itly', 'Germany', 'Agra', 'Eifel ', 'Times Squer' ];

// print your array in its orignal order.
console.log('original ' + places);

//print your array in alphabatical order without modifying the actual list.
console.log('copy ' + [...places].sort());

// show that your array is still in its original order by printing it.
console.log('original ' + places) ;

// print your array in reverse alphabatical order without changing the order of the original list.
console.log('copy ' +  [...places].sort().reverse());

// show that your array is still in its original order by printing it again.
console.log('original ' + places);

//reverse the order of your list. print the array to show that its order has changed.
console.log('original ' + places.reverse());

//reverse the order of your list again. print te list to show it's back to its original order.
console.log('original ' + places.reverse());

// sort your array so it's stored in alphabatical order. print the array to show that its order has been changed.
console.log('original ' + places.sort());

//sort to change your array so its stored in reverse alphabatical order. print the list to show that its order has changed.
console.log('original ' + places.sort().reverse());
