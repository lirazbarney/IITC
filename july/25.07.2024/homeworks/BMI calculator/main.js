//BMI calculator
function calculateBMI(weight, height) {
    return (weight / (height * height));
}
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return `Underweight`;
    } else if (bmi < 25) {
        return `Normal weight`;
    } else if (bmi < 30) {
        return `Overweight`;
    } else {
        return `Obese`;
    }
}

let weight = ``;
while ((isNaN(weight)) || (weight <= 0)) {
    weight = parseFloat(prompt(`please enter your current weight in kg`, `00`));
}
let height = parseFloat(prompt(`please enter your height in m`, `00`));
while ((isNaN(height)) || (height <= 0)) {
    height = parseFloat(prompt(`please enter your height in m`, `00`));
}
let bmi = calculateBMI(weight, height);
let bmiResult = getBMICategory(bmi);
console.log(`your weight is ${weight} and your height is ${height} so your BMI is ${bmi} and your BMI result is ${bmiResult}`);