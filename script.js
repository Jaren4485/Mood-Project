
var moodimages =["https://media3.giphy.com/media/5GoVLqeAOo6PK/giphy.gif", "https://media.tenor.com/images/b2034b756388e63aeecc89dc1705d043/tenor.gif", "https://media0.giphy.com/media/26uf6o80xhd6MKGIw/source.gif", "https://media.giphy.com/media/14urMYvFxIKEms/giphy.gif"];

$('button').click(function(){
    var input = $('input').val();
     $(".images").html("");
    if(input === "happy"){
         happyMood();
    } else if(input==="sad"){
        sadMood();
    }else if(input==="tired"){
        tiredMood();
    }else if(input==="aggravated"){
        aggravatedMood();
    }else{
     alert("Please enter sad, tired, aggravated, or happy!");  
     }
});
function happyMood(){
    changeBackground("yellow");
    changeTextColor("#ff0066");
    moodImages.forEach(function(moodImages){
     displayImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC30DqDElbNSm9hIo5u3GR9KimvY7wMGECPIujZqlliUZ_TxQNFg");
}

  
function sadMood(){
    changeBackground("grey");
    changeTextColor("red");
    displayImage("https://media1.giphy.com/media/d2lcHJTG5Tscg/giphy.gif");
    
}
  
function tiredMood(){
    changeBackground("#003399");
    changeTextColor("#9900ff");
    displayImage("https://media1.giphy.com/media/ZeijZbSFbVcq47fQBX/giphy.gif");
}

function aggravatedMood(){
    changeBackground("#cc0000");
    changeTextColor("#cc9900");
    displayImage("https://media3.giphy.com/media/3o7bu8mwh3U6SXtLjy/giphy.gif");
} 
  
  
  
  
  
  
  

function changeBackground(backgroundcolor){
    $('body').css('background-color',backgroundcolor);
}

function changeTextColor(color){
    $('body').css('color', color);
}

function displayImage(image){
    $('.images').append('<img src ='+ image + '>');

}