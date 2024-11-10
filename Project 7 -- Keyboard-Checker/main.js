let element = document.querySelector('#insert');
window.addEventListener('keydown',function(e)
{
    element.innerHTML = 
    `
        <div class='color'></div>
    
        <table>
        <tr>
            <th>Key</th>
            <th>Key Code</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === ' ' ? 'Space':e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        </table>
    `
});