const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: "Sub-Zero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["sword", "nunchucks", "chain"],
    attack: function () {
        console.log(player1.name + 'Fight...');
    },
};

const player2 = {
    player: 2,
    name: "Sonya",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ["sword", "nunchucks"],
    attack: function () {
        console.log(player1.name + 'Fight...');
    },
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(objPlayer) {
    const $player = createElement('div', 'player' + objPlayer.player);
    const $progressBar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $live = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img',);
    $live.style.width = objPlayer.hp + '%';
    $name.innerText = objPlayer.name;

    $img.src = objPlayer.img;

    $progressBar.appendChild($live);
    $progressBar.appendChild($name);

    $character.appendChild($img);

    $player.appendChild($progressBar);
    $player.appendChild($character);

    return $player;
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.ceil(Math.random() * 20);

    if (player.hp <= 0) {
        player.hp = 0;
    }

    $playerLife.style.width = player.hp + '%';

    if (player.hp <= 0) {
        if (player.player == 1) {
            $arenas.appendChild(playerWins(player2.name));
        } else if (player.player == 2) {
            $arenas.appendChild(playerWins(player1.name));
        }
        $randomButton.disabled = true
    }
}

function playerWins(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' wins';

    return $loseTitle;
}

$randomButton.addEventListener('click', function () {
    changeHP(player1);
    changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));