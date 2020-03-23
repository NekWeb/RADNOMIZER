const numRandom = document.querySelector('.random-number')
const copy = document.getElementById('copy')
const btn = document.getElementById('btn')
let num = 0;
function static(){
    numRandom.textContent = num;
}
static()
const Random = () => {
    let min = Number(form.minimum.value)
    let max  = Number(form.maximum.value)
    let values = Math.floor(min + Math.random() * (max + 1 - min))
    function Render(){
        numRandom.textContent = values
    }
    if(min === max){
        alert('Значения равны, введите разные значения')
        numRandom.textContent = 0
    }else if(min > max){
        alert('Минимальное значение больше максимального')
        numRandom.textContent = 0
    }else{
        numRandom.textContent = values
    }
    
}
