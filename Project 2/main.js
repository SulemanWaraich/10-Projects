let form = document.querySelector('button');
form.addEventListener('click', function(e)
{
    e.preventDefault()

    let element1 = document.querySelector('#height').value;
    let element2 = document.querySelector('#weight').value;
    let result = document.querySelector('#result');
    let height = parseInt(element1);
    let weight = parseInt(element2);
    let bmi_formula = (weight/((height*height) / 10000)).toFixed(2);
    
    if(height == '' || height < 0 || isNaN(height))
    {
        result.innerHTML = `please give a valid height ${height}`;
    }
    else if(weight == '' || weight < 0 || isNaN(weight))
    {
        result.innerHTML = `please give a valid weight ${weight}`;        
    }
    else
    {
        result.innerHTML = `<span>${bmi_formula}</span>`;
    }
});


// Method 2
// function cal()
// {

//     let element1 = document.querySelector('#height').value;
//     let element2 = document.querySelector('#weight').value;
//     let result = document.querySelector('.result');
//     let height = parseInt(element1);
//     let weight = parseInt(element2);
//     let bmi_formula = (weight/((height*height) / 10000)).toFixed(2);
//     result.innerHTML = `<span>${bmi_formula}</span>`
// }