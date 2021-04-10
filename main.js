const $div = document.createElement('div')
const $arena = document.querySelector('.arenas')
//const $player1 = $div.classList.add('player1')
const $player1 = document.createElement('div')
$player1.classList.add('player1')
$arena.appendChild($player1);
const player1 = {
    name: 'Scorpion',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'Katana'],
    atack: function () {
        console.log(`${this.name} Fight`)
    }
}
player1.atack()

const player2 = {
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['ICE ICE BABY', 'Katana'],
    atack: function () {
        console.log(`${this.name} Fight`)
    }
}
player2.atack()
function createPlayer(player, name, hp, img) {
    const $player1 = document.createElement('div')
    $player1.classList.add(player)
    const $progressbar = document.createElement('div')
    $progressbar.classList.add('progressbar')
    const $life = document.createElement('div')
    $life.classList.add('life')
    $life.style.width = hp
    const $name = document.createElement('div')
    $name.classList.add('name')
    $name.innerText = name
    const $character = document.createElement('div')
    $character.classList.add('character')
    const $img = document.createElement('img')
    $img.src = img
    //Appends
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    $character.appendChild($img)
    $player1.appendChild($progressbar)
    $player1.appendChild($character)
    $arena.appendChild($player1)
}

createPlayer('player1', player1.name, player1.hp, player1.img);
createPlayer('player2', player2.name, player2.hp, player2.img);