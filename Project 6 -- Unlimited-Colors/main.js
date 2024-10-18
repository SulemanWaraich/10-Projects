function colorGenerator()
{
    const arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

    function getCharacter(index)
    {
        return arr[index];
    }

    function generateNewColor()
    {
        let color = "#";
        for(let index = 0; index < 6; index++)
        {
            const randomPosition = Math.floor(Math.random()*arr.length);
            color = color + getCharacter(randomPosition);
        }
        console.log(color);
        return color;
    }
    return generateNewColor();
}
 
function colorChanger()
{
    let btn_1 = document.querySelector('#btn1');
    let btn_2 = document.querySelector('#btn2');
    let clear;
    
    let start = function()
    {
        function changeBgColor()
        {
            let randomColor = colorGenerator();
            document.body.style.backgroundColor = randomColor;
        };

        if(clear == null)
        {
            clear = setInterval(changeBgColor, 1000);
        }

    };

    let stop1 = function()
    {
        clearInterval(clear);
        clear = null;
    }
    btn_1.addEventListener('click',start);
    btn_2.addEventListener('click',stop1);
}
colorChanger();