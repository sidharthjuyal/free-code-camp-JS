// iterators

const arr = ["apple", "banana", "orange", "grapes"];
console.log(arr);

function fruitIterator(values) {
    let nextIndex = 0;
    // we will return an object
    return {
        next() {
            if (nextIndex < values.length)
                // we will return this object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            else
                // we will return below object with only 'done'
                return {
                    done: true
                }
        },
        prev(){
            if (nextIndex > 0)
            // we will return this object
            return {
                value: values[--nextIndex],
                done: false
            }
        else
            // we will return below object with only 'done'
            return {
                done: true
            }
        }
    }
}

// using the iterator
const fruits = fruitIterator(arr);
console.log(fruits.next());
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.prev().value);
console.log(fruits.prev().value);