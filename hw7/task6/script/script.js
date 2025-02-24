function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.driver = null; // спочатку немає водія

    // Метод для водіння
    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function() {
        for (let key in this) {
            if ( typeof this[key] !== 'function') {
                alert(`${key} - ${this[key]}`);
   
            }
        }
    };

 
    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Максимальна швидкість збільшена до ${this.maxSpeed}`);
    };

    // Метод для зміни року випуску
    this.changeYear = function(newValue) {
        this.year = newValue;
        console.log(`Рік випуску змінено на ${this.year}`);
    };

    
    this.addDriver = function(driver) {
        this.driver = driver;
        console.log(`Доброго дня! ${this.driver.name}, ви успішно авторизувались, актуальна ліцензія № ${this.driver.licenseNumber}`);
    };
}


let driver = { name: "Іван", licenseNumber: "ABC123" };

let myCar = new Car("BMW", "BMW AG", 2020, 240, 3.0);
myCar.addDriver(driver);
console.log(myCar)
myCar.info();
myCar.drive();
myCar.increaseMaxSpeed(20);
myCar.changeYear(2021);



