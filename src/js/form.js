import { isDupAllowed, generateNumbers } from './utils.js'

export const raffle = document.querySelector('#raffle')
export const min = document.querySelector('#min')
export const max = document.querySelector('#max')
const form = document.querySelector('form')


raffle.addEventListener('input', () => {
    raffle.value = raffle.value.replace(/\D/g, '')
    raffle.classList.contains('fix') ? raffle.classList.remove('fix') : ''
})

min.addEventListener('input', () => {
    min.value = min.value.replace(/\D/g, '')
    min.classList.contains('fix') ? min.classList.remove('fix') : ''
})

max.addEventListener('input', () => {
    max.value = max.value.replace(/\D/g, '')
    max.classList.contains('fix') ? max.classList.remove('fix') : ''
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    generateNumbers()

})

