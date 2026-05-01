@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Inter:wght@400;500;600&family=Nosifer&display=swap');
@import "tailwindcss";

@theme {
  --font-serif: "Cinzel Decorative", serif;
  --font-scary: "Nosifer", cursive;
}

body {
  background-color: #020000;
  color: #a1a1aa;
  overflow-x: hidden;
  cursor: none; /* Replaced with custom cursor */
}

/* Custom glow utilities */
.text-glow-blood {
  text-shadow: 0 0 10px rgba(180, 0, 0, 0.8), 0 0 20px rgba(130, 0, 0, 0.6);
}

.text-glow-ethereal {
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.4), 0 0 30px rgba(200, 200, 255, 0.2);
}

.text-glow-intense {
  text-shadow: 0 0 15px rgba(255, 0, 0, 1), 0 0 30px rgba(255, 0, 0, 0.5);
}

.blood-drop-shadow {
  filter: drop-shadow(0 0 8px rgba(150, 0, 0, 0.9));
}

.noise-bg {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E");
}

.scanlines {
  background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.3));
  background-size: 100% 4px;
}

/* Animations */
.flicker {
  animation: text-flicker 4s infinite linear;
}
@keyframes text-flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; text-shadow: 0 0 10px rgba(255,0,0,0.8); }
  20%, 24%, 55% { opacity: 0.2; text-shadow: none; }
}

.ghostly-drift {
  animation: ghost-drift 20s infinite linear alternate;
}

@keyframes ghost-drift {
  0% { transform: translate(0, 0) scale(1); opacity: 0.1; }
  50% { transform: translate(50px, -100px) scale(1.2); opacity: 0.3; }
  100% { transform: translate(-50px, -50px) scale(0.8); opacity: 0.1; }
}

.ethereal-pulse {
  animation: ethereal-pulse 8s infinite ease-in-out;
}

@keyframes ethereal-pulse {
  0%, 100% { filter: blur(4px) opacity(0.2); }
  50% { filter: blur(12px) opacity(0.6); }
}

.spectral-apparition {
  animation: spectral-appear 15s infinite;
}

@keyframes spectral-appear {
  0%, 10%, 90%, 100% { opacity: 0; transform: translateY(20px) scale(0.9); }
  15%, 85% { opacity: 0.2; transform: translateY(0px) scale(1); }
  20%, 80% { opacity: 0.1; }
}

.heartbeat {
  animation: beat 1.5s infinite cubic-bezier(0.215, 0.610, 0.355, 1.000);
}
@keyframes beat {
  0%, 100% { transform: scale(1); filter: brightness(1); }
  10% { transform: scale(1.02); filter: brightness(1.2) drop-shadow(0 0 20px red); }
  20% { transform: scale(1); filter: brightness(1); }
  30% { transform: scale(1.04); filter: brightness(1.4) drop-shadow(0 0 30px red); }
  45% { transform: scale(1); filter: brightness(1); }
}

.shake:hover {
  animation: violent-shake 0.1s infinite;
}
@keyframes violent-shake {
  0% { transform: translate(2px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(0px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(2px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(2px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

/* Hide scrollbar */
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #020000;
}
::-webkit-scrollbar-thumb {
  background: #3a0000;
}
::-webkit-scrollbar-thumb:hover {
  background: #6a0000;
}
