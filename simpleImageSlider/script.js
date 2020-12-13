const nextBtn = document.querySelector('.nextBtn')
const preBtn = document.querySelector('.preBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click',nextImg);
preBtn.addEventListener('click',preImg);

function nextImg(){
container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'})
if(counter === 4){
    counter = -1;
}
counter++;

container.style.backgroundImage = `url(img/img-${counter}.jpg)`

}

function preImg(){
container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'})
if(counter === 0){
    counter = 5;
}
counter--;

container.style.backgroundImage = `url(img/img-${counter}.jpg)`

}

