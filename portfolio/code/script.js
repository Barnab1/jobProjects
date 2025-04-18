//Fetching first Developper and Accountant part inside the document
const developerParts = document.querySelectorAll('.developer');
const accountantParts = document.querySelectorAll('.accountant');
const accountantBtn = document.getElementById('accountant-profile');
const developerBtn = document.getElementById('developer-profile');


const showAccountantParts = ()=>{

developerParts.forEach((part)=>{
        part.style.display = "none";
    })
accountantParts.forEach((part)=>{
        part.style.display = "block";
    })
 
}

const showDeveloperParts = ()=>{
    accountantParts.forEach((part)=>{
        part.style.display = "none";
    })
    developerParts.forEach((part)=>{
        part.style.display = "block";
    })
}


accountantBtn.addEventListener('click', showAccountantParts);
developerBtn.addEventListener('click', showDeveloperParts);
