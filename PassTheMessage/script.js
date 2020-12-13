const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut')

sendBtn.addEventListener('click', sendMessage);




function sendMessage(){
    
    let content = messageIn.value;
    // console.log(content);
    if(content === ''){
        alert('Please Enter valid value. Current Value is Empty');
    }
    else{
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
}