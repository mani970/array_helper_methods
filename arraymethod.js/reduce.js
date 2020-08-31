let numbers = [1, 50, 90, 40, 888, 9876, 1000000];
let sum_of_number = numbers.reduce( function (total, numbers){
    return total + numbers;
});

console.log(sum_of_number);

let subtraction_of_number = numbers.reduce( function (total, numbers){
    return total - numbers;
});

console.log(subtraction_of_number);