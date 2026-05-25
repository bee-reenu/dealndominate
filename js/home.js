// ===== home.js =====

const modals = {
  new: {
    title: '⚡ New Game',
    sub: 'Set up your game and invite friends',
    content: `
      <p class="modal-title">⚡ New Game</p>
      <p class="modal-sub">Configure and launch your game</p>
      <select class="modal-input">
        <option>Quick Play — 2 Players</option>
        <option>Quick Play — 3 Players</option>
        <option>Quick Play — 4 Players</option>
        <option>Tournament Mode</option>
      </select>
      <input class="modal-input" placeholder="Your display name" />
      <button class="modal-btn" onclick="startGame()">🚀 Start Game</button>
    `
  },
  join: {
    title: '🔗 Join Game',
    sub: 'Enter a room code to join a friend',
    content: `
      <p class="modal-title">🔗 Join Private Room</p>
      <p class="modal-sub">Enter the room code from your friend</p>
      <input class="modal-input" placeholder="Room code (e.g. DEAL-4821)" maxlength="12" style="text-transform:uppercase;letter-spacing:0.1em;font-family:'Cinzel',serif" />
      <input class="modal-input" placeholder="Your display name" />
      <button class="modal-btn" onclick="joinGame()">🎮 Join Room</button>
    `
  }
};

function showModal(type) {
  const overlay = document.getElementById('modal');
  const content = document.getElementById('modal-content');
  content.innerHTML = modals[type].content;
  overlay.classList.add('open');
}

function closeModal(e) {
  if (!e || e.target.id === 'modal' || e.target.classList.contains('modal-close')) {
    document.getElementById('modal').classList.remove('open');
  }
}

function startGame() {
  alert('🎮 Game launching... (connect your game logic here!)');
  closeModal();
}

function joinGame() {
  alert('🔗 Joining room... (connect your game logic here!)');
  closeModal();
}

// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal({});
});

// Animate sections on scroll
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  }),
  { threshold: 0.1 }
);

document.querySelectorAll('.mode-card, .step, .lb-row:not(.lb-header)').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
