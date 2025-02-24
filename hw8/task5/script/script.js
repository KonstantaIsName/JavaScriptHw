
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order; 
}


const clients = [

    new Client(1, "Іван", "Петров", "@email.com", "123-456-7890", ["Телефон", "Ноутбук"]),
    new Client(2, "Марія", "Іванова", "m@email.com", "234-567-8901", ["Планшет"]),
    new Client(3, "Олег", "Сидоров", "@email.com", "345-678-9012", ["Монітор", "Клавіатура", "Миша"]),
    new Client(4, "Анна", "Коваленко", "@email.com", "456-789-0123", ["Навушники"]),
    new Client(5, "Петро", "Григоренко", "p@email.com", "567-890-1234", ["Смарт-годинник", "Телефон"]),
    new Client(6, "Василь", "Мельник", "@email.com", "678-901-2345", ["Ноутбук", "Миша"]),
    new Client(7, "Юлія", "Шевченко", "@email.com", "789-012-3456", ["Планшет", "Чохол"]),
    new Client(8, "Оксана", "Бондар", "@email.com", "890-123-4567", ["Фітнес-браслет"]),
    new Client(9, "Сергій", "Ткаченко", "@email.com", "901-234-5678", ["Камера", "Трипод"]),
    new Client(10, "Дмитро", "Кравченко", "@email.com", "012-345-6789", ["Ноутбук", "Сумка"])
];



clients.sort(function compareNumbers(a, b) {

 return a.order.length - b.order.length
});

console.log(clients);
