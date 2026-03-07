// Difference & Product — read two integers; print their difference and product (two lines)

const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const button = document.getElementById('send');
const result = document.getElementById('result');

button.addEventListener('click', function() {
    const a = parseInt(n1.value);
    const b = parseInt(n2.value);
    const diff = a-b;
    const product = a*b;

    if (n1.value === "" || n2.value === "") {
        result.textContent = `invalid input`;
    }
    else {
        result.textContent = `Difference = ${diff} and Product = ${product}`;
    }
});