function capitalizeWords(name) {
    return name
        .trim()
        .split(" ")
        .filter(Boolean)
        .map(word =>
            word[0].toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
}

const input = prompt("Enter full name:");

try {
    const formattedName = capitalizeWords(input);
    console.log(`Hello, ${formattedName}!`);
} catch (error) {
    console.error(error.message);
}