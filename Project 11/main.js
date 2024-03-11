// initilizing the variables
let songIndex = 0;
let progress = document.getElementById('progressBar');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let previous = document.querySelector('#previous');
let song = new Audio('songs/1.mp3')
let gif = document.querySelector('#gif');
let songItem = document.querySelectorAll('.song');
let musicItem = Array.from(songItem);
let logoImg = document.querySelectorAll('.songItemPlay');
let masterSongName = document.getElementById('masterSongName');

let myArr = 
[
    {songName: 'NCS_1',songPath: 'songs/1.mp3',songCover: 'covers/1.jpg'},
    {songName: 'NCS_2',songPath: 'songs/2.mp3',songCover: 'covers/2.jpg'},
    {songName: 'NCS_3',songPath: 'songs/3.mp3',songCover: 'covers/3.jpg'},
    {songName: 'NCS_4',songPath: 'songs/4.mp3',songCover: 'covers/4.jpg'},
    {songName: 'NCS_5',songPath: 'songs/5.mp3',songCover: 'covers/5.jpg'},
    {songName: 'NCS_6',songPath: 'songs/6.mp3',songCover: 'covers/6.jpg'},
    {songName: 'NCS_7',songPath: 'songs/7.mp3',songCover: 'covers/7.jpg'},
    {songName: 'NCS_8',songPath: 'songs/8.mp3',songCover: 'covers/8.jpg'},
    {songName: 'NCS_9',songPath: 'songs/9.mp3',songCover: 'covers/9.jpg'},
    {songName: 'NCS_10',songPath: 'songs/10.mp3',songCover: 'covers/10.jpg'},
]

musicItem.forEach(function(element,index)
{
    element.querySelectorAll('.coverImg')[0].src = myArr[index].songCover;
    element.querySelectorAll('p')[0].innerText = myArr[index].songName;
})

// event listeners


// progress bar
song.addEventListener('timeupdate', function(e)
{
    let time = (song.currentTime/song.duration) * 100;
    progress.value = time;
})

progress.addEventListener('change', function()
{
    song.currentTime = (progress.value*song.duration)/100;
})


// play button
play.addEventListener('click', function(e)
{
    if(song.paused || song.currentTime <= 0)
    {
        song.play();
        play.classList.remove('fa-play-circle');   
        play.classList.add('fa-pause-circle');   
        gif.style.opacity = 1;
    }
    else
    {
        song.pause();
        play.classList.remove('fa-pause-circle');   
        play.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});


// songs container
function stopAll()
{
    logoImg.forEach(function(e)
    {
        e.classList.remove('fa-pause-circle')
        e.classList.add('fa-play-circle')
    })
}

logoImg.forEach(function(element)
{   
    element.addEventListener('click', function(e)
    {
        if(song.paused || song.currentTime <= 0)
        {
            stopAll();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            masterSongName.innerText = myArr[songIndex-1].songName;
            song.src = `songs/${songIndex+1}.mp3`
            song.currentTime = 0;
            song.play();
            gif.style.opacity = 1;
            play.classList.remove('fa-play-circle');   
            play.classList.add('fa-pause-circle');  
        }
        else
        {
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            song.pause();
            gif.style.opacity = 0;
            play.classList.remove('fa-pause-circle');   
            play.classList.add('fa-play-circle');  
        }
    });
});


// next & previous buttons
next.addEventListener('click', function(e)
{
    if(songIndex >= 9)
    {
        songIndex = 0;
    }
    else
    {
        songIndex = songIndex + 1;
    }
    masterSongName.innerText = myArr[songIndex].songName;
    song.src = `songs/${songIndex+1}.mp3`
    song.currentTime = 0;
    song.play();
    gif.style.opacity = 1;
    play.classList.remove('fa-play-circle');   
    play.classList.add('fa-pause-circle');  
})

previous.addEventListener('click', function(e)
{
    if(songIndex <= 0)
    {
        songIndex = 9;
    }
    else
    {
        songIndex = songIndex - 1;
    }
    masterSongName.innerText = myArr[songIndex].songName;
    song.src = `songs/${songIndex+1}.mp3`
    song.currentTime = 0;
    song.play();
    gif.style.opacity = 1;
    play.classList.remove('fa-play-circle');   
    play.classList.add('fa-pause-circle');  
})


// Improvement
play.addEventListener('click', function(e)
{
        logoImg[songIndex-1].classList.remove('fa-pause-circle');   
        logoImg[songIndex-1].classList.add('fa-play-circle');     
});
