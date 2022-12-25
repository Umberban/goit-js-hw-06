const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const containerEl = document.getElementById("ingredients");
// let ingArray = [];
// const createIng = ingredient => 
// {
//     let z = document.createElement("li");
//     z.textContent = ingredient;
//     z.classList.add("item")
//     ingArray.push(z);
// }

// ingredients.forEach(createIng)
// containerEl.append(...ingArray);

function addingListElements(id,list){
    const containerEl = document.getElementById(id);
    let ingArray = [];
    const createIng = el => 
    {
        let liEl = document.createElement("li");
        liEl.textContent = el;
        liEl.classList.add("item")
        ingArray.push(liEl);
    }
    
    list.forEach(createIng)
    containerEl.append(...ingArray);
}
addingListElements("ingredients",ingredients);