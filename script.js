
const openButton = document.getElementById("openButton");
const letter = document.getElementById("letter");
const typedText = document.getElementById("typedText");
const secretMessage = document.getElementById("secretMessage");
const surpriseButton = document.getElementById("surpriseButton");
const surprise = document.getElementById("surprise");

// Change this letter to your own words!
const loveLetter = `Hey, bubbaaaa ♡

Happyyyyyy 39th monthsaryyy, my soon to be wifeeeee!! ♡

If you're reading this, I hope it makes you smile, even just a little bit, because that's one of the things I always want to do, make you smile and remind you how much you mean to me.

I made this little corner just for you because sometimes, I feel like words aren't enough to express how much I love you and how grateful I am to have you in my life. 39 months with you, and I still want more, more memories, more moments with you, more laughs, and more reasons to fall in love with you all over again.

I want you to know that you don't have to be perfect for me, and you don't always have to pretend that you're okay. On the days when things get hard, I hope you remember that you have me, someone who wants to understand you, listen to you, and stay by your side through the good and bad days. I want to keep learning more about you, even the little things, and keep loving you in ways that make you feel safe, appreciated, and loved.

Even if we're having an ordinary day or we're far away from each other, I hope you never forget how special you are to me. You make me happy in ways I can't always explain, and I'm so thankful that out of all the people in this world, I get to love you and call you mineee. Hehe, still can't believe I get to say that after 39 months. 

Happy 39th monthsary, bubbaaaa. Thank you for being part of my life and for giving me so many reasons to smile. I know we won't always have perfect days, but I hope we keep choosing each other, growing together, and making more memories that we'll look back on someday with the biggest smiles. I still have so much love to give you, and I hope I get to keep showing you that, not just through my words but through my actions too.

I love you so, so much, my bubbaaaa. Here's to more monthsaries, more memories, more kulit moments, and more of us. Always remember that you have a special place in my heart that no one else could ever take. You're my loveee, my favorite person, and the one I want to keep making happy. I love youuu, always and in all ways. ♡`;

// Type the letter one character at a time.
let typingTimer;

function typeLetter() {
  let index = 0;
  typedText.textContent = "";

  clearInterval(typingTimer);

  typingTimer = setInterval(() => {
    typedText.textContent += loveLetter[index];
    index++;

    if (index >= loveLetter.length) {
      clearInterval(typingTimer);
    }
  }, 32);
}

// Open the envelope.
openButton.addEventListener("click", () => {
  openButton.classList.add("hidden");
  letter.classList.remove("hidden");

  typeLetter();

  letter.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// Secret messages for different moments.
const messages = {
  miss: "I wish I could be beside you right now, hold your hand, and give you the biggest hug. Until then, imagine me giving you one through this little screen. I'm thinking of you, my love. ♡",

  sad: "You don't have to have everything figured out today. It's okay to rest, to feel things, and to take your time. Please be gentle with yourself. You deserve the same kindness you give to everyone else. I'm cheering for you, always. ♡",

  love: "In case nobody has reminded you today, you matter so much. Your smile, your heart, your little habits, and all the things that make you who you are mean so much to me. You are loved, more than this tiny screen could ever explain. ♡"
};

document.querySelectorAll("[data-message]").forEach(button => {
  button.addEventListener("click", () => {
    const key = button.dataset.message;

    secretMessage.textContent = messages[key];
    secretMessage.classList.remove("hidden");

    secretMessage.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });

    createHearts(8);
  });
});

// Reveal the final surprise.
surpriseButton.addEventListener("click", () => {
  surprise.classList.remove("hidden");
  surpriseButton.classList.add("hidden");

  createHearts(25);

  surprise.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

// Create floating hearts.
const heartContainer = document.getElementById("hearts");

function createHearts(amount = 1) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");

    heart.className = "heart-particle";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";
    heart.style.opacity = 0.4 + Math.random() * 0.5;
    heart.style.color = Math.random() > 0.5
      ? "#e879a3"
      : "#b99be8";

    const duration = 4 + Math.random() * 4;
    heart.style.animationDuration = duration + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => heart.remove(), duration * 1000);
  }
}


const irisSong = document.getElementById("irisSong");

// Play the music when she opens the envelope.
openButton.addEventListener("click", async () => {
  try {
    irisSong.volume = 0.5;
    await irisSong.play();
    console.log("Music is playing! ♡");
  } catch (error) {
    console.error("Music could not play:", error);
  }
})


// Gently float hearts in the background.
setInterval(() => createHearts(1), 850);
