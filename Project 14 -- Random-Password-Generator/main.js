// Function to get random password generator
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

// Initilizing of variables

// console.log(randomPass);
let field = document.querySelector('#field');
let userInput = field.value;
let html = '';
let copy = document.querySelector('.copy');
let button = document.querySelector('.btn');
// Select the text field




button.addEventListener('click',function(e)
{
    let randomPass = generateString(10);
    field.value = randomPass;
})

copy.addEventListener('click',function()
{
    field.select();

    // Copy the text inside the text field
    navigator.clipboard.writeText(field.value);
    alert("Copied the text: " + field.value);
})





  