

const url = 'http://api.quotable.io/random'

const displayELement = document.getElementById('quoteDisplay')
const quoteInput = document.getElementById('quoteInput')
const timercount = document.getElementById('time')


quoteInput.addEventListener('input',()=>{

const arreyInput = displayELement.querySelectorAll('span')
const arreyValue = quoteInput.value.split('')


let correct = true
arreyInput.forEach((characterSpan, index)=>{

const character = arreyValue[index]


if(character == null){
   characterSpan .classList.remove('correct')
   characterSpan.classList.remove('incorrect')
   correct = false
}

else if(character === characterSpan.innerText){
   characterSpan .classList.add('correct')
   characterSpan   .classList.remove('incorrect')

}

else{
   characterSpan .classList.remove('correct')
   characterSpan.classList.add('incorrect')
   correct = false
}

})

if(correct){
   renderQuote()
}

})


const renderQuote = () =>{

   fetch(url)
   .then(res=> res.json())
   .then(data => showQuotes(data.content) )


}

renderQuote()

const showQuotes = quote =>{
console.log(quote)

displayELement.innerText = ''

quote.split('').forEach(character=>{

   const caraSpan = document.createElement('span')
   caraSpan.innerText = character

displayELement.appendChild(caraSpan)

})



quoteInput.value = null
setCounter()
}


let newTime
const setCounter = () =>{

   timercount.innerText = 0
   newTime = new Date()

   setInterval(()=>{
timercount.innerText = setTimertime()

   },1000)



}

const setTimertime = ()=>{

return  Math.floor((new Date() - newTime) / 1000)

}