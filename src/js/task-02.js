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
        let z = document.createElement("li");
        z.textContent = el;
        z.classList.add("item")
        ingArray.push(z);
    }
    
    list.forEach(createIng)
    containerEl.append(...ingArray);
}
addingListElements("ingredients",ingredients);