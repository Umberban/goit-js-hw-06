const categoriesEl = document.querySelectorAll(".item");
console.log("Number of elements:",categoriesEl.length);

// console.log(categoriesEl.forEach(el=> console.log(`Category: ${el.firstElementChild.textContent}
// Elements: ${el.querySelectorAll("li").length} `)));

for( let category of categoriesEl){
let titleEL = category.querySelector("h2");
console.log("Category:",titleEL.textContent)
let numberEL = category.querySelectorAll("li");
console.log("Elements:",numberEL.length);
}