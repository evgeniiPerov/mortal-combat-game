import { createEl, createImg } from "./utils.js";

class Selectors {
    constructor(player) {
        this.elHP = () => document.querySelector(`.player${player} .life`)
        this.elHPNum = () => document.querySelector(`.player${player} .hp`)
        this.$arenas = document.querySelector('.arenas')
    }
}

class Player extends Selectors {
    constructor({ name, hp, img, player }) {
        super(player)
        this.name = name
        this.hp = hp
        this.img = img
        this.player = player
        this.playerInit()
    }

    changeHP = (count) => this.hp > count ? this.hp -= count : this.hp = 0

    renderHP = () => {
        this.elHP().style.width = this.hp + "%"
        this.elHPNum().innerText = this.hp
    }

    playerInit = () => {
        this.renderPlayer(this.createPlayer())
    }
    createPlayer = () => {

        const $player = createEl('div', `player${this.player}`)
        const $progress = createEl('div', 'progressbar')
        const $live = createEl('div', 'life')
        const $hp = createEl('div', 'hp', this.hp)
        const $name = createEl('div', 'name', this.name)
        const $character = createEl('div', 'character')
        const $img = createImg(this.img, this.name)

        $live.style.width = this.hp + "%"

        $player.appendChild($progress)
        $progress.appendChild($live)
        $progress.appendChild($hp)
        $progress.appendChild($name)
        $player.appendChild($character)
        $character.appendChild($img)

        return $player
    }
    renderPlayer = (playerDomEl) => {
        this.$arenas.appendChild(playerDomEl)
    }
}

export default Player