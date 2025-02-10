for (let i = 1; i <= 10; i++) {
    document.write(`<p>Lorem</p>`);
};

for (let i = 1; i <= 10; i++) {
    document.write(`<div class="box"> №${i}: </div>`);
}

let i = 0;

while (i < 10) {
    document.write(`<h1>Lorem</h1>`);
  i++;
}


let counter = 0;
while (counter < 10) {
    document.write(`<p>${counter}</p>`);
    counter++;
}


let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
let ul = document.getElementById('itemList');


ul.children[0].textContent = listOfItems[0];


listOfItems.slice(1).forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});


const products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
];


const container = document.createElement("div");
container.style.display = "flex";
container.style.gap = "20px"; 
container.style.flexWrap = "wrap"; 
container.style.justifyContent = "center";
document.body.appendChild(container);

products.forEach(product => {
let  productCard = document.createElement("div");
    productCard.style.border = "1px solid #ddd";
    productCard.style.padding = "10px";
    productCard.style.textAlign = "center";
    productCard.style.width = "200px";
    productCard.style.borderRadius = "10px";
    productCard.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.1)";
    
   let title = document.createElement("h3");
    title.innerText = `${product.title}. Price - ${product.price}`;
    
    const image = document.createElement("img");
    image.src = product.image;
    image.style.maxWidth = "100%";
    image.style.height = "auto";
    image.style.borderRadius = "5px";

    productCard.appendChild(title);
    productCard.appendChild(image);
    container.appendChild(productCard);
});

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// Користувачі зі статусом true
console.log("\n  true");
for (let user of users) {
    if (user.status === true) {
        console.log(user.name);
    }
}

// Користувачі зі статусом false
console.log("\n false");
for (let user of users) {
    if (user.status === false) {
        console.log(user.name);
    }
}

// Користувачі, які старші за 30 років
console.log("\n OVER 30  years");
for (let user of users) {
    if (user.age > 30) {
        console.log(user.name);
    }
}
