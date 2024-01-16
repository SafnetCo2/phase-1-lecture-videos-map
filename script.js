const HiltonGrouphotels = [
    {
        name: "Hilton",
        price: 3500,
        location: "Nairobi"


    },
    {
        name: "Hilton-city",
        price: 5500,
        location: "City"


    },
    {
        name: "Hilton-mara",
        price: 8500,
        location: "Masai"


    },
    {
        name: "Hilton-clasy",
        price: 22500,
        location: " Dubai"


    },
]
function loopThrough(array) {
    const updateArray = [];
    for (let item of array) {
        updateArray.push(item.name)
    }
    return updateArray
}
loopThrough()

const carts = [1, 2, 3, 5, 6];
carts.indexOf(1)
const fruits = ['apple', 'mangoes', 'kiwi', 'onion']
fruits.indexOf('apple')
function isOdd(e, index, arr) {
    return (e % 2 == 1)
}

const person = [
    {
        name: "Tony",
        age: 20
    },
    {
        name: "Malice",
        age: 10
    },
    {
        name: "suzzy",
        age: 6
    }
];
const age = person.find(findMalice).age;

function findMalice(persons) {

    return persons.name === "Malice"
}
console.log(age)

const res = person.find(findSuzzy);
function findSuzzy(person) {
    return person.name === "suzzy"
}
console.log(res)


const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
]

const recordsres = record.find(findW);
function findW(record) {
    if (record.result === "W") {
        return "win"
    } else {
        return "undefined"
    }


}
console.log(recordsres)