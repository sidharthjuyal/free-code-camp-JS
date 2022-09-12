// generators in js
// puri ki puri value ka array banake store krne ki 
// zroorat nahi hai
// you can use generator to generate values

function* numberGen() {
    let i = 0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    while (true) {
        yield i++;
    }
}


const gen = numberGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

