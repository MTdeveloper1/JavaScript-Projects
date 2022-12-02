let addBtn = document.getElementById('addBtn');
let input = document.getElementById('input');
let itemsContainer = document.querySelector('.itemsContainer');
let clearBtn = document.getElementById('clearBtn');

let counterId = 0;
let products = []

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let product = input.value;
    let htmlContent = `
    <div id="${counterId}" class="item">
    <p id="itemName">${product}</p>
    <div class="changeContainer">
    <button class="edit" id="${counterId}"><img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/40C057/external-edit-interface-kiranshastry-solid-kiranshastry.png"/></button>
    <button onclick="deleteItem()" id="${counterId}"><img src="https://img.icons8.com/material-sharp/24/FA5252/filled-trash.png"/></button>
</div>
</div>
`
    products.push(htmlContent)
    show();
    counterId++;
})

function show() {
    itemsContainer.innerHTML+=products[counterId]; 
}

function deleteItem() {
    products[0]='`<div>hola</div>`'
    show();
}

clearBtn.addEventListener('click', () => {
    itemsContainer.innerHTML="";
    products=[];
    counterId=0;
})