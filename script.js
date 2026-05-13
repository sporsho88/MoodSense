let moodIndex = {
  happy: 0,
  sad: 0,
  motivated: 0,
  relaxed: 0
};

function randomQuote(list){
  return list[Math.floor(Math.random() * list.length)];
}

function setMood(mood){
  let quote = document.getElementById("quote");
  let music = document.getElementById("music");

  document.body.className = "";
  document.body.classList.add("mood-" + mood);

  quote.classList.remove("show");
  quote.style.transform = "translateY(20px)";

  let quotes = [];
  let musicList = [];

  // ---------------- HAPPY ----------------
  if (mood === "happy"){
    quotes = [
      "Happiness blooms within 🌼",
      "Let life surround you with smiles!",
      "Today is a good day for joy 😊"
    ];
    musicList = [
      "https://www.youtube.com/watch?v=BddP6PYo2gs",  // Kesariya – Brahmastra
      "https://www.youtube.com/watch?v=jFGKJBPFdUA",  // Apna Time Aayega – Gully Boy
      "https://www.youtube.com/watch?v=9iIX4PBplAY"   // Kar Har Maidaan Fateh – Sanju
    ];
    music.innerText = "🎵 Happy Playlist";
  }

  // ---------------- SAD ----------------
  if (mood === "sad"){
    quotes = [
      "Even storms pass with time.",
      "Tears water the seeds of strength.",
      "Heartbreak leads to growth."
    ];
    musicList = [
     "https://www.youtube.com/watch?v=8erle22S6x0&list=RD8erle22S6x0&start_radio=1",
     "https://www.youtube.com/watch?v=-2RAq5o5pwc&list=RD8erle22S6x0&index=6" 
    ];
    music.innerText = "🎵 Sad Playlist";
  }

  // ---------------- MOTIVATED ----------------
  if (mood === "motivated"){
    quotes = [
      "Be relentless. Be unstoppable!",
      "Power comes from within 🔥",
      "Drive your dreams forward!"
    ];
    musicList = [
      "https://www.youtube.com/watch?v=jFGKJBPFdUA", // Apna Time Aayega – Gully Boy
      "https://www.youtube.com/watch?v=9iIX4PBplAY", // Kar Har Maidaan Fateh – Sanju
      "https://www.youtube.com/watch?v=PElhNWHhN5E"  // Zinda – Bhaag Milkha Bhaag
    ];
    music.innerText = "🎵 Motivational Playlist";
  }

  // ---------------- RELAXED ----------------
  if (mood === "relaxed"){
    quotes = [
      "Relax. Refresh. Rejuvenate 🌿",
      "Silence heals the soul.",
      "Peace begins with a calm heart."
    ];
    musicList = [
      "https://www.youtube.com/watch?v=KQ6zr6kCPj8",  // Raabta – Agent Vinod
      "https://www.youtube.com/watch?v=UxxajLWwzqY",  // Dil Diyan Gallan – Tiger Zinda Hai
      "https://www.youtube.com/watch?v=yf3Z66S5VQo"   // Jeene Laga Hoon – Ramaiya Vastavaiya
    ];
    music.innerText = "🎵 Relaxing Playlist";
  }

  // ---------------- DISPLAY QUOTE ----------------
  setTimeout(()=>{
    quote.innerText = randomQuote(quotes);
    quote.classList.add("show");
  }, 150);

  // ---------------- PLAY MUSIC SEQUENTIALLY ----------------
  let currentIndex = moodIndex[mood];
  music.href = musicList[currentIndex];
  moodIndex[mood] = (currentIndex + 1) % musicList.length;

  // ---------------- EMOJI EFFECT ----------------
  let emojiSymbols = { happy:"😊", sad:"😢", motivated:"🔥", relaxed:"🌿" };
  let numEmojis = 20;
  
  for(let i=0; i<numEmojis; i++){
    let emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.innerText = emojiSymbols[mood];
    emoji.style.left = Math.random()*(window.innerWidth-50)+"px";
    emoji.style.top = window.innerHeight+"px";
    emoji.style.fontSize = (20 + Math.random()*25)+"px";
    let duration = 3 + Math.random()*3;
    emoji.style.animation = `float ${duration}s linear forwards`;
    emoji.style.opacity = 0.7 + Math.random()*0.3;

    document.body.appendChild(emoji);
    setTimeout(()=>{emoji.remove();}, duration*1000);
  }
}




// SIGNUP

function signup(){

let user=document.getElementById("newUser").value;
let email=document.getElementById("newEmail").value;
let pass=document.getElementById("newPass").value;

let data={
username:user,
email:email,
password:pass
};

localStorage.setItem("userData",JSON.stringify(data));

alert("Account Created");

window.location.href="login.html";

}


// LOGIN

function login(){

let user=document.getElementById("loginUser").value;
let pass=document.getElementById("loginPass").value;

let stored=JSON.parse(localStorage.getItem("userData"));

if(user==stored.username || user==stored.email){

if(pass==stored.password){

localStorage.setItem("login","true");

window.location.href="index.html";

}

else{
alert("Wrong Password");
}

}

else{
alert("User not found");
}

}


// SHOW USERNAME

if(document.getElementById("showUser")){

let stored=JSON.parse(localStorage.getItem("userData"));

document.getElementById("showUser").innerText=stored.username;

}


// LOGOUT

function logout(){

localStorage.removeItem("login");

window.location.href="login.html";

}


