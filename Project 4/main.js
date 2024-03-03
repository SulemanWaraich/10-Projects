let randNum = Math.random() * 100 + 1;
let random = Math.round(randNum);
let form = document.querySelector('form');

form.addEventListener('submit',function(e)
{
    e.preventDefault();
    
    let element = document.querySelector('#field1').value;
    let user = parseInt(element);
    let result = document.querySelector('.lowOrHi');

    if(user < random && user !== NaN && user !== String)
    {
        result.innerHTML = `the number is too small ${user}`;
    }
    else if(user > random && user !== NaN && user !== String)
    {
        result.innerHTML = `the number is too large ${user}`;        
    }
    else if(user === random && user !== NaN && user !== String)
    {
        result.innerHTML = `You guess the right number ${user}`;                        
    }
    else
    {
        result.innerHTML = `input the valid number ${user}`;                        
    }


});

