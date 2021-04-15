const $arenas = document.querySelector('.arenas');
// const $randomBtn = document.querySelector('.button');
const $formFight = document.querySelector('.control');
const HIT = {
    head: 30,
    body: 25,
    foot: 20
};

const ATTACK = ['head', 'body', 'foot'];

function changeHP(damage) {
    this.hp -= damage;
    if (this.hp < 0) {
        this.hp = 0;
    }
}

function elHP() {
    return document.querySelector('.player' + this.player + ' .life');
}

function renderHP() {
    this.elHP().style.width = this.hp + '%';
}

function attack() {
    console.log(this.name + ' Fight...')
}

const user = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['axe', 'sword'],
    changeHP,
    elHP,
    renderHP,
    attack
}
const computer = {
    player: 2,
    name: 'SUB-ZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['axe', 'sword'],
    changeHP,
    elHP,
    renderHP,
    attack
}

function showResultText(name) {
    const $winsTitle = document.createElement('div');
    $winsTitle.classList.add('loseTitle');
    if (name) {
        $winsTitle.innerText = name + ' wins';
    } else {
        $winsTitle.innerText = 'Draw';
    }

    return $winsTitle;
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function createReloadButton() {
    const $reloadWrapper = document.createElement('div');
    $reloadWrapper.classList.add('reloadWrap');
    const $reloadBtn = document.createElement('button');
    $reloadBtn.type = 'button';

    $reloadBtn.addEventListener('click', function () {
        window.location.reload();
    });

    $reloadBtn.classList.add('button');
    $reloadBtn.innerText = 'Restart';
    $reloadWrapper.appendChild($reloadBtn);
    $arenas.appendChild($reloadWrapper);
}

// $randomBtn.addEventListener('click', function (e) {
//     scorpion.changeHP(getRandom(20));
//     subZero.changeHP(getRandom(20));
//     scorpion.renderHP();
//     subZero.renderHP();
//
//     if (scorpion.hp === 0 || subZero.hp === 0) {
//         e.currentTarget.disabled = true;
//         createReloadButton();
//     }
//
//     if (scorpion.hp === 0 && scorpion.hp < subZero.hp) {
//         $arenas.appendChild(showResultText(subZero.name));
//     } else if (subZero.hp === 0 && scorpion.hp > subZero.hp) {
//         $arenas.appendChild(showResultText(scorpion.name));
//     } else if (scorpion.hp === 0 && subZero.hp === 0) {
//         $arenas.appendChild(showResultText());
//     }
// });

function createPlayer(playerClass, character) {
    const $player = document.createElement('div');
    $player.classList.add(playerClass);

    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressbar');
    $player.append($progressBar);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = character.hp + '%';
    $progressBar.append($life);

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = character.name;
    $progressBar.append($name);

    const $character = document.createElement('div');
    $character.classList.add('character');
    $player.append($character);

    const $characterImg = document.createElement('img');
    $characterImg.src = character.img;
    $characterImg.alt = '';
    $character.append($characterImg);

    $arenas.appendChild($player);
}

createPlayer('player1', user);
createPlayer('player2', computer);

function enemyAttack() {
    const hit = ATTACK[getRandom(2)];
    const defence = ATTACK[getRandom(2)];

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence
    }
}

$formFight.addEventListener('submit', function (e) {
    e.preventDefault();
    const enemy = enemyAttack();

    const attack = {};

    for (let item of $formFight) {
        if (item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;
        }

        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }

        item.checked = false;
    }

    if (enemy.defence !== attack.hit) {
        computer.changeHP(attack.value);
        computer.renderHP();
    }
    if (attack.defence !== enemy.hit) {
        user.changeHP(enemy.value);
        user.renderHP();
    }

    if (user.hp === 0 || computer.hp === 0) {
        e.currentTarget.disabled = true;
        createReloadButton();
    }

    if (user.hp === 0 && user.hp < computer.hp) {
        $arenas.appendChild(showResultText(computer.name));
    } else if (computer.hp === 0 && user.hp > computer.hp) {
        $arenas.appendChild(showResultText(user.name));
    } else if (user.hp === 0 && computer.hp === 0) {
        $arenas.appendChild(showResultText());
    }
});