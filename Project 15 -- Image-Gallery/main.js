let scrollContainer = document.querySelector('.container');
let next = document.querySelector('#nextBtn');
let back = document.querySelector('#backBtn');

scrollContainer.addEventListener('wheel',function(e)
{
    e.preventDefault();
    scrollContainer.scrollLeft = scrollContainer.scrollLeft + e.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
})

next.addEventListener('click',function()
{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft = scrollContainer.scrollLeft + 900;
})

back.addEventListener('click',function()
{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft = scrollContainer.scrollLeft - 900;
})