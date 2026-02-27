const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const button = document.getElementById('send');
const result = document.getElementById('result');

button.addEventListener('click', function() {
    const a = parseInt(n1.value);
    const b = parseInt(n2.value);
    const sum = a + b;

    if (n1.value === "" || n2.value === "") {
        result.textContent = `Invalid input`;
    }
    else {
        result.textContent = `SUM = ${sum}`;
    } 
});
