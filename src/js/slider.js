export const toggle = document.querySelector('.toggle');
export const slider = document.querySelector('.switch');

slider.addEventListener('click', () => {
    let leftM = toggle.style.marginLeft
    if (leftM == '' || leftM == '0px') {
        toggle.style.marginLeft = '50%'
        slider.classList.toggle('bg')
    } else {
        toggle.style.marginLeft = 0
        slider.classList.toggle('bg')
    }
})