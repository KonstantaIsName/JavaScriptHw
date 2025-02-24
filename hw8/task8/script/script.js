class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

class Prince {
    constructor(name, age, foundShoeSize, requiredAge) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
        this.requiredAge = requiredAge;  // Вік, який шукає принц
    }

    // Метод для пошуку попелюшки за віком та розміром туфельки
    findCinderella(cinderellas) {
        for (let cinderella of cinderellas) {
            if (cinderella.shoeSize === this.foundShoeSize && cinderella.age === this.requiredAge) {
                return cinderella;
            }
        }
        return null;  // Якщо не знайдено
    }
}

// Створення масиву попелюшок
const cinderellas = [
    new Cinderella("Попелюшка 1", 18, 36),
    new Cinderella("Попелюшка 2", 20, 37),
    new Cinderella("Попелюшка 3", 22, 38),
    new Cinderella("Попелюшка 4", 19, 39),
    new Cinderella("Попелюшка 5", 21, 40),
    new Cinderella("Попелюшка 6", 23, 41),
    new Cinderella("Попелюшка 7", 18, 36),
    new Cinderella("Попелюшка 8", 19, 37),
    new Cinderella("Попелюшка 9", 22, 38),
    new Cinderella("Попелюшка 10", 20, 39)
];

// Створення двох принців
const prince1 = new Prince("Принц 1", 30, 36, 18);  // Вік 30, шукає попелюшку з розміром 36 та віком 18
const prince2 = new Prince("Принц 2", 25, 38, 22);  // Вік 25, шукає попелюшку з розміром 38 та віком 22

// Пошук попелюшки для prince1
const foundCinderella1 = prince1.findCinderella(cinderellas);
console.log(`Принц 1 знайшов ${foundCinderella1 ? foundCinderella1.name : "жодну попелюшку"}.`);

// Пошук попелюшки для prince2
const foundCinderella2 = prince2.findCinderella(cinderellas);
console.log(`Принц 2 знайшов ${foundCinderella2 ? foundCinderella2.name : "жодну попелюшку"}.`);

// Додатково: Пошук за допомогою методу `find` для prince1
const foundCinderellaWithFind1 = cinderellas.find(cinderella => cinderella.shoeSize === prince1.foundShoeSize && cinderella.age === prince1.requiredAge);
console.log(`Знайдена попелюшка за допомогою find для prince1: ${foundCinderellaWithFind1 ? foundCinderellaWithFind1.name : "жодна попелюшка"}.`);

// Додатково: Пошук за допомогою методу `find` для prince2
const foundCinderellaWithFind2 = cinderellas.find(cinderella => cinderella.shoeSize === prince2.foundShoeSize && cinderella.age === prince2.requiredAge);
console.log(`Знайдена попелюшка за допомогою find для prince2: ${foundCinderellaWithFind2 ? foundCinderellaWithFind2.name : "жодна попелюшка"}.`);
