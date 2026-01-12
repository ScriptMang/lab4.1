function formatFullname (firstName, lastName) {
    if (firstName === "" || lastName === "") {
        return "Invalid name input";
    }
    let a = firstName[0];
    let b = lastName[0];
    let newFirstName = firstName.replace(firstName[0], a.toUpperCase());
    let newLastName = lastName.replace(lastName[0], b.toUpperCase());
    console.log(`${newLastName}, ${newFirstName}`);
}

function calculateTotalCost(price, quantity, taxRate) {
    if (typeof price !== "number" || 
        typeof quantity !== "number" || typeof taxRate !== "number") {
             return "Invalid input";
    }
    return totalCost = (price * quantity) * (1 + taxRate);
}

function checkEligibility(age, isEmployed) {
    if (age > 18 && isEmployed === "employed") {
        return "You are eligible."
    }

    if (age > 18 && isEmployed === "unemployed"){
        return "You are conditionally eligible."
    }

    if (age < 18){
        return "You are not eligible."
    }
}




formatFullname("john", "stickman");
console.log(`Total cost of 5 plates at $12 with 7% tax-rate: ` + calculateTotalCost(12, 5, 0.07));
console.log(`Total cost of 5 plates at $12 with 7% tax-rate: ` + calculateTotalCost("x", 5, 0.07));
console.log(`Bobby is 23 and employed: ` + checkEligibility(23, "employed"));
console.log(`Ren is 28 and unemployed: ` + checkEligibility(28, "unemployed"));
console.log(`Jimmy is 14 and unemployed: ` + checkEligibility(14, "unemployed"));