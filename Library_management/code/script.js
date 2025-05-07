const inventory = [
];

const findProductIndex = productName =>{

  productName = productName.toLowerCase();

  for(const obj of inventory){
    if(obj.name === productName)
    {
      return inventory.indexOf(obj);
    } 
  }
  return -1;
}

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

addProduct({name: "FLOUR", quantity: 25});
removeProduct("FLOUR", 5);