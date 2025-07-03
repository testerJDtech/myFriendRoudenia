const envelope = document.getElementById('envelope');
const letterContainer = document.getElementById('letterContainer');
const letterText = document.getElementById('letterText');

const message = `
Hi Roudenia 💖,

I just wanted to take a moment to remind you how amazing you are.

Your kindness brightens everyone's day, and your laughter is truly contagious.

You make the world more beautiful just by being in it.

Thank you for being YOU 💕

With love,
Your Friend 🌸
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
  flap.style.transform = 'rotateX(180deg)';
  setTimeout(() => {
    letterContainer.classList.remove('hidden');
    letterContainer.classList.add('visible');
    typeLetter();

    // Show reply form after message is typed
    setTimeout(() => {
      replySection.classList.remove('hidden');
    }, message.length * 40 + 500);
  }, 600);
});