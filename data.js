/* ============ SHARED CELEBRITY DATA ============ */
/* Used by index.html (grid preview) and profile.html (full profile). */
const celebrities = [
  {
    slug: "aria-nova",
    name: "Aria Nova",
    category: "Music",
    tagline: "Pop / Orchestral",
    bio: "Chart-topping vocalist blending pop with orchestral strings.",
    about: "Aria Nova is a chart-topping vocalist known for weaving orchestral strings through modern pop. Since her debut EP, she's built one of the most devoted fan communities on FanExpress — the Novanites.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&q=80",
    cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1400&q=70",
    price: "$9.99/mo",
    socials: [
      { label: "@arianova", handle: "Instagram" },
      { label: "Nova Sound", handle: "Label" },
      { label: "arianova.fx", handle: "Website" }
    ],
    memberships: [
      { tier: "Basic", price: "$6.99", perk: "Exclusive studio updates, Novanites community access, first-look single announcements." },
      { tier: "Premium", price: "$14.99", perk: "Behind-the-scenes Solaris Tour footage, early merch access, monthly live listening sessions." },
      { tier: "VIP", price: "$39.99", perk: "Personalized voice notes, priority tour tickets, digital membership certificate, merch discounts." }
    ],
    merch: [
      { name: "Solaris Tour Hoodie", price: "$58", icon: "👕", desc: "Heavyweight fleece, embroidered tour logo." },
      { name: "Signed Vinyl Album", price: "$65", icon: "💿", desc: "Hand-signed, individually numbered." }
    ],
    events: [
      { title: "Solaris Tour — Lagos", type: "Concert", place: "Eko Arena, Lagos", date: "Aug 14, 2026" }
    ],
    reviews: [
      { name: "Chidinma A.", quote: "Got my Aria Nova fan card in a day and front-row tickets before they were public. Feels legit.", stars: 5 }
    ]
  },
  {
    slug: "malik-reyes",
    name: "Malik Reyes",
    category: "Sports",
    tagline: "Basketball / Point Guard",
    bio: "All-star point guard turning assists into an art form.",
    about: "Malik Reyes is an all-star point guard celebrated for his court vision and clutch performances. Off the court, he's known for mentoring young athletes and sharing an unfiltered look at pro basketball life.",
    avatar: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&q=80",
    cover: null,
    price: "$12.99/mo",
    socials: [
      { label: "@malikreyes", handle: "Instagram" },
      { label: "Reyes Hoops Academy", handle: "Foundation" },
      { label: "malikreyes.fx", handle: "Website" }
    ],
    memberships: [
      { tier: "Basic", price: "$6.99", perk: "Post-game reflections, training-day photos, community shootaround chats." },
      { tier: "Premium", price: "$14.99", perk: "Behind-the-scenes locker room access, early jersey drops, live Q&A after big wins." },
      { tier: "VIP", price: "$39.99", perk: "Personalized shoutout videos, courtside meet priority, digital certificate, gear discounts." }
    ],
    merch: [
      { name: "Snapback Cap", price: "$28", icon: "🧢", desc: "Adjustable fit, gold-stitched crest." },
      { name: "Signed Memorabilia", price: "$120", icon: "🏆", desc: "Authenticated collector's piece." }
    ],
    events: [
      { title: "Meet Malik Reyes", type: "Meet & Greet", place: "Lagos Convention Centre", date: "Aug 22, 2026" }
    ],
    reviews: [
      { name: "Ifeanyi O.", quote: "The behind-the-scenes locker room clips are unreal. Worth every naira.", stars: 5 }
    ]
  },
  {
    slug: "selina-cruz",
    name: "Selina Cruz",
    category: "Film",
    tagline: "Actress",
    bio: "Award-nominated actress known for raw, unfiltered roles.",
    about: "Selina Cruz is an award-nominated actress known for raw, unfiltered performances. From indie dramas to blockbuster ensembles, she brings the same intensity to every role — and to every conversation with her fans.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80",
    cover: null,
    price: "$15.99/mo",
    socials: [
      { label: "@selinacruz", handle: "Instagram" },
      { label: "Selina Cruz Films", handle: "Studio" },
      { label: "selinacruz.fx", handle: "Website" }
    ],
    memberships: [
      { tier: "Basic", price: "$6.99", perk: "Script-read updates, table-read photos, premiere announcements first." },
      { tier: "Premium", price: "$14.99", perk: "Behind-the-scenes set footage, early poster drops, monthly watch-party sessions." },
      { tier: "VIP", price: "$39.99", perk: "Personalized video messages, red carpet priority, digital certificate, merch discounts." }
    ],
    merch: [
      { name: "Limited Poster", price: "$18", icon: "🖼️", desc: "Museum-grade matte print, A2 size." },
      { name: "Sticker Pack", price: "$9", icon: "✨", desc: "Set of 8 die-cut foil stickers." }
    ],
    events: [
      { title: "Premiere Night", type: "Movie Premiere", place: "Virtual Screening", date: "Sep 3, 2026" }
    ],
    reviews: [
      { name: "Blessing U.", quote: "Her personalized video message made my sister's birthday unforgettable.", stars: 5 }
    ]
  },
  {
    slug: "jonah-pierce",
    name: "Jonah Pierce",
    category: "Comedy",
    tagline: "Stand-Up Comedian",
    bio: "Stand-up comedian selling out arenas one punchline at a time.",
    about: "Jonah Pierce is a stand-up comedian selling out arenas one punchline at a time. His observational humor and fearless crowd work have made him one of the most-streamed comedians on FanExpress.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80",
    cover: null,
    price: "$7.99/mo",
    socials: [
      { label: "@jonahpierce", handle: "Instagram" },
      { label: "Pierce Comedy", handle: "Tour" },
      { label: "jonahpierce.fx", handle: "Website" }
    ],
    memberships: [
      { tier: "Basic", price: "$6.99", perk: "New bit previews, tour date announcements, community banter threads." },
      { tier: "Premium", price: "$14.99", perk: "Behind-the-scenes writers'-room clips, early ticket access, monthly live stand-up stream." },
      { tier: "VIP", price: "$39.99", perk: "Personalized roast videos, front-row priority, digital certificate, merch discounts." }
    ],
    merch: [
      { name: "Tour Tee", price: "$32", icon: "👚", desc: "100% cotton, limited print run." },
      { name: "Sticker Pack", price: "$9", icon: "✨", desc: "Set of 8 die-cut foil stickers." }
    ],
    events: [
      { title: "Live & Unfiltered", type: "Comedy Special (Virtual)", place: "Online", date: "Sep 10, 2026" }
    ],
    reviews: [
      { name: "Tunde K.", quote: "Front row at his live stream taping — laughed the entire time.", stars: 4 }
    ]
  },
  {
    slug: "wren-okafor",
    name: "Wren Okafor",
    category: "Influencer",
    tagline: "Lifestyle Creator",
    bio: "Lifestyle creator with 40M followers and zero filters.",
    about: "Wren Okafor is a lifestyle creator with 40M followers and zero filters. Known for candid takes on beauty, travel, and everyday life, Wren built a community that feels more like friends than followers.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80",
    cover: null,
    price: "$6.99/mo",
    socials: [
      { label: "@wrenokafor", handle: "Instagram" },
      { label: "Wren Daily", handle: "Newsletter" },
      { label: "wrenokafor.fx", handle: "Website" }
    ],
    memberships: [
      { tier: "Basic", price: "$6.99", perk: "Daily life updates, community polls, first-look content drops." },
      { tier: "Premium", price: "$14.99", perk: "Behind-the-scenes brand shoots, early product access, monthly live hangouts." },
      { tier: "VIP", price: "$39.99", perk: "Personalized shoutouts, event invite priority, digital certificate, merch discounts." }
    ],
    merch: [
      { name: "Holo Phone Case", price: "$26", icon: "📱", desc: "Iridescent finish, drop-tested." },
      { name: "Charm Bracelet", price: "$22", icon: "📿", desc: "Stainless steel, fan-tier engraving." }
    ],
    events: [
      { title: "Content Creator Meetup", type: "Fan Meetup", place: "Landmark Beach, Lagos", date: "Sep 18, 2026" }
    ],
    reviews: [
      { name: "Ngozi F.", quote: "Loved the styling tips from her premium hangouts, so down to earth.", stars: 5 }
    ]
  },
  {
    slug: "dante-volt",
    name: "Dante Volt",
    category: "Music",
    tagline: "DJ / Producer",
    bio: "Electronic producer behind three global festival anthems.",
    about: "Dante Volt is the electronic producer behind three global festival anthems. His sets blend deep house grooves with cinematic builds, and his fans get first access to every unreleased track.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
    cover: null,
    price: "$10.99/mo",
    socials: [
      { label: "@dantevolt", handle: "Instagram" },
      { label: "Volt Records", handle: "Label" },
      { label: "dantevolt.fx", handle: "Website" }
    ],
    memberships: [
      { tier: "Basic", price: "$6.99", perk: "New track previews, festival announcements, community set-list votes." },
      { tier: "Premium", price: "$14.99", perk: "Behind-the-scenes studio sessions, early vinyl access, monthly live-stream sets." },
      { tier: "VIP", price: "$39.99", perk: "Personalized mix requests, festival guestlist priority, digital certificate, merch discounts." }
    ],
    merch: [
      { name: "Signed Vinyl Album", price: "$65", icon: "💿", desc: "Hand-signed, individually numbered." },
      { name: "Snapback Cap", price: "$28", icon: "🧢", desc: "Adjustable fit, gold-stitched crest." }
    ],
    events: [
      { title: "Sunset Sessions", type: "Virtual Fan Session", place: "Online", date: "Aug 30, 2026" }
    ],
    reviews: [
      { name: "Kelechi M.", quote: "Got on the festival guestlist through VIP — best night of my year.", stars: 5 }
    ]
  }
];

function getCelebBySlug(slug){
  return celebrities.find(c => c.slug === slug);
}
