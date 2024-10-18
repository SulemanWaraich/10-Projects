// Initializing Variables
let button = document.querySelector('.btn');
let notesContainer = document.querySelector('.notes-container');
let notes = document.querySelectorAll('.input-box');

function showNotes()
{
    notesContainer.innerHTML = localStorage.getItem('notes');
}

showNotes();
function storage()
{
    localStorage.setItem('notes', notesContainer.innerHTML);
}

button.addEventListener('click', function()
{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = '  input-box';
    inputBox.setAttribute('contenteditable','true');
    img.src = 'Images/delete.png';
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener('click', function(e)
{
    if(e.target.tagName === 'IMG')
    {
        e.target.parentElement.remove();
        storage();
    }
    else if(e.target.tagName === 'P')
    {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(function(n)
        {
            n.onkeyup = function()
            {
                storage();
            }
        })
    }
})

document.addEventListener('keydown', function(e)
{
    if(e.key === 'Enter')
    {
        this.doctype.execCommand('inserLineBreak');
        e.preventDefault();
    }
})