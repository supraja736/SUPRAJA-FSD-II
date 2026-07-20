let value: any;

value = 100;
console.log(value);

value = "Hello";
console.log(value);

value = true;
console.log(value);
let data: unknown;

data = "TypeScript";

if (typeof data === "string") {
    console.log(data.toUpperCase());
}
function greet(): void {
    console.log("Welcome to TypeScript");
}

greet();