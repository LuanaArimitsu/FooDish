let videos = document.querySelectorAll('.container .reels_videos video');

for(let i =0; i < videos.length; i++){
    videos[i].addEventListener("mouseenter", () => {
    videos[i].currentTime = 0;
    videos[i].loop = true;
    videos[i].play();
    });


    videos[i].addEventListener("mouseleave", () => {
        videos[i].pause();
     });


     videos[i].addEventListener("click", () => {
       if(videos[i].paused){
        videos[i].play();
       }else{
        videos[i].pause();
       }
     });
}

