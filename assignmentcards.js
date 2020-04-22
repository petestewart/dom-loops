const assignments = [
    {
        title: 'Essay 1',
        dueDate: '04/20/20',
        topic: 'Gardening',
        notes: 'Read stuff about dirt and seeds'
    },
    {
        title: 'Diagram',
        dueDate: '05/05/20',
        topic: 'Alarm System',
        notes: 'Create a diagram of a home alarm system'
    },    {
        title: 'Essay 2',
        dueDate: '06/01/20',
        topic: 'Harley Engines',
        notes: 'Read all about the history of Harley Davidson engines'
    },    {
        title: 'Exam',
        dueDate: '06/15/20',
        topic: 'Everything',
        notes: 'Good luck!'
    }
];

const buildCards = (collection) => {
    let domString = '';
    for (let i = 0; i < collection.length; i++) {
        domString += '<div class="card">'
        domString += `<div class="title"><h3>${collection[i].title}</h3></div>`;
        domString += `<h4>Due on ${collection[i].dueDate}</h4>`;
        domString += `<h5>${collection[i].topic}</h5>`;
        domString += `<p>${collection[i].notes}</p>`;
        domString += "</div>"
    }
    return domString;
}

const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
}

const init = () => {
    printToDom('#assignments', buildCards(assignments));
}

init();