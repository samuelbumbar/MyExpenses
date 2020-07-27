console.log('destructuring');

//
//  Object destructuring
//

const person = {
    id: 4,
    name: 'Andrew',
    age: 27,
    location: {
        city: 'Philadelphia',
        temp: 88
    }
};

// Option 1
// const name = person.name;
// const age = person.age;

// Option 2
// const { name, age } = person;

// Option 3
// const { name: firstName = 'Anonymous', age } = person;     // 'Anonymous' is a value set by default for the name variable

console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// const city = person.location.city;
// const temperature = person.location.temp;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


//
//  Array destructuring
//

const address = ['1299 S Juniper Streen', 'Philadelphia', 'Pennsylvania', '19147'];

// Option 1
// const city = address[1];
// const state = address[2];

// Option 2
// const [street, city, state, zip] = address;
// const [street, city, state] = address;
// const [, city, state] = address;
// const [, , state] = address;
const [, city, state = 'New York'] = address;


// console.log(`You are in ${address[1]} ${address[2]}.`);
console.log(`You are in ${city}, ${state}.`);
// console.log(`You are in ${stsate}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);