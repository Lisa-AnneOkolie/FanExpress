/* ============ RESOLVE WHICH CELEBRITY TO SHOW ============ */
const params = new URLSearchParams(window.location.search);
const slug = params.get('c');
const celeb = getCelebBySlug(slug);

const profileRoot = document.getElementById('profileRoot');
const moreGrid = document.getElementById('moreGrid');
const stickyWa = document.getElementById('stickyWa');

if(!celeb){
  /* ============ FALLBACK: NO / UNKNOWN CELEBRITY ============ */
  profileRoot.innerHTML = `
    <div class="text-center py-24 reveal">
      <p class="mono text-xs tracking-[0.3em] mb-4" style="color:var(--accent-pink)">PROFILE NOT FOUND</p>
      <h1 class="display text-3xl md:text-5xl mb-6">This Star Isn't<br>Listed Yet.</h1>
      <p class="max-w-md mx-auto mb-8" style="color:var(--text-muted)">The celebrity you're looking for doesn't have a FanExpress profile at this link. Explore our full roster instead.</p>
      <a href="index.html#celebrities" class="btn-primary px-7 py-4 rounded-full font-bold text-sm inline-block">Explore Celebrities</a>
    </div>
  `;
  document.title = "Profile Not Found — FanExpress";
} else {
  document.title = `${celeb.name} — FanExpress`;
  stickyWa.dataset.msg = `Hello FanExpress, I'd like to know more about ${celeb.name}. Please assist me.`;

  const coverStyle = celeb.cover
    ? `background: linear-gradient(120deg,#3a1450,#12081f 60%);`
    : `background: linear-gradient(120deg,#3a1450,#12081f 60%);`;

  profileRoot.innerHTML = `
    <a href="index.html#celebrities" class="inline-flex items-center gap-2 text-sm font-bold mb-6 reveal" style="color:var(--text-muted)">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      Back to FanExpress
    </a>

    <div class="card rounded-3xl overflow-hidden reveal mb-14">
      <div class="h-40 md:h-56 relative" style="${coverStyle}">
        ${celeb.cover ? `<img src="${celeb.cover}" alt="" class="absolute inset-0 w-full h-full object-cover opacity-40">` : ''}
      </div>
      <div class="px-6 md:px-10 pb-10">
        <div class="flex flex-col md:flex-row md:items-end gap-5 -mt-14 md:-mt-16 mb-8">
          <img src="${celeb.avatar}" alt="${celeb.name}" class="w-28 h-28 rounded-2xl object-cover border-4" style="border-color:var(--surface)">
          <div class="flex-1">
            <div class="flex items-center gap-2 flex-wrap">
              <h1 class="display text-2xl md:text-3xl">${celeb.name}</h1>
              <span class="text-xs px-2 py-1 rounded-full gradient-bg text-[#160A1F] font-bold">✓ Verified</span>
            </div>
            <p class="text-sm" style="color:var(--text-muted)">${celeb.category} · ${celeb.tagline}</p>
          </div>
          <button class="waBtn whatsapp-btn px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 self-start md:self-auto" data-msg="Hello FanExpress, I'd like to subscribe to ${celeb.name}. Please assist me.">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.32 4.95L2 22l5.24-1.37a9.9 9.9 0 004.8 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm0 18.18h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.23 8.23 0 01-1.26-4.37c0-4.55 3.7-8.25 8.25-8.25 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 012.42 5.83c0 4.55-3.71 8.22-8.27 8.22zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14 0-.31-.01-.47-.01-.16 0-.43.06-.66.31-.22.24-.86.85-.86 2.06 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/></svg>
            Chat With Us
          </button>
        </div>

        <p class="mb-6 max-w-2xl" style="color:var(--text-muted)">${celeb.about}</p>

        <div class="flex gap-4 flex-wrap text-sm">
          ${celeb.socials.map(s => `<span class="mono" style="color:var(--text-muted)">🔗 ${s.label} <span class="opacity-60">(${s.handle})</span></span>`).join('')}
        </div>
      </div>
    </div>

    <div class="mb-16">
      <span class="mono text-xs tracking-[0.3em]" style="color:var(--accent-gold)">MEMBERSHIP PLANS</span>
      <h2 class="display text-2xl md:text-4xl mt-3 mb-8 reveal">Get Closer To ${celeb.name.split(' ')[0]}.</h2>
      <div id="profileMemberships" class="grid md:grid-cols-3 gap-6"></div>
    </div>

    <div class="mb-16 grid lg:grid-cols-2 gap-12 items-center">
      <div class="reveal order-2 lg:order-1">
        <span class="mono text-xs tracking-[0.3em]" style="color:var(--accent-cyan)">DIGITAL FAN CARD</span>
        <h2 class="display text-2xl md:text-4xl mt-3 mb-5">Your Proof Of<br>Access To ${celeb.name.split(' ')[0]}.</h2>
        <p class="mb-6 max-w-md" style="color:var(--text-muted)">Subscribe to any tier and receive a personal holographic fan card — your unique ID, QR code, and verification badge, all in one place.</p>
        <button class="waBtn btn-primary px-7 py-4 rounded-full font-bold text-sm" data-msg="Hello FanExpress, I'd like to request my Fan Card for ${celeb.name}. Please assist me with registration.">Request My Fan Card</button>
      </div>
      <div class="order-1 lg:order-2 flex justify-center reveal">
        <div class="fan-pass w-72 md:w-80 p-6" id="profileFanCard">
          <div class="notch" style="left:calc(50% - 12px)"></div>
          <div class="relative z-10">
            <div class="flex justify-between items-start mb-8">
              <span class="mono text-[10px] tracking-widest" style="color:var(--accent-cyan)">FANEXPRESS PASS</span>
              <div class="grommet"></div>
            </div>
            <p class="mono text-[10px] text-white/50 mb-1">FOR</p>
            <p class="display text-2xl text-white leading-tight mb-1">${celeb.name.toUpperCase()}</p>
            <p class="mono text-[10px] text-white/60">TIER: VIP · #FX-${String(Math.abs(hashCode(celeb.slug)) % 90000 + 10000)}</p>
            <div class="flex items-end justify-between mt-10">
              <div class="qr-fake" id="profileQr"></div>
              <div class="text-right">
                <p class="mono text-[9px] text-white/50">ISSUED 07/2026</p>
                <p class="mono text-[9px] text-white/50">EXPIRES 07/2027</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-16">
      <span class="mono text-xs tracking-[0.3em]" style="color:var(--accent-pink)">MERCHANDISE</span>
      <h2 class="display text-2xl md:text-4xl mt-3 mb-8 reveal">Official ${celeb.name.split(' ')[0]} Gear.</h2>
      <div id="profileMerch" class="grid sm:grid-cols-2 gap-6"></div>
    </div>

    <div class="mb-16">
      <span class="mono text-xs tracking-[0.3em]" style="color:var(--accent-gold)">UPCOMING EVENTS</span>
      <h2 class="display text-2xl md:text-4xl mt-3 mb-8 reveal">See ${celeb.name.split(' ')[0]} Live.</h2>
      <div id="profileEvents" class="grid gap-6"></div>
    </div>

    <div>
      <span class="mono text-xs tracking-[0.3em]" style="color:var(--accent-cyan)">FAN REVIEWS</span>
      <h2 class="display text-2xl md:text-4xl mt-3 mb-8 reveal">What Fans Say.</h2>
      <div id="profileReviews" class="grid md:grid-cols-2 gap-6"></div>
    </div>
  `;

  /* ============ MEMBERSHIPS ============ */
  const membershipsGrid = document.getElementById('profileMemberships');
  celeb.memberships.forEach((m, i) => {
    const featured = m.tier === 'Premium';
    membershipsGrid.insertAdjacentHTML('beforeend', `
      <div class="ticket rounded-3xl p-8 reveal ${featured ? 'gradient-ring' : 'card'}" ${featured ? 'style="padding:2px;"' : ''}>
        <div class="${featured ? 'rounded-[22px] p-8 h-full' : ''}" style="${featured ? 'background:var(--surface);' : ''}">
          ${featured ? '<span class="text-xs font-bold px-3 py-1 rounded-full gradient-bg text-[#160A1F] inline-block mb-4">MOST POPULAR</span>' : ''}
          <p class="mono text-xs tracking-widest mb-2" style="color:var(--text-muted)">${m.tier.toUpperCase()}</p>
          <p class="display text-4xl mb-4">${m.price}<span class="text-sm" style="color:var(--text-muted)">/mo</span></p>
          <p class="text-sm mb-8" style="color:var(--text-muted)">${m.perk}</p>
          <button class="waBtn w-full py-3 rounded-full font-bold text-sm ${featured ? 'btn-primary' : 'btn-ghost'}" data-msg="Hello FanExpress, I'd like to subscribe to ${celeb.name}'s ${m.tier} plan. Please assist me.">Subscribe</button>
        </div>
      </div>
    `);
  });

  /* ============ MERCHANDISE ============ */
  const merchGrid = document.getElementById('profileMerch');
  celeb.merch.forEach(p => {
    merchGrid.insertAdjacentHTML('beforeend', `
      <div class="card rounded-3xl p-6 reveal flex gap-5 items-center">
        <div class="w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center text-4xl" style="background:linear-gradient(135deg, var(--surface-2), var(--bg-soft))">${p.icon}</div>
        <div class="flex-1">
          <div class="flex items-start justify-between mb-1">
            <h3 class="font-bold">${p.name}</h3>
            <span class="mono font-bold gradient-text">${p.price}</span>
          </div>
          <p class="text-sm mb-4" style="color:var(--text-muted)">${p.desc}</p>
          <button class="waBtn whatsapp-btn px-5 py-2.5 rounded-full text-xs font-bold" data-msg="Hello FanExpress, I'd like to order the ${p.name}.">Buy</button>
        </div>
      </div>
    `);
  });

  /* ============ EVENTS ============ */
  const eventsGrid = document.getElementById('profileEvents');
  celeb.events.forEach(e => {
    eventsGrid.insertAdjacentHTML('beforeend', `
      <div class="card rounded-3xl p-7 flex items-center justify-between gap-4 flex-wrap reveal">
        <div>
          <span class="text-xs px-2 py-1 rounded-full gradient-bg text-[#160A1F] font-bold">${e.type}</span>
          <h3 class="font-bold text-lg mt-3">${e.title}</h3>
          <p class="text-sm" style="color:var(--text-muted)">${e.place} · ${e.date}</p>
        </div>
        <button class="waBtn btn-ghost px-5 py-3 rounded-full text-sm font-bold whitespace-nowrap" data-msg="Hello FanExpress, I'd like to reserve a spot for ${e.title}.">Reserve</button>
      </div>
    `);
  });

  /* ============ REVIEWS ============ */
  const reviewsGrid = document.getElementById('profileReviews');
  celeb.reviews.forEach(r => {
    reviewsGrid.insertAdjacentHTML('beforeend', `
      <div class="card rounded-3xl p-7 reveal">
        <p class="mb-5" style="color:var(--text-muted)">"${r.quote}"</p>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full gradient-bg flex items-center justify-center font-bold text-sm text-[#160A1F]">${r.name.charAt(0)}</div>
          <div>
            <p class="font-bold text-sm">${r.name}</p>
            <p class="text-xs" style="color:var(--accent-gold)">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</p>
          </div>
        </div>
      </div>
    `);
  });

  paintQr(document.getElementById('profileQr'), 4, 6);
  attachTilt(document.getElementById('profileFanCard'));
}

/* ============ MORE CELEBRITIES ============ */
const others = celebrities.filter(c => c.slug !== slug);
others.forEach(c => {
  moreGrid.insertAdjacentHTML('beforeend', `
    <div class="card rounded-3xl overflow-hidden group reveal">
      <div class="relative h-56 overflow-hidden">
        <img src="${c.avatar}" alt="${c.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
        <span class="absolute top-4 left-4 text-xs px-2 py-1 rounded-full glass font-semibold">✓ Verified</span>
        <span class="absolute top-4 right-4 text-xs px-2 py-1 rounded-full gradient-bg text-[#160A1F] font-bold">${c.category}</span>
      </div>
      <div class="p-6">
        <h3 class="font-bold text-lg mb-1">${c.name}</h3>
        <p class="text-sm mb-4" style="color:var(--text-muted)">${c.bio}</p>
        <div class="flex items-center justify-between">
          <span class="mono text-xs" style="color:var(--text-muted)">From ${c.price}</span>
          <a href="profile.html?c=${c.slug}" class="text-xs font-bold px-4 py-2 rounded-full btn-ghost inline-block">View Profile</a>
        </div>
      </div>
    </div>
  `);
});

function hashCode(str){
  let hash = 0;
  for(let i=0;i<str.length;i++){
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

initReveal();
