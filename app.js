function formatFullname (firstName, lastName) {
    let a = firstName[0];
    let b = lastName[0];
    let newFirstName = firstName.replace(firstName[0], a.toUpperCase());
    console.log(`${lastName}, ${newFirstName}`);
}

formatFullname("john", "stickman");