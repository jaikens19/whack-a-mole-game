// Write your JS here.

let randomNumber = (min, max) => Math.floor(Math.random() * (max-min +1) +min)
let hideMole = (randomMole) => {
    randomMole.classList.add('wgs__mole-head--hidden')
    console.log(randomMole)
    setTimeout(()=> {
        popUpRandomMole()
    },1000)
}

let popUpRandomMole = () => {
    let moleHeads = document.querySelectorAll('.wgs__mole-head:not(.wgs__mole-head--whacked')
    if(moleHeads.length === 0) {
        console.log('you won!')
        return 'You won!!'}
    let index = randomNumber(0,moleHeads.length-1)
   let randomMole =  moleHeads[index]
   randomMole.classList.remove('wgs__mole-head--hidden')
   setTimeout(()=> {
       hideMole(randomMole)
   }, 1000)
    
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(()=> {
        popUpRandomMole();
    },0)
    let allMoles= document.querySelectorAll('.wgs__mole-head');
    allMoles.forEach(mole => {
        mole.addEventListener('click', ev => {
            mole.classList.add('wgs__mole-head--hidden')
            mole.classList.add('wgs__mole-head--whacked')
        })
    })
})