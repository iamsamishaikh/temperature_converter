const celcius=document.querySelector('#celcius > input');
const fahrenheit=document.querySelector('#fahrenheit > input');
const kelvin=document.querySelector('#kelvin > input');

const btn=document.querySelector('.button button');

function roundNumber(number){
    return Math.round(number*100)/100
}

celcius.addEventListener('input',function (){
    let cTemp=parseFloat(celcius.value);
    let fTemp=(cTemp*(9/5)) +32;
    let kTemp=cTemp + 273.15;

    fahrenheit.value=roundNumber(fTemp);
    kelvin.value=roundNumber(kTemp);
})

fahrenheit.addEventListener('input',function (){
    let fTemp=parseFloat(fahrenheit.value);
    let cTemp=(fTemp-32) *(5/9);
    let kTemp=(fTemp-32) * (5/9) + 273.15;

    celcius.value=roundNumber(cTemp);
    kelvin.value=roundNumber(kTemp);
})

kelvin.addEventListener('input',function (){
    let kTemp=parseFloat(kelvin.value);
    let cTemp=kTemp-273.15;
    let fTemp=(kTemp-273.15) * (9/5) + 32;

    celcius.value=roundNumber(cTemp);
    fahrenheit.value=roundNumber(fTemp);
});

btn.addEventListener('click',()=>{
    fahrenheit.value="";
    celcius.value="";
    kelvin.value="";
});