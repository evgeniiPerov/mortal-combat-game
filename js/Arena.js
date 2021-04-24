import { createEl } from "./utils.js";

export default class Arena {
    $arenas = document.querySelector('.arenas')
    $form = this.$arenas.querySelector('.control')
    createReloadButton = () => {
        const $reloadWrap = createEl('div', 'reloadWrap')
        const $reloadBtn = createEl('button', 'button', 'Restart')
        $reloadWrap.appendChild($reloadBtn)
        $reloadBtn.addEventListener('click', () => window.location.reload())
        return $reloadWrap
    }

}