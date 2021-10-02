


$(document).ready(function(){
var videoPaths = ["v1.mp4","v2.mp4","v3.mp4","v4.mp4","v5.mp4"];
var videoNames = ["Video 1","Video 2","Video 3","Video 4","Wellerman",];

var videoTitle = $(".video-title");
var video = document.getElementById('video');
$("#next").click(nextVideo);

var i = 0;

video.src = videoPaths[i];
videoTitle.text(videoNames[i]);

$("#video").bind("ended", nextVideo);

   function nextVideo(){
      if(i == videoPaths.length-1){
         i = 0;
         video.pause();
      }else{
      i++;
      video.src = videoPaths[i];
      videoTitle.text(videoNames[i]);
      video.play();
      }
   }
   
});
