class Car {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.driver = null; // спочатку немає водія
    }

    // Метод для водіння
    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    // Метод для виведення інформації про автомобіль
    info() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                alert(`${key} - ${this[key]}`);
            }
        }
    }

    // Метод для збільшення максимальної швидкості
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Максимальна швидкість збільшена до ${this.maxSpeed}`);
    }

    // Метод для зміни року випуску
    changeYear(newValue) {
        this.year = newValue;
        console.log(`Рік випуску змінено на ${this.year}`);
    }

    // Метод для додавання водія
    addDriver(driver) {
        this.driver = driver;
        console.log(`Доброго дня! ${this.driver.name}, ви успішно авторизувались, актуальна ліцензія № ${this.driver.licenseNumber}`);
    }
}

// Приклад використання
let driver = { name: "Іван", licenseNumber: "ABC123" };

let myCar = new Car("BMW", "BMW AG", 2020, 240, 3.0);
  myCar.addDriver(driver);
console.log(myCar);
myCar.info();
myCar.drive();
myCar.increaseMaxSpeed(20);
myCar.changeYear(2021);
