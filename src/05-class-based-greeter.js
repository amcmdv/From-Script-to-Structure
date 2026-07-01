class Greeter {
    constructor(name) {
        if (!name || !name.trim()) {
            throw new Error("Invalid name.");
        }

        this.name = name;
    }

    formatName() {
        const cleaned = this.name.trim().toLowerCase();
        return cleaned[0].toUpperCase() + cleaned.slice(1);
    }

    greet() {
        return `Hello, ${this.formatName()}!`;
    }
}

try {
    const name = prompt("Enter your name:");
    const greeter = new Greeter(name);
    console.log(greeter.greet());
} catch (error) {
    console.error(error.message);
}