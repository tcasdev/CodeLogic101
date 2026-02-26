// read two integers; print their difference and product (two lines)
const readline = require("node:readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

input.question("First integer: ", (first) => {
    const n1 = parseInt(first, 10);

    input.question("Second integer: ", (second) => {
        const n2 = parseInt(second, 10);
        
        console.log(`Difference = ${n1 - n2}`);
        console.log(`Product = ${n1 * n2}`);

        input.close();
    });
});
