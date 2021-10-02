var videoPaths = ["videos/v1.mp4","videos/v2.mp4","videos/v3.mp4","videos/v4.mp4","videos/v5.mp4"];
var videoNames = ["Video 1","Video 2","Video 3","Video 4","Wellerman",];

var queue = [];
var inUseQueue = [];

$(document).ready(function(){

var videoTitle = $(".video-title");
var video = document.getElementById('video');
$("#next").click(nextVideo);
$("#prev").click(prevVideo);
$("#start").click(start);

var i = 0;

$("#video").bind("ended", nextVideo);

   function nextVideo(){
      if(i == inUseQueue.length-1){
         
         video.pause();
      }else{
      i++;
      video.src = videoPaths[inUseQueue[i]];
      changeVideoTitle();
      video.play();
      }
   }

   function prevVideo(){
      if(i <= 0){
         video.pause();
      }else{
      i--;
      video.src = videoPaths[inUseQueue[i]];
      changeVideoTitle();
      video.play();
      }
   }
   
   function changeVideoTitle(){
      videoTitle.text(videoNames[inUseQueue[i]]+ " ["+(i+1)+"/"+inUseQueue.length+"]");
   }

   function start(){
      i = 0;
      inUseQueue = queue;
      video.src = videoPaths[inUseQueue[i]];
      video.play();
   }

});

function getQueue(){
   var out = "";
   for(var x = 0;x < queue.length;x++){
      out += videoNames[queue[x]]+ ", ";
   }
   $(".queue").text(out);
}

function check(id){
   var checkBox = $("#"+id);
   console.log();
   if(checkBox.is(':checked')){
      var match = false;
      for(var x = 0;x < queue.length;x++){
         if(queue[x] == id){
            match = true;
         }
      }
      if(match != true){
      queue.push(id);
      }
   }
   else if(checkBox.is(':checked') == false){
      for(var x = 0;x < queue.length;x++){
         if(queue[x] == id){
            var up = [];
            for(var a = 0;a < queue.length;a++){
               if(queue[a] != queue[x]){
                  up.push(queue[a]);
               }
            }
            queue = up;
         }
      }
   }
   getQueue();

 }