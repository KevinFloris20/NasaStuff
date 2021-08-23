//Get Nasa API and make it background
const quearyUrl = "https://api.nasa.gov/planetary/apod?api_key=4INjsmvRu2ZfwkrdUPUbqk0cpCXP4fpvVQlN4qBw";
function NasaBackground(){
    console.log('yo');
    $.ajax({
        url: quearyUrl,
        method: "GET"
    }).then(function(responce){
        console.log(responce);
        console.log(responce.hdurl);
        document.body.style.size = "auto";
        document.body.style.backgroundImage = "url("+responce.hdurl+")";
    })
}
NasaBackground();

console.log(window.devicePixelRatio)//for personal ref

//animate and make the collapsible buttons functional
const coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      NasaBackground();
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      NasaBackground();
    } 
  });
}

