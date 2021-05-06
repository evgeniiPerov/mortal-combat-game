const random = (max, min = 0) => Math.ceil(Math.random() * (max - min) + min)

const createEl = (tag, className, text) => {
    const $element = document.createElement(tag)
    className && $element.classList.add(className)
    if (text) { $element.innerText = text }
    return $element
}
const createImg = (src, alt = '', className) => {
    const $element = document.createElement('img')
    $element.src = src
    $element.alt = alt
    className && $element.classList.add(className)
    return $element
}

const log = (log, name = '') => console.log('### ' + String(name) + ':', log)

export { random, createEl, createImg, log }