import { slider } from "./slider.js";
import { raffle, min, max } from "./form.js";
import { app, res, numbers } from "./reset.js";

const msg = document.querySelector('.msg')

export function isDupAllowed() {
    return slider.classList.contains('bg')
}

function checkMax() {
    return +max.value > +min.value
}

function checkRaffle() {
    const dups = isDupAllowed()
    return dups ? ((+max.value)) >= +raffle.value : true
}

function clearMessage() {
    setTimeout(() => {
        msg.textContent = '"'
        msg.classList.toggle('hide')
    }, 3500)
}

export function generateNumbers() {
    // TODO desenvolver uma lógica mais otimizada, testar um switch case no futuro
    if (matchRequirements()) {
        const selected = []
        while (selected.length !== +raffle.value) {
            const num = Math.ceil(Math.random() * +max.value)
            if (isDupAllowed()) {
                if (num >= +min.value && !selected.includes(num)) {
                    selected.push(num)
                }
            } else {
                if (num >= +min.value) {
                    selected.push(num)
                }
            }
        }
        app.classList.add('none')
        res.classList.remove('none')

        selected.forEach(n => {
            const num = document.createElement('span')
            num.classList.add('spin')
            num.textContent = n
            numbers.appendChild(num)
        })
    }
}

export function matchRequirements() {
    /**
     * O valor de Fim deve ser maior que o de Inicio (Se não forem permitidas duplicatas)
     * O valor de Fim deve ser maior que o Numeros a serem sorteados
     */

    if (!checkMax() || !checkRaffle()) {
        msg.classList.toggle('hide')
        msg.textContent = 'Altere os valores dos campos'
        max.classList.add('fix')
        clearMessage()
        return false
    }
    return true

}