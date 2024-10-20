const dark = document.getElementById('theme');

if(localStorage.getItem('theme') == null){
  localStorage.setItem('theme', 'light');
}

let localData = localStorage.getItem('theme');

if(localData == 'light'){
  dark.src = './Images/moon.png';
  document.body.classList.remove('dark-theme');
}
else if(localData == 'dark'){
  dark.src = './Images/sun.png';
  document.body.classList.add('dark-theme');
}

dark.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if(document.body.classList.contains('dark-theme')){
    dark.src = './Images/sun.png'
    localStorage.setItem('theme', 'dark');
  }
  else{
    dark.src = './Images/moon.png'
    localStorage.setItem('theme', 'light');
  }
});

