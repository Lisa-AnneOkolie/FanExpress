/* ============ CONFIG ============ */
// Replace with the real business WhatsApp number, digits only, country code first (no + or spaces).
const WHATSAPP_NUMBER = "2340000000000";

function waLink(message){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.waBtn');
  if(!btn) return;
  window.open(waLink(btn.dataset.msg || "Hello FanExpress, I'd like more information. Please assist me."), '_blank');
});

const waNavBtn = document.getElementById('waNavBtn');
if(waNavBtn){
  waNavBtn.addEventListener('click', () => {
    window.open(waLink("Hello FanExpress, I'd like to join FanExpress. Please assist me."), '_blank');
  });
}

/* ============ THEME TOGGLE ============ */
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const iconMoon = document.getElementById('iconMoon');
const iconSun = document.getElementById('iconSun');
function applyTheme(t){
  root.classList.toggle('light', t === 'light');
  if(iconMoon) iconMoon.classList.toggle('hidden', t === 'light');
  if(iconSun) iconSun.classList.toggle('hidden', t !== 'light');
}
const savedTheme = localStorage.getItem('fx-theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
applyTheme(savedTheme);
if(themeToggle){
  themeToggle.addEventListener('click', () => {
    const next = root.classList.contains('light') ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('fx-theme', next);
  });
}

/* ============ MOBILE MENU ============ */
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if(menuBtn && mobileMenu){
  menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));
}

/* ============ FAKE QR PATTERNS ============ */
function paintQr(el, seed, cols){
  if(!el) return;
  const n = (cols || 6) * (cols || 6);
  el.style.gridTemplateColumns = `repeat(${cols || 6},1fr)`;
  let html = '';
  for(let i=0;i<n;i++){
    const on = ((i * 7 + (seed || 0)) % 5) < 2;
    html += `<span style="opacity:${on ? 1 : 0}"></span>`;
  }
  el.innerHTML = html;
}

/* ============ FAN CARD TILT ============ */
function attachTilt(el){
  if(!el) return;
  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--tiltY', `${x * 16}deg`);
    el.style.setProperty('--tiltX', `${-y * 16}deg`);
  });
  el.addEventListener('mouseleave', () => {
    el.style.setProperty('--tiltX', '0deg');
    el.style.setProperty('--tiltY', '0deg');
  });
}

/* ============ SCROLL REVEAL ============ */
function initReveal(){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}
