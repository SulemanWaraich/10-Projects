                                                    // Method 1
// function changeBack1()
// {
//     document.body.style.backgroundColor = 'grey';
// }
// function changeBack2()
// {
//     document.body.style.backgroundColor = 'white';
// }
// function changeBack3()
// {
//     document.body.style.backgroundColor = 'blue';
// }
// function changeBack4()
// {
//     document.body.style.backgroundColor = 'yellow';
// }

                                                        // Method 2
// let element = document.querySelector('#card1');
// let body = document.querySelector('body');
// // function Color()
// // {
// //     body.style.backgroundColor = 'grey'    
// // }
// // element.addEventListener('click', Color);

                                                        // Method 3
// let element = document.querySelector('#card1');
// let body = document.querySelector('body');
// element.addEventListener('click', function()
// {
//     body.style.backgroundColor = 'grey';
// })

                                                        // Method 4
let element = document.querySelectorAll('.card');
let body = document.querySelector('body');
element.forEach(function(card)
{
    card.addEventListener('click', function(e)
    {
        if(e.target.id === 'card1')
        {
            body.style.backgroundColor = 'grey';
        }
        if(e.target.id === 'card2')
        {
            body.style.backgroundColor = 'white';
        }
        if(e.target.id === 'card3')
        {
            body.style.backgroundColor = 'blue';
        }
        if(e.target.id === 'card4')
        {
            body.style.backgroundColor = 'yellow';
        }
    });
});
