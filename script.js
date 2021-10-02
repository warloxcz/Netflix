


$(document).ready(function(){
var videoPaths = ["videos/v1.mp4","videos/v2.mp4","videos/v3.mp4","videos/v4.mp4","videos/v5.mp4"];
var videoNames = ["Video 1","Video 2","Video 3","Video 4","Wellerman",];

var videoTitle = $(".video-title");
var video = document.getElementById('video');
$("#next").click(nextVideo);
$("#prev").click(prevVideo);

var i = 0;

video.src = videoPaths[i];
changeVideoTitle();

$("#video").bind("ended", nextVideo);

   function nextVideo(){
      if(i == videoPaths.length-1){
         
         video.pause();
      }else{
      i++;
      video.src = videoPaths[i];
      changeVideoTitle();
      video.play();
      }
   }

   function prevVideo(){
      if(i <= 0){
         video.pause();
      }else{
      i--;
      video.src = videoPaths[i];
      changeVideoTitle();
      video.play();
      }
   }
   
   function changeVideoTitle(){
      videoTitle.text(videoNames[i]+ " ["+(i+1)+"/"+videoPaths.length+"]");
   }
   
});
