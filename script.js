$(document).ready(function(){
   var i = 0;
   $("#video").bind("ended", function() {
      var video = document.getElementById('video');
      if(i ==0)
   video.src = "v2.MP4";
   if(i == 1){
   video.src = "v3.MP4";
   i = -1; 
   }
   video.play();
   i++;
   });
    
});

function video(){

   var video = document.getElementById('video');
   video.src = "v2.MP4";
   video.play();
}