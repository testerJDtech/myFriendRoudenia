const envelope = document.getElementById('envelope');
const letterContainer = document.getElementById('letterContainer');
const letterText = document.getElementById('letterText');

const message = `
Hi Roudenia 💖,

I just wanted to say a few quick things but doing it outside of the box.

1. Thank you for loving God with everything you have. If you have feel like you don't then just look back at your testimony and that will keep your grateful.

2. Thank you for being a disciple. No matter how difficult things have gotten, you are still here. 

3. Thank you for using your talent to build up God's kingdom. God has placed you exactly where placed, he is very much intentional!

4. Thank you for being a great friend to anyone and everyone. God's kingdom is blessed to have you.

5. Thank you for just being Roudenia and not trying to be anyone that God hasn't made you to be!

I'm more than grateful for our friendship and just for your life.

Stay fired up sis, keep loving God and really embrace the woman that God is making you into 🤩!

With love,
Your Brother from London
`;

let index = 0;

function typeLetter() {
  if (index < message.length) {
    letterText.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeLetter, 40);
  }
}

const replySection = document.getElementById('replySection');
const replyForm = document.getElementById('replyForm');
const confirmationMsg = document.getElementById('confirmationMsg');

replyForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload
  replyForm.classList.add('hidden');
  confirmationMsg.classList.remove('hidden');
});

envelope.addEventListener('click', () => {
  setTimeout(() => {
    letterContainer.classList.remove('hidden');
    letterContainer.classList.add('visible', 'fade-in', 'slide-up');
    typeLetter();

    // Show reply form after message is typed
    setTimeout(() => {
      replySection.classList.remove('hidden');
      replySection.classList.add('fade-in', 'slide-up');
    }, message.length * 40 + 500);
  }, 100);
});

