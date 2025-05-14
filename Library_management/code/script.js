const bookSearch = document.getElementById('searchBookInput');
const searchBookBtn = document.getElementById('searchBookBtn');
const searchResult = document.getElementById('searchResult');
let readings = JSON.parse(localStorage.getItem("readings"))|| [];

const inventory = [
  {
    id: "book1",
    title: "make it stick",
    author: "Peter C. Brown, Henry L. Roediger III, Mark A. McDanie",
    status:"Available",
    genre:"educational"
  },

  {
    id: "book2",
    title: "l'enfant et la rivière",
    author: "Henry Bosco",
    status:"Available",
    genre: "educational"
  }
];

/**
 * Find the product based on its name
 * @param {*} productName 
 * @returns index of item if found, -1 instead
 */
const findProductIndex = productName =>{

  productName = productName.toLowerCase();

  for(const obj of inventory){
    if(obj.title === productName)
    {
      return inventory.indexOf(obj);
    } 
  }
  return -1;
}
/**
 * Add product object to inventory
 * 
 * @param {*} productObj 
 */
const addProduct = productObj =>{

productObj.name = productObj.name.toLowerCase();

const newProductIndex = findProductIndex(productObj.name);

  if(newProductIndex !== -1){
    inventory[newProductIndex].quantity += productObj.quantity;

console.log(`${inventory[newProductIndex].name} quantity updated`);
  }else{
   inventory.push(productObj);
   console.log(`${productObj.name} added to inventory`);
  }
}


/**
 * Remove product from inventory
 * @param {*} name 
 * @param {*} quantity 
 * @returns 
 */
const removeProduct = (name, quantity)=>{

name = name.toLowerCase();

const productIndex = findProductIndex(name);

if(productIndex === -1){
  console.log(`${name} not found`);
  return;
}
const remaining = inventory[productIndex].quantity - quantity;

if(remaining > 0){
  inventory[productIndex].quantity -= quantity;
  
  console.log(`Remaining ${inventory[productIndex].name} pieces: ${remaining}`);
  return;
}else if(remaining === 0){
  inventory.splice(productIndex,1);
  console.log(inventory);
  return;
}else if(remaining < 0){
  console.log(`Not enough ${name} available, remaining pieces: ${inventory[productIndex].quantity}`);
}


}

/**Library Management Project functions */

/**
 * sanitize user input
 * @param {*} userInput 
 * @returns 
 */
const treatUserInput= (userInput)=>{
  userInput = String(userInput).toLocaleLowerCase();
  return userInput;
}

const cleanInput = ()=>{
  setTimeout(()=>{
    bookSearch.value ="";
    searchResult.innerText = "";
  },3000);
}

const findBook = ()=>{
  const bookName = treatUserInput(bookSearch.value);
  const bookIndex = findProductIndex(bookName);

  if(bookIndex !== -1){
    let book = inventory[bookIndex];
    searchResult.innerHTML = `Le livre est disponible ${JSON.stringify(book)}`;
  }else{
   searchResult.innerHTML = "Le livre n'est pas encore disponible ici";
  }
  
}

/**
 * show book availables as user type
 */

bookSearch.addEventListener('keyup',(e)=>{
  findBook(); 
})

searchBookBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(bookSearch.value === ""){
    alert('Veuillez renseigner le nom du livre');
    return
  }
  findBook();
  cleanInput();
})

bookSearch.addEventListener('keydown',(e)=>{
  findBook();
})

//Suggestions functionality
    //small functionality: user reading storage
    // suggesting based on already red books genres

    const suggestBooks = ()=>{
      
    }

    const storeUserReading = ()=>{
      localStorage.setItem("readings",JSON.stringify(readings));
      return alert("Tous tes livres sont enregistrés");
    }



//What friend read functionality

//boutton "load more" for suggesting boks to a user