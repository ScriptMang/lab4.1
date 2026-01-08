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

}


formatFullname("john", "stickman");