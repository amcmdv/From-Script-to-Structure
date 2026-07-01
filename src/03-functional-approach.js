function sanitizeInput(input) {
    return input.trim();
}

function formatName(name) {
    const cleaned = name.toLowerCase();
    return cleaned[0].toUpperCase() + cleaned.slice(1);
}

function generateGreeting(name) {
    return `Hello, ${name}!`;
}

const userInput = prompt("Enter your name:");

try {
    const cleanInput = sanitizeInput(userInput);
    const formattedName = formatName(cleanInput);
    console.log(generateGreeting(formattedName));
} catch (error) {
    console.error(error.message);
}