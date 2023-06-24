
const video_things=[
    {"picture": "https://tvline.com/wp-content/uploads/2023/02/the-marvels-poster-ms-marvel.png?w=620&h=420&crop=1", "title": "The Marvels", "preview":"The Marvels is an upcoming American superhero film based on Marvel Comics featuring the characters Carol Danvers / Captain Marvel, Monica Rambeau, and Kamala Khan / Ms. Marvel. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is intended to be the sequel to the film Captain Marvel (2019), a continuation of the television miniseries Ms. Marvel (2022), and the 33rd film in the Marvel Cinematic Universe (MCU). ", "video_link":"https://www.youtube.com/embed/iuk77TjvfmE"},
    {"picture": "https://sportshub.cbsistatic.com/i/2022/12/03/9a3b4a83-806b-4cc3-b242-d822c7cd8da3/blue-beetle-poster.jpg","title":"Blue Beetle","preview":"Blue Beetle is an upcoming American superhero film based on the DC Comics character Jaime Reyes / Blue Beetle, produced by DC Studios and the Safran Company, and directed by Angel Manuel Soto from a screenplay by Gareth Dunnet-Alcocer. It is intended to be the 14th film in the DC Extended Universe (DCEU). The film stars Xolo Maridueña as Jaime Reyes / Blue Beetle alongside Adriana Barraza, Damián Alcázar, Raoul Max Trujillo, Susan Sarandon, and George Lopez.","video_link":"https://www.youtube.com/embed/vS3_72Gb-bI" },
    {"picture": "https://m.media-amazon.com/images/M/MV5BZjAzN2UzNzktNjUyMC00MDhjLTkxNGUtYWRhMzY0MDhiMmNjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg", "title":"The Meg 2: The Trench","preview":"Meg 2: The Trench is an upcoming science fiction action-horror film directed by Ben Wheatley from a screenplay by Jon Hoeber, Erich Hoeber, and Dean Georgaris, based on the 1999 novel The Trench by Steve Alten. Serving as the sequel to The Meg (2018), the film stars Jason Statham, Wu Jing, Sophia Cai, Page Kennedy, Sergio Peris-Mencheta, Skyler Samuels, and Cliff Curtis.", "video_link":"https://www.youtube.com/embed/dG91B3hHyY4"},
]


function showVideo(){
    document.getElementById("video-container").style.display="block";
    document.getElementById("main").style.display="none";

}

function c(){
    location.reload()
    
}
fill();
function fill(){
    document.getElementById('first-pic').src=video_things[0].picture;
    document.getElementById('first-title').innerText=video_things[0].title;
    document.getElementById('first-preview').innerText=video_things[0].preview;  


    
    document.getElementById('second-pic').src=video_things[1].picture;
    document.getElementById('second-title').innerText=video_things[1].title;
    document.getElementById('second-preview').innerText=video_things[1].preview;  
    

    document.getElementById('third-pic').src=video_things[2].picture;
    document.getElementById('third-title').innerText=video_things[2].title;
    document.getElementById('third-preview').innerText=video_things[2].preview;  


    document.getElementById('fourth-pic').src=video_things[3].picture;
    document.getElementById('fourth-title').innerText=video_things[3].title;
    document.getElementById('fourth-preview').innerText=video_things[3].preview;  


    document.getElementById('fifth-pic').src=video_things[4].picture;
    document.getElementById('fifth-title').innerText=video_things[4].title;
    document.getElementById('fifth-preview').innerText=video_things[4].preview;  


    document.getElementById('sixth-pic').src=video_things[5].picture;
    document.getElementById('sixth-title').innerText=video_things[5].title;
    document.getElementById('sixth-preview').innerText=video_things[5].preview;  


    document.getElementById('seventh-pic').src=video_things[6].picture;
    document.getElementById('seventh-title').innerText=video_things[6].title;
    document.getElementById('seventh-preview').innerText=video_things[6].preview;  
    

    document.getElementById('eighth-pic').src=video_things[7].picture;
    document.getElementById('eighth-title').innerText=video_things[7].title;
    document.getElementById('eighth-preview').innerText=video_things[7].preview;  



}

function first(){
    document.getElementById("video-container").style.display="block";
    document.getElementById("main").style.display="none";
    document.getElementById('only-video').src=video_things[0].video_link;
    document.body.style.backgroundColor="black"
}
function second(){
    document.getElementById("video-container").style.display="block";
    document.getElementById("main").style.display="none";
    document.getElementById('only-video').src=video_things[1].video_link;
    document.body.style.backgroundColor="black"
}
function third(){
    document.getElementById("video-container").style.display="block";
    document.getElementById("main").style.display="none";
    document.getElementById('only-video').src=video_things[2].video_link;
    document.body.style.backgroundColor="black"
}
function fourth(){
    document.getElementById("video-container").style.display="block";
    document.getElementById("main").style.display="none";
    document.getElementById('only-video').src=video_things[3].video_link;
    document.body.style.backgroundColor="black"
}

function fifth(){
    document.getElementById("video-container").style.display="block";
    document.getElementById("main").style.display="none";
    document.getElementById('only-video').src=video_things[4].video_link;
    document.body.style.backgroundColor="black"
}

function sixth(){
    document.getElementById("video-container").style.display="block";
    document.getElementById("main").style.display="none";
    document.getElementById('only-video').src=video_things[5].video_link;
    document.body.style.backgroundColor="black"
}

function seventh(){
    document.getElementById("video-container").style.display="block";
    document.getElementById("main").style.display="none";
    document.getElementById('only-video').src=video_things[6].video_link;
    document.body.style.backgroundColor="black"
}