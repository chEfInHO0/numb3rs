const reset = document.querySelector('#reset')
export const app = document.querySelector('.app')
export const res = document.querySelector('.result')
export const numbers = document.querySelector('.numbers')

reset.addEventListener('click', () => {
    app.classList.remove('none')
    res.classList.add('none')
    numbers.textContent = ''
})