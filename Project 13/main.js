let inputValue = document.querySelector('#field');
let button = document.querySelector('.btn');
inputValue.max = new Date().toISOString().split('T')[0];
let show = document.querySelector('#show');

function ageCal()
{
    let birthDate = new Date(inputValue.value);
    let y1 = birthDate.getFullYear();
    let m1 = birthDate.getMonth() + 1;
    let d1 = birthDate.getDay();
    
    let todayDate = new Date();
    let y2 = todayDate.getFullYear();
    let m2 = todayDate.getMonth() + 1;
    let d2 = todayDate.getDay();
    
    let y3,m3,d3;

    y3 = y2 - y1;

    if(m2 >= m1)
    {
        m3 = m2 - m1; 
    }
    else
    {
        y3--;
        m3 = 12 + m2 - m1;
    }
    if(d2 >= d1)
    {
        d3 = d2 - d1;
    }
    else
    {
        m3--;
        d3 = getDaysInMonth(y1,m1) + d2 - d1;
    }
    if(m3 < 0)
    {
        m3 = 11;
        y3--;
    }
    show.innerHTML = `you are ${y3} years, ${m3} months, and ${d3} days old`
}

function getDaysInMonth(year,month)
{
    return new Date(year, month, 0).getDate();
}

button.addEventListener('click', ageCal);