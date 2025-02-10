let array = [42, "Hello", true, 3.14, null, {name: "John"}, [1, 2, 3], undefined, Symbol("sym"), ];
let i =  0;
function printArray(){

if( i < array.length ){
 console.log(array[i]);
   printArray( ++i)
}

}
printArray();




let book1 = {
    title: "To Kill a Mockingbird",
    pageCount: 281,
    genre: "Fiction",
    authors: [
        { name: "Harper Lee", age: 89 }
    ]
};

let book2 = {
    title: "1984",
    pageCount: 328,
    genre: "Dystopian",
    authors: [
        { name: "George Orwell", age: 46 }
    ]
};

let book3 = {
    title: "Good Omens",
    pageCount: 432,
    genre: "Fantasy",
    authors: [
        { name: "Neil Gaiman", age: 63 },
        { name: "Terry Pratchett", age: 66 }
    ]
};


console.log(book3.authors[1].name)

let users = [
    { name: "Alice Johnson", username: "alicej", password: "pass123" },
    { name: "Bob Smith", username: "bob_smith", password: "qwerty" },
    { name: "Charlie Brown", username: "charlie_b", password: "abc123" },
    { name: "David Wilson", username: "david_w", password: "securePass" },
    { name: "Emma Davis", username: "emma_d", password: "helloWorld" },
    { name: "Frank White", username: "frank_w", password: "myPassword" },
    { name: "Grace Hall", username: "grace_h", password: "letMeIn" },
    { name: "Henry Clark", username: "henry_c", password: "pass321" },
    { name: "Isabella Lewis", username: "isabella_l", password: "hunter2" },
    { name: "Jack Walker", username: "jack_w", password: "password123" }
];

for (let index in users) {
    console.log(users[index].password);
}

let temperatures = {
    "day1": {"morning": 1, "day": 4, "evening": 7},
    "day2": {"morning": 2, "day": 5, "evening": 8},
    "day7": {"morning": 3, "day": 6, "evening": 9}
};

console.log(temperatures.day1.morning); 

let time = 25; 

if (time >= 0 && time < 15) {
    console.log("Перша частина години");
} else if (time >= 15 && time < 30) {
    console.log("Друга частина години");
} else if (time >= 30 && time < 45) {
    console.log("Третя частина години");
} else if (time >= 45 && time < 60) {
    console.log("Четверта частина години");
}
let day = 20; 

if (day >= 1 && day <= 10) {
    console.log("Перша декада місяця");
} else if (day >= 11 && day <= 20) {
    console.log("Друга декада місяця");
} else if (day >= 21 && day <= 31) {
    console.log("Третя декада місяця");
}

let dayNumber = prompt("Введіть порядковий номер дня тижня (1 - понеділок, 7 - неділя):");

switch(dayNumber) {
    case "1":
        console.log("Monday: Meeting with team.");
        break;
    case "2":
        console.log("Tuesday: Work on project.");
        break;
    case "3":
        console.log("Wednesday: Client call.");
        break;
    case "4":
        console.log("Thursday: Code review.");
        break;
    case "5":
        console.log("Friday: Wrap up tasks.");
        break;
    case "6":
        console.log("Saturday: Relax and rest.");
        break;
    case "7":
        console.log("Sunday: Prepare for next week.");
        break;
    default:
        console.log("Невірний номер дня. Введіть число від 1 до 7.");
}


let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");

num1 = parseFloat(num1);  
num2 = parseFloat(num2);

if (num1 > num2) {
    console.log("Максимальне число: " + num1);
} else if (num1 < num2) {
    console.log("Максимальне число: " + num2);
} else {
    console.log("Числа рівні.");
}


let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];

for (let course of coursesAndDurationArray) {
    if (course.monthDuration > 5) {
        console.log("Супер");
    }
}
