let consultants = [
  { name: "Peyton Turner", company: "Walker Inc" },
  { name: "Isaias Fritsch", company: "Walker Inc" },
  { name: "Susana Wilderman", company: "Nolan Inc" },
];

let arr1 = [];
let arr2 = [];
for (let i = 0; i < consultants.length; i++) {
  if (consultants[i].company === "Walker Inc") {
    arr1.push(consultants[i]);
  } else if (consultants[i].company === "Nolan Inc") {
    arr2.push(consultants[i]);
  }
}
console.log("Walker Inc: ", arr1);
console.log("Nolan Inc: ", arr2);
