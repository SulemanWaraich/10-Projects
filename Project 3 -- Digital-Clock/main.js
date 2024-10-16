let element = document.querySelector('#field');
setInterval(function()
{
    let date = new Date();
    let myDate = date.toLocaleTimeString()
    element.innerHTML = myDate;  
},1000);