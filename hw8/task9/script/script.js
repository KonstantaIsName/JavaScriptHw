// forEach loop 
Array.prototype.myForEach = function(callback) {

    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};


arr.myForEach((item, index) => {
    console.log(`Елемент ${item} на індексі ${index}`);
});


// filter describe function 
Array.prototype.myFilter = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};


const arr = [1, 2, 3, 4, 5];

// Filring  integer multiples  
const evenNumbers = arr.myFilter(item => item % 2 === 0);
console.log("Парні числа:", evenNumbers);
