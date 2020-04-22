const instructors = [
    { firstName: 'Luke',
     lastName: 'Lancaster' },
    { firstName: 'Matt',
     lastName: 'Gill' },
    { firstName: 'Albert',
     lastName: 'Einstein' },
    { firstName: 'Kindergarten',
     lastName: 'Cop' }
];

// Exercise 1.1:
//
// const instructorLoop = () => {
//     for (let i = 0; i < instructors.length; i++) {
//         console.log(instructors[i].firstName, instructors[i].lastName)
//     }
// }


// Exercise 1.2:

const instructorLoop = () => {
    let domString = '';
    for (let i = 0; i < instructors.length; i++) {
        domString += `<h2>${instructors[i].firstName} ${instructors[i].lastName}</h2>`
    };
    return domString;
}

console.log(instructorLoop());