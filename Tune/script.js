console.log("Welcome to Tune")

let songIndex=0;
let audioElement = new Audio("LMLU.mp3") 
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName("songItems"));
let songs =[
    {songName:"Let Me Love You", filePath:"1.mp3", coverPath:""},
    {songName:"On My Way", filePath:"2.mp3", coverPath:""},
    {songName:"Extremes", filePath:"3.mp3", coverPath:""},
    {songName:"Catch Me If You Can", filePath:"4.mp3", coverPath:""},
    {songName:"World We Used To Know", filePath:"5.mp3", coverPath:""},
    {songName:"Alone, Pt. II", filePath:"6.mp3", coverPath:""},
    {songName:"Paradise", filePath:"7.mp3", coverPath:""}
]

songItems.forEach((element) => {
    element.getElementsByTagName("img")[0].src = songs[i];
    
});
//Handle play/pause clicks
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }

})
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=((myProgressBar.value*audioElement.duration)/100);
})

const makeAllPlays= ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src='$(songIndex).mp3';
        audioElement.currentTime=0;
        audioElement.play();


    }) 
})