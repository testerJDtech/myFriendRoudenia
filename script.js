const envelope = document.getElementById('envelope');
const letterContainer = document.getElementById('letterContainer');
const letterText = document.getElementById('letterText');

const message = `
Hi Roudenia 💖,

I just wanted to say a few quick things but doing it outside of the box.

1. Thank you for loving God with everything you have. If you have feel like you don't then just look back at your testimony and that will keep your grateful.

2. Thank you for being a disciple. No matter how difficult things have gotten, you are still here. 

3. Thank you for using your talent to build up God's kingdom. God has placed you exactly where he knows you need to be, he is very much intentional!

4. Thank you for being a great friend to anyone, everyone and me. God's kingdom is blessed to have you.

5. Thank you for just being Roudenia and not trying to be anyone that God hasn't made you to be!

I'm more than grateful for our friendship and just for your life.

Stay fired up sis, keep loving God and really embrace the woman that God is making you into 🤩!

Love you with the Love of the Lord,
Your Brother from London😎
`;

let index = 0;

function typeLetter() {
  if (index < message.length) {
    letterText.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeLetter, 40);
  }
}

envelope.addEventListener('click', () => {
  setTimeout(() => {
    letterContainer.classList.remove('hidden');
    letterContainer.classList.add('visible', 'fade-in', 'slide-up');
    typeLetter();
  }, 100);
});
