const arts = {
  voice: (
    <svg viewBox="0 0 200 150">
      <path d="M66 58a35 35 0 0 1 68 0M56 48a46 46 0 0 1 88 0" fill="none" stroke="#3FD0EE" strokeWidth="5" strokeLinecap="round" />
      <path d="M63 79a38 38 0 0 0 74 0" fill="none" stroke="#D1055E" strokeWidth="5" strokeLinecap="round" />
      <rect x="86" y="29" width="28" height="55" rx="14" fill="#101010" />
      <path d="M94 44v15m8-22v30m8-23v16" stroke="#3FD0EE" strokeWidth="4" strokeLinecap="round" />
      <path d="M75 69v7a25 25 0 0 0 50 0v-7M100 101v13m-15 0h30" fill="none" stroke="#101010" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M151 84h27v22h-15l-8 7v-7h-4z" fill="#fff" stroke="#101010" strokeWidth="3" strokeLinejoin="round" />
      <path d="M157 95h3m5 0h3m5 0h1" stroke="#3BCE86" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 30l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#E5B230" stroke="#101010" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  terminal: (
    <svg viewBox="0 0 200 150">
      <rect x="10" y="14" width="180" height="122" rx="6" fill="#101010" />
      <circle cx="30" cy="34" r="5" fill="#D1055E" />
      <circle cx="48" cy="34" r="5" fill="#E5B230" />
      <circle cx="66" cy="34" r="5" fill="#3BCE86" />
      <path d="M32 70l22 16-22 16" fill="none" stroke="#3FD0EE" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="66" y="98" width="52" height="7" rx="3.5" fill="#fff" />
    </svg>
  ),
  chip: (
    <svg viewBox="0 0 200 150">
      <path d="M100 12v14" stroke="#E5B230" strokeWidth="4" strokeLinecap="round" />
      <path d="M95 19l5-7 5 7" fill="none" stroke="#101010" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="37" y="34" width="126" height="82" rx="7" fill="#3FD0EE" stroke="#101010" strokeWidth="5" />
      <rect x="45" y="42" width="110" height="66" rx="3" fill="#101010" />
      <path d="M45 54h110" stroke="#3FD0EE" strokeWidth="3" />
      <circle cx="53" cy="48" r="2" fill="#D1055E" />
      <circle cx="61" cy="48" r="2" fill="#E5B230" />
      <circle cx="69" cy="48" r="2" fill="#3BCE86" />
      <path d="M56 69l8 6-8 6m14 0h17m-31 10 8 6-8 6m14 0h17" fill="none" stroke="#3FD0EE" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="109" y="64" width="34" height="31" rx="4" fill="#fff" />
      <path d="M126 69v20m-9-10h18" stroke="#D1055E" strokeWidth="4" strokeLinecap="round" />
      <path d="M25 119h150l-13 17H38z" fill="#3FD0EE" stroke="#101010" strokeWidth="4" strokeLinejoin="round" />
      <path d="M78 124h44" stroke="#101010" strokeWidth="4" strokeLinecap="round" />
      <path d="M25 46l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" fill="#E5B230" stroke="#101010" strokeWidth="2" strokeLinejoin="round" />
      <path d="M173 61l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" fill="#3BCE86" stroke="#101010" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  browser: (
    <svg viewBox="0 0 200 150">
      <rect x="12" y="18" width="176" height="114" fill="#fff" stroke="#2A1F00" strokeWidth="4" />
      <rect x="12" y="18" width="176" height="26" fill="#2A1F00" />
      <rect x="28" y="58" width="68" height="60" fill="#D1055E" />
      <rect x="108" y="58" width="64" height="12" fill="#2A1F00" />
      <rect x="108" y="80" width="46" height="12" fill="#2A1F00" />
      <rect x="108" y="102" width="56" height="16" fill="#3FD0EE" stroke="#2A1F00" strokeWidth="3" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 200 150">
      <g stroke="#fff" strokeWidth="4">
        <path d="M100 75L45 40M100 75L158 42M100 75L50 112M100 75L152 110" />
      </g>
      <circle cx="100" cy="75" r="22" fill="#E5B230" stroke="#fff" strokeWidth="4" />
      <circle cx="45" cy="40" r="14" fill="#3FD0EE" stroke="#fff" strokeWidth="4" />
      <circle cx="158" cy="42" r="14" fill="#A8E6C4" stroke="#fff" strokeWidth="4" />
      <circle cx="50" cy="112" r="14" fill="#fff" />
      <circle cx="152" cy="110" r="14" fill="#101010" stroke="#fff" strokeWidth="4" />
    </svg>
  ),
}

export default function Art({ name }) {
  return arts[name] || null
}
