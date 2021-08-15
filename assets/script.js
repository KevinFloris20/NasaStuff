const quearyUrl = "https://api.nasa.gov/planetary/apod?api_key=4INjsmvRu2ZfwkrdUPUbqk0cpCXP4fpvVQlN4qBw";
    $.ajax({
        url: quearyUrl,
        method: "GET"
    }).then(function(responce){
        console.log(responce);
        console.log(responce.hdurl);
        document.body.style.size = "auto";
        document.body.style.backgroundImage = "url("+responce.hdurl+")";
    })

console.log(window.devicePixelRatio)

