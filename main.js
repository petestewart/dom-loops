const dinos = [
    {
        dinoType: 't-rex',
        name: 'Tommy',
        age: 100
    },
    {
        dinoType: 'stegosaurus',
        name: 'Steve',
        age: 10
    },
    {
        dinoType: 'raptor',
        name: 'Ian',
        age: 23
    }
];

const buildDinoCards = () => {
    // todo: build dino cards
    const selectedDiv = document.querySelector('#dino-pen');
    selectedDiv.innerHTML = '<h2>Dinos Go Here!<h2>';
}

const init = () => {
    buildDinoCards();
}

init();