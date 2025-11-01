
// const obj = {};

// obj[course2] = { courseId: "level2" };
// obj[course1] = { courseId: "level1" };

// console.log(obj);


const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level Web Development" };

const map = new Map();

map.set(course1, { courseId: "level1" });
map.set(course2, { courseId: "level2" });


console.log(map);
console.log(map.has(course1));


map.forEach((value, key) => {
    console.log(key, value);
});

// map.forEach((value, key) => (key.name = "Hero" + key.name));

console.log([...map.keys()]);