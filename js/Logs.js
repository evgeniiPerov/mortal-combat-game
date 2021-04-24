import { log, random } from "./utils.js";

export default class Logs {
    $chat = document.querySelector('.chat')
    fightLog = (logType, playerKick, playerDefence, hit, hp, damage) => {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        let logStr = ''

        switch (logType) {
            case 'hit':
                logStr = `${time} - ${this.logs[logType][random(this.logs[logType].length - 1)].replace('[playerKick]', playerKick).replace('[playerDefence]', playerDefence)} -${damage}hp [${hp}/100]`
                break
            case 'defence':
                logStr = `${time} - ${this.logs[logType][random(this.logs[logType].length - 1)].replace('[playerKick]', playerKick).replace('[playerDefence]', playerDefence)}`
                break
            case 'end':
                logStr = this.logs[logType][random(this.logs[logType].length - 1)].replace('[playerKick]', playerKick).replace('[playerDefence]', playerDefence).replace('[time]', time)
                break
            case 'start':
                logStr = this.logs[logType].replace('[time]', time).replace('[playerKick]', playerKick).replace('[playerDefence]', playerDefence)
                break
            case 'draw':
                logStr = this.logs['draw']
                break
        }

        const el = `<p class="log">${logStr}</p>`

        this.$chat.insertAdjacentHTML('afterbegin', el)

        // debuging
        if (damage) {
            log(`${playerKick} бьет ${playerDefence} в ${hit} нанося - ${damage} урона!`, 'Log:')
        } else if (logType === 'defence') {
            log(`${playerKick} бьет ${playerDefence} в ${hit} попадая в блок!`, 'Log:')
        } else {
            log(logStr)
        }

    }
    logs = {
        start: 'Часы показывали [time], когда [playerKick] и [playerDefence] бросили вызов друг другу.',
        end: [
            'Результат удара [playerKick]: [playerDefence] - труп',
            '[playerDefence] погиб от удара бойца [playerKick]',
            'Результат боя: [playerDefence] - жертва, [playerKick] - убийца',
        ],
        hit: [
            '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
            '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
            '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
            '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
            '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
            '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
            '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
            '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
            '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
            '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
            '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
            '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
            '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
            '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
            '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
            '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
            '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
            '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
        ],
        defence: [
            '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
            '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
            '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
            '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
            '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
            '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
            '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
            '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
        ],
        draw: 'Ничья - это тоже победа!'
    }
}