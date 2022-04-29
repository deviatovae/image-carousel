window.onload = function () {
    let currentIndex = 0
    
    const setIndex = function (newIndex) {
        const pictures = [...document.querySelectorAll('.picture')]

        // if index riches the max number
        if (newIndex >= pictures.length) {
            newIndex = 0
        }

        // if index riches the min number
        if (newIndex < 0) {
            newIndex = pictures.length - 1
        }
        
        pictures[currentIndex].classList.remove('visible')
        pictures[newIndex].classList.add('visible')
        
        const inactiveDot = [...document.querySelectorAll('.dot')]
        
        inactiveDot[currentIndex].classList.remove('active')
        inactiveDot[newIndex].classList.add('active')

        currentIndex = newIndex
    }

    document.querySelector('.arrow.left').onclick = function () {
        setIndex(currentIndex - 1)
    }

    document.querySelector('.arrow.right').onclick = function () {
        setIndex(currentIndex + 1)
    }
    
    document.querySelectorAll('.dot').forEach(dot => {
        dot.onclick = function () {
            const dots = [...document.querySelectorAll('.dot')]
            
            setIndex(dots.indexOf(this))
        }
    })
    
};