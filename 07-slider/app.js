const upBtn = document.querySelector('.up-button')
const dowmBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')

const slideCount = mainSlide.querySelectorAll('div').length
sidebar.style.top = `-${(slideCount - 1) * 100}vh`

let activeSlideIndex = 0

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

dowmBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', () => {
    if (event.key === 'ArrowUp'){
        changeSlide('up')
    } else if (event.key === 'ArrowDown'){
        changeSlide('down')
    }
})

function changeSlide(direction) {
    if (direction === 'up'){
        activeSlideIndex++
        if (activeSlideIndex === slideCount){
            activeSlideIndex = 0
        }
    } else if (direction === 'down'){
        activeSlideIndex--
        if (activeSlideIndex < 0){
            activeSlideIndex = slideCount - 1 
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}