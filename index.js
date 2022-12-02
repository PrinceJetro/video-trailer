
const video_things=[
    {"picture": "thor.jfif", "title": "Thor: Love and Thunder", "preview":"Thor: Love and Thunder is a 2022 American superhero film based on Marvel Comics featuring the character Thor. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Thor: Ragnarok (2017) and the 29th film in the Marvel Cinematic Universe (MCU). The film was directed by Taika Waititi, who co-wrote the screenplay with Jennifer Kaytin Robinson, and stars Chris Hemsworth as Thor alongside Christian Bale, Tessa Thompson, Jaimie Alexander, Waititi, Kieron L. Dyer, Simon Russell Beale, Russell Crowe, and Natalie Portman. In the film, Thor attempts to find inner peace, but must return to action and recruit Valkyrie (Thompson), Korg (Waititi), and Jane Foster (Portman)—who is now the Mighty Thor—to stop Gorr the God Butcher (Bale) from eliminating all gods.", "video_link":"video.mp4"},
    {"picture": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQCSwy0tr3G-gkq0SUej9cb1EEQ-8xb12oPgOigzdqTIY2IdnNy", "title": "Ant-Man and the Wasp: Quantumania", "preview":"Ant-Man and the Wasp: Quantumania is an upcoming American superhero film based on Marvel Comics featuring the characters Scott Lang / Ant-Man and Hope Pym / Wasp. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is intended to be the sequel to Ant-Man (2015) and Ant-Man and the Wasp (2018) and the 31st film of the Marvel Cinematic Universe (MCU). The film is directed by Peyton Reed and written by Jeff Loveness, and stars Paul Rudd as Scott Lang and Evangeline Lilly as Hope van Dyne alongside Jonathan Majors, Kathryn Newton, Bill Murray, Michelle Pfeiffer, and Michael Douglas. In the film, Lang and van Dyne explore the Quantum Realm along with their family and face Kang the Conqueror (Majors).", "video_link":"https://www.youtube.com/embed/ZlNFpri-Y40"},
    {"picture": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm", "title": "Avatar: The Way of Water", "preview":"Avatar: The Way of Water is an upcoming American epic science fiction film directed by James Cameron and distributed by 20th Century Studios.[3] The sequel to Avatar (2009), it is the second installment in the Avatar film series. Cameron is producing the film with Jon Landau, and is writing the screenplay with Rick Jaffa and Amanda Silver, which is based on a story all three wrote with Josh Friedman and Shane Salerno. Cast members Sam Worthington, Zoe Saldaña, Stephen Lang, Joel David Moore, CCH Pounder, Giovanni Ribisi, Dileep Rao, and Matt Gerald reprise their roles from the original film, with Sigourney Weaver returning in a different role.[4] New cast members include Kate Winslet, Cliff Curtis, Edie Falco, Jemaine Clement, and Brendan Cowell.", "video_link":"https://www.youtube.com/embed/o5F8MOz_IDw"},
    {"picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Z_6poRGqbhXsv62QgLmsL69-8H_xcUZBSZLiWthgLQPZvqPi", "title": "John Wick: Chapter 4", "preview":"John Wick: Chapter 4[1] (alternatively stylized as JW4) is an upcoming American neo-noir action thriller film directed by Chad Stahelski and written by Shay Hatten and Michael Finch. The sequel to John Wick: Chapter 3 – Parabellum (2019), it is the fourth installment in the John Wick film series. Starring Keanu Reeves returning as the title character, filming took place in Berlin, Paris, Osaka and New York City from June to October 2021.The film will be theatrically released in the United States on March 24, 2023, by Lionsgate.[2] Originally set for release on May 21, 2021, the film was delayed due to both the COVID-19 pandemic and Reeves's commitments with The Matrix Resurrection", "video_link":"https://www.youtube.com/embed/qEVUtrk8_B4"},
    {"picture": "https://m.media-amazon.com/images/M/MV5BNWQ2MWU1ZWItYjkyNi00YmYwLWExMzAtZmZlMGNhMTg3OWI1XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg", "title": "Transformers: The  rise of the beasts", "preview":"Transformers: Rise of the Beasts is an upcoming American science fiction action film directed by Steven Caple Jr. Based on Hasbro's Transformers toy-line and primarily influenced by the Beast Wars storyline, it will be the seventh installment of the live-action Transformers film series and a sequel to Bumblebee (2018).[5] The film will star Anthony Ramos and Dominique Fishback, and will center around Optimus Prime in 1994 in Brooklyn, New York City and parts of Peru; such as Machu Picchu, Cusco, and Tarapoto, San Martín.[6]Transformers: Rise of the Beasts is scheduled to be released in the United States on June 9, 2023, by Paramount Pictures.", "video_link":"https://www.youtube.com/embed/S5ymRv6wk98"},
    {"picture": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBe-hZR9JTNmAZtv_qzR4J9XaCB6xrDEgqfN_v-oYZwUMEfTYu", "title": "The Guardian of the Galaxy Holiday Special", "preview":"The Guardians of the Galaxy Holiday Special is an American television special written and directed by James Gunn for the streaming service Disney+, based on Marvel Comics featuring the superhero team Guardians of the Galaxy. It is the second Marvel Studios Special Presentation in the Marvel Cinematic Universe (MCU), sharing continuity with the films and television series of the franchise. The special is produced by Marvel Studios, and follows the Guardians of the Galaxy as they celebrate Christmas and search for a present for their leader Peter Quill. The special was also produced by Troll Court Entertainment.", "video_link":"https://www.youtube.com/embed/C07UwxyFCgY"},
    {"picture": "https://cdn.myanimelist.net/images/anime/1031/131194.jpg", "title": "Mononogatari ", "preview":"Tsukumogami—spirits or marebito can possess objects of considerable age and gain a physical form. Although he is part of the Saenome clan that is in charge of peacefully sending them back to their own world, Hyouma Kunato despises them because one took away what was very precious to him. In order to cure him of this loathing, Hyouma's grandfather sends him to live with Botan Nagatsuki, a girl who is the master of six friendly tsukumogami and lives with them as a family.", "video_link":"https://www.youtube.com/embed/14svv63JdSc"},
    
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