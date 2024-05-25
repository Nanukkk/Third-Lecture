//first one
function processOddNumbers(arr) {
    
    if (arr.length <= 2 || arr.some(num => num % 2 === 0)) {
        throw new Error("Input must be an array of odd numbers with length greater than 2");
    }

   
    const sum = arr[0] + arr[1];

  
    const product = arr.slice(2).reduce((acc, num) => acc * num, 1);

   
    return [sum, product];
}


const result = processOddNumbers([3, 5, 7, 9, 11]);
console.log(result);

function getCity(user) {
    // Destructure with default values to handle cases where the path doesn't exist
    const { banks } = user;
    const { address } = banks && banks[2] || {};
    const { city } = address || {};

    // Return the city or undefined if any part of the path is missing
    return city;
}

//second one
function getCity(user) {
    // Destructure with default values to handle cases where the path doesn't exist
    const { banks } = user;
    const { address } = banks && banks[2] || {};
    const { city } = address || {};

    // Return the city or undefined if any part of the path is missing
    return city;
}

// Example usage:
const user = {
    name: "John Doe",
    banks: [
        { name: "Bank A", address: { city: "City A" } },
        { name: "Bank B", address: { city: "City B" } },
        { name: "Bank C", address: { city: "City C" } }
    ]
};

console.log(getCity(user));  // Output: "City C"

const userWithoutCity = {
    name: "Jane Doe",
    banks: [
        { name: "Bank A", address: { city: "City A" } },
        { name: "Bank B", address: { city: "City B" } }
    ]
};

console.log(getCity(userWithoutCity));  // Output: undefined

// third one
function deepCopy(obj) {
    // Check if the input is an object and not null
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return the value if obj is not an object
    }

    // Create a new object or array
    const copy = Array.isArray(obj) ? [...obj] : { ...obj };

    // Iterate through each key in the object
    for (const key in copy) {
        if (copy.hasOwnProperty(key)) {
            const value = copy[key];
            // Recursively copy if the value is an object
            copy[key] = (typeof value === 'object' && value !== null) ? deepCopy(value) : value;
        }
    }

    return copy;
}

// Example usage:
const original = {
    name: "Alice",
    age: 30,
    address: {
        city: "Wonderland",
        zip: 12345
    },
    hobbies: ["reading", "chess"]
};

const copied = deepCopy(original);
console.log(copied);

// Modify the copied object to verify that it is a deep copy
copied.address.city = "New Wonderland";
copied.hobbies.push("gardening");

console.log("Original:", original);
console.log("Copied:", copied);
