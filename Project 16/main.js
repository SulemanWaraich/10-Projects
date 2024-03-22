const URL = `https://api.currencyapi.com/v3/latest?apikey=cur_live_DjowtCswzBf5SoTmXn2CjuCXjMk1RnmRwKYZUu0N`;

let button = document.querySelector('.btn');
let table = document.querySelector('tbody');
let value = parseInt(document.querySelector('input[type="number"]').value);
let currency = document.querySelector('select[name="currency"]').value;
let output = document.querySelector('.output');

const api = async () =>
{
    let str = '';
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    
    for(let key in data['data'])
    {
        str = str + `
        <tr>
            <td>${key}</td>
            <td>${data['data'][key]['code']}</td>
            <td>${data['data'][key]['value']}</td>
        </tr>`
    }
    table.innerHTML = str;
}

button.addEventListener('click',function(e)
{
    e.preventDefault();
    api();
    output.style.display = 'block';
});
