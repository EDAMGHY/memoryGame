document.addEventListener('DOMContentLoaded', () => {

    // create card
    const cardArray = [{
            name: 'fries',
            img: 'Materials/fries.png'
        },
        {
            name: 'fries',
            img: 'Materials/fries.png'
        }, {
            name: 'cheeseburger',
            img: 'Materials/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'Materials/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'Materials/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'Materials/hotdog.png'
        }, {
            name: 'ice-cream',
            img: 'Materials/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'Materials/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'Materials/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'Materials/milkshake.png'
        }, {
            name: 'pizza',
            img: 'Materials/pizza.png'
        },
        {
            name: 'pizza',
            img: 'Materials/pizza.png'
        },
    ];
    cardArray.sort(() => 0.5 - Math.random());



    const grid = document.querySelector('.grid');
    const result = document.getElementById('result');
    let cardChosen = [];
    let cardChosenId = [];
    let cardsWon = [];

    // create game board

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'Materials/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card);
        }
    }
    createBoard();
    //Check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardChosenId[0];
        const optionTwoId = cardChosenId[1];
        if (cardChosen[0] === cardChosen[1]) {
            alertMessage('success', 'Rba7ti a l3awd!');
            setTimeout(() => {
                document.querySelector('.alert').remove();
            }, 1000)
            cards[optionOneId].setAttribute('src', 'Materials/white.png');
            cards[optionTwoId].setAttribute('src', 'Materials/white.png');
            cardsWon.push(cardChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'Materials/blank.png');
            cards[optionTwoId].setAttribute('src', 'Materials/blank.png');
            alertMessage('error', 'Khsserty Almo3ewaq!');
            setTimeout(() => {
                document.querySelector('.alert').remove();
            }, 1000)

        }
        cardChosen = []
        cardChosenId = []
        result.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            result.textContent = 'Mrigel Albatal jebtihum kamlin :)!'
            result.style.fontSize = '80%';
            result.style.color = 'greenyellow';
        }
    }
    // alert 
    function alertMessage(className, message) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.innerHTML = message;
        document.body.insertBefore(div, document.querySelector('h3'));
    }


    //flip Cards

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    };
});