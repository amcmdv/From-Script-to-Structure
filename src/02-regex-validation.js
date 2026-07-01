function greet(name) {
    if (!name || !name.trim()) {
        throw new Error("Name cannot be empty.");
    }

    return `Hello, ${name.trim()}!`;
}

const userInput = prompt("Enter your name:");

try {
    console.log(greet(userInput));
} catch (error) {
    console.error(error.message);
}