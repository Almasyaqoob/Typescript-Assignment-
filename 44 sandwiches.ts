function make_sandwich (item: string[]) {
console.log("\nMaking your sandwich with:");

item.forEach(element => console.log("- " + element));

console.log("Enjoy your sandwich !\n");
}
make_sandwich(["Ham", "Cheese", "Lettuce"]);

make_sandwich(["Turkey", "Bacon"]);

make_sandwich(["Peanut butter", "jelly"]);
