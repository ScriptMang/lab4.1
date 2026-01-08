function formatFullname (firstName, lastName) {
    let a = firstName[0];
    let b = lastName[0];
    firstName[0] = a.toUpperCase();
    lastName[0] = b.toUpperCase();
    console.log(`${lastName}, ${firstName}`);
}

formatFullname("john", "stickman");