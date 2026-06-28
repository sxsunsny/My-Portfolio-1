// SVG Assets for Zootopia-themed Portfolio Website
const SVG_ASSETS = {
  // Playful Logo (Fox & Rabbit side-by-side or combined)
  logo: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Fox Ears (Left) -->
    <path d="M25 45L40 10L48 35L25 45Z" fill="#E07A5F" stroke="#8B5E3C" stroke-width="3" stroke-linejoin="round"/>
    <path d="M30 40L40 18L44 33L30 40Z" fill="#F4A261" />
    <!-- Rabbit Ears (Right) -->
    <path d="M75 45L60 5L52 35L75 45Z" fill="#DFB892" stroke="#8B5E3C" stroke-width="3" stroke-linejoin="round"/>
    <path d="M70 40L60 14L56 33L70 40Z" fill="#F4C2C2" />
    <!-- Combined Circle Base -->
    <circle cx="50" cy="65" r="28" fill="#FDFBF7" stroke="#8B5E3C" stroke-width="3"/>
    <!-- Fox Cheek Details -->
    <path d="M28 65C28 55 45 55 48 62" stroke="#8B5E3C" stroke-width="2"/>
    <!-- Rabbit Cheek Details -->
    <path d="M72 65C72 55 55 55 52 62" stroke="#8B5E3C" stroke-width="2"/>
    <!-- Joint Heart nose/center -->
    <path d="M50 63C50 63 47 60 45 61C43 62 45 66 50 70C55 66 57 62 55 61C53 60 50 63 50 63Z" fill="#E07A5F"/>
  </svg>`,

  // Nick Wilde Fox Sticker
  nick: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer sticker border -->
    <circle cx="50" cy="50" r="46" fill="white" stroke="#E5D9C9" stroke-width="2"/>
    <!-- Fox Face Outer -->
    <path d="M50 15 L25 50 L35 75 L50 90 L65 75 L75 50 Z" fill="#E07A5F" stroke="#8B5E3C" stroke-width="3" stroke-linejoin="round"/>
    <!-- Snout White/Cream -->
    <path d="M38 65 L50 82 L62 65 C55 62 45 62 38 65Z" fill="#FFF5EB" stroke="#8B5E3C" stroke-width="3" stroke-linejoin="round"/>
    <!-- Inner Ears -->
    <path d="M32 35L42 50L28 48Z" fill="#B0503D" />
    <path d="M68 35L58 50L72 48Z" fill="#B0503D" />
    <!-- Sly Eyes -->
    <ellipse cx="40" cy="52" rx="6" ry="4" fill="#81B29A" stroke="#8B5E3C" stroke-width="2"/>
    <ellipse cx="60" cy="52" rx="6" ry="4" fill="#81B29A" stroke="#8B5E3C" stroke-width="2"/>
    <circle cx="41" cy="52" r="2.5" fill="#3D405B"/>
    <circle cx="59" cy="52" r="2.5" fill="#3D405B"/>
    <!-- Eyelids / Brows for sly look -->
    <path d="M32 46C36 45 44 47 46 50" stroke="#8B5E3C" stroke-width="3" stroke-linecap="round"/>
    <path d="M68 46C64 45 56 47 54 50" stroke="#8B5E3C" stroke-width="3" stroke-linecap="round"/>
    <!-- Nose -->
    <path d="M47 78C47 78 49 76 50 76C51 76 53 78 53 78C53 80 51 82 50 82C49 82 47 80 47 78Z" fill="#3D405B"/>
    <!-- Smile -->
    <path d="M43 71Q50 74 57 71" stroke="#8B5E3C" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  // Judy Hopps Rabbit Sticker
  judy: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer sticker border -->
    <circle cx="50" cy="50" r="46" fill="white" stroke="#E5D9C9" stroke-width="2"/>
    <!-- Ears -->
    <path d="M35 38 L25 5 L43 25 Z" fill="#9DB2C4" stroke="#8B5E3C" stroke-width="3" stroke-linejoin="round"/>
    <path d="M65 38 L75 5 L57 25 Z" fill="#9DB2C4" stroke="#8B5E3C" stroke-width="3" stroke-linejoin="round"/>
    <path d="M30 30 L27 9 L38 22 Z" fill="#F4C2C2" />
    <path d="M70 30 L73 9 L62 22 Z" fill="#F4C2C2" />
    <!-- Head -->
    <circle cx="50" cy="62" r="26" fill="#9DB2C4" stroke="#8B5E3C" stroke-width="3"/>
    <!-- Cheeks/Snout (white overlay) -->
    <path d="M38 72C38 64 62 64 62 72C62 82 38 82 38 72Z" fill="#FFF5EB" stroke="#8B5E3C" stroke-width="2" stroke-linejoin="round"/>
    <!-- Big Anime Eyes -->
    <ellipse cx="40" cy="56" rx="7" ry="9" fill="#5E81AC" stroke="#8B5E3C" stroke-width="2.5"/>
    <ellipse cx="60" cy="56" rx="7" ry="9" fill="#5E81AC" stroke="#8B5E3C" stroke-width="2.5"/>
    <ellipse cx="41" cy="55" rx="3.5" ry="5" fill="#2E3440"/>
    <ellipse cx="59" cy="55" rx="3.5" ry="5" fill="#2E3440"/>
    <!-- Eye highlights -->
    <circle cx="39" cy="52" r="2" fill="white"/>
    <circle cx="57" cy="52" r="2" fill="white"/>
    <!-- Nose -->
    <polygon points="48,67 52,67 50,70" fill="#F4C2C2" stroke="#8B5E3C" stroke-width="1.5"/>
    <!-- Cheerful Smile -->
    <path d="M46 73Q50 76 54 73" stroke="#8B5E3C" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  // Carrot Sticker
  carrot: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Carrot Green Leaves -->
    <path d="M35 30C32 20 40 10 46 22C42 8 52 5 55 18C60 6 68 15 60 27" stroke="#8B5E3C" stroke-width="3" stroke-linecap="round" fill="#81B29A"/>
    <!-- Carrot Body -->
    <path d="M32 30C40 32 60 32 68 30C66 45 55 75 50 95C45 75 34 45 32 30Z" fill="#E07A5F" stroke="#8B5E3C" stroke-width="3" stroke-linejoin="round"/>
    <!-- Lines on Carrot -->
    <path d="M38 42H46" stroke="#8B5E3C" stroke-width="2" stroke-linecap="round"/>
    <path d="M58 48H64" stroke="#8B5E3C" stroke-width="2" stroke-linecap="round"/>
    <path d="M40 58H48" stroke="#8B5E3C" stroke-width="2" stroke-linecap="round"/>
    <path d="M52 66H58" stroke="#8B5E3C" stroke-width="2" stroke-linecap="round"/>
    <path d="M44 76H50" stroke="#8B5E3C" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  // Zootopia Police Officer Badge
  badge: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Gold Shield Outer border -->
    <path d="M50 8L82 25V55C82 72 68 87 50 93C32 87 18 72 18 55V25L50 8Z" fill="#F4A261" stroke="#8B5E3C" stroke-width="3.5" stroke-linejoin="round"/>
    <!-- Inner shield details -->
    <path d="M50 15L75 30V54C75 68 64 80 50 85C36 80 25 68 25 54V30L50 15Z" fill="#FDF0D5" stroke="#8B5E3C" stroke-width="2"/>
    <!-- Star in Center -->
    <path d="M50 25L55 38L69 38L58 47L62 60L50 52L38 60L42 47L31 38L45 38Z" fill="#E76F51" stroke="#8B5E3C" stroke-width="2" stroke-linejoin="round"/>
    <!-- Text banner -->
    <path d="M28 65C38 68 62 68 72 65" stroke="#8B5E3C" stroke-width="3" stroke-linecap="round"/>
    <text x="50" y="75" font-family="Outfit, sans-serif" font-weight="900" font-size="8" fill="#8B5E3C" text-anchor="middle" letter-spacing="1">POLICE</text>
  </svg>`,

  // Paw Popsicle (Jumbo-pop) Sticker
  paw: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Popsicle stick -->
    <path d="M46 65V92C46 94.2 47.8 96 50 96C52.2 96 54 94.2 54 92V65" fill="#E5D9C9" stroke="#8B5E3C" stroke-width="3" stroke-linecap="round"/>
    <!-- Red Cherry Paw -->
    <!-- Main pad -->
    <path d="M25 48C25 32 75 32 75 48C75 62 63 68 50 68C37 68 25 62 25 48Z" fill="#E07A5F" stroke="#8B5E3C" stroke-width="3" stroke-linejoin="round"/>
    <!-- 4 toes -->
    <circle cx="26" cy="30" r="10" fill="#E07A5F" stroke="#8B5E3C" stroke-width="3"/>
    <circle cx="42" cy="22" r="11" fill="#E07A5F" stroke="#8B5E3C" stroke-width="3"/>
    <circle cx="58" cy="22" r="11" fill="#E07A5F" stroke="#8B5E3C" stroke-width="3"/>
    <circle cx="74" cy="30" r="10" fill="#E07A5F" stroke="#8B5E3C" stroke-width="3"/>
    <!-- Highlight gloss overlay -->
    <path d="M35 44C35 44 42 38 52 38C62 38 65 42 65 42" stroke="white" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  // Hearts Group Sticker
  hearts: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Large Heart -->
    <path d="M30 45C30 30 50 30 50 45C50 30 70 30 70 45C70 65 50 85 50 85C50 85 30 65 30 45Z" fill="#E07A5F" stroke="#8B5E3C" stroke-width="3" stroke-linejoin="round"/>
    <!-- Small Heart Left -->
    <path d="M12 25C12 17 22 17 22 25C22 17 32 17 32 25C32 35 22 45 22 45C22 45 12 35 12 25Z" fill="#DFB892" stroke="#8B5E3C" stroke-width="2" stroke-linejoin="round" transform="rotate(-15 22 25)"/>
    <!-- Small Heart Right -->
    <path d="M68 25C68 17 78 17 78 25C78 17 88 17 88 25C88 35 78 45 78 45C78 45 68 35 68 25Z" fill="#DFB892" stroke="#8B5E3C" stroke-width="2" stroke-linejoin="round" transform="rotate(15 78 25)"/>
  </svg>`,

  // UI Icons
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>`,

  add: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>`,

  profile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>`,

  folder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>`,

  summary: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>`,

  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>`,

  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`,

  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>`
};

// Export to window object for access in single-page scripts
window.SVG_ASSETS = SVG_ASSETS;
