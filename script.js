var videoPaths = ["videos/v1.mp4","videos/v2.mp4","videos/v3.mp4","videos/v4.mp4","videos/v5.mp4","jhk.mp4","ghjgkh"];
var videoNames = ["Count to 3","StickMan","Colors","Bird","Wellerman","Test","hjkhljhk"];
var videoImage = ["img/v1.png","img/v2.png","img/win.jpg","img/v4.png","img/well.jpg","img/win.jpg","ghjkj"];
var videoText = ["Count","moving stickman","colors","cute bird","music"];

var queue = [];
var inUseQueue = [];
var checkboxs;
$(document).ready(function(){

var videoTitle = $(".video-title");
var video = document.getElementById('video');
$("#next").click(nextVideo);
$("#prev").click(prevVideo);
//$("#start").click(start);
$(".b2").click(start);

var i = 0;

for(var b = 0;b < videoPaths.length;b++){
   var content = $('<div class="movie-list-item"><img class="movie-list-item-img" src="'+videoImage[b]+'" alt=""><span class="movie-list-item-title">'+videoNames[b]+'</span><p class="movie-list-item-desc">'+videoText[b]+'</p><button class="movie-list-item-button" id="b'+b+'" onclick="check(this.id)">ADD</button><input type="checkbox" style="display: none" id="'+b+'" value="1"></div>');//
   $(".movie-list").append(content);
}

checkboxs = $("input[type=checkbox]");
for(var a = 0;a < checkboxs.length;a++){
   checkboxs[a].checked = true;
}
console.log(checkboxs);

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
      $(".player").css("display","block");
      //$(".b2").css("display","none");
      i = 0;
      inUseQueue = queue;
      video.src = videoPaths[inUseQueue[i]];
      changeVideoTitle();
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
   var id_n = id.replace("b","");
   console.log(id);
  var checkBox = $("#"+id_n);
  console.log(checkBox.is(':checked'));
   if(checkBox.is(':checked')){
      checkboxs[id_n].checked = false;
      $("#b"+id_n).text("REMOVE");
      var match = false;
      for(var x = 0;x < queue.length;x++){
         if(queue[x] == id){
            match = true;
         }
      }
      if(match != true){
      queue.push(id_n);
      }
   }
   else if(checkBox.is(':checked') == false){
      checkboxs[id_n].checked = true;
      $("#b"+id_n).text("ADD");
      for(var x = 0;x < queue.length;x++){
         if(queue[x] == id_n){
            var up = [];
            for(var a = 0;a < queue.length;a++){
               if(queue[a] != queue[x]){
                  up.push(queue[a]);id_n
               }
            }
            queue = up;
         }
      }
   }
   getQueue();

 }