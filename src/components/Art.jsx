const arts = {
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
      <rect x="60" y="35" width="80" height="80" rx="8" fill="#3FD0EE" />
      <rect x="82" y="57" width="36" height="36" rx="5" fill="#101010" />
      <g stroke="#3FD0EE" strokeWidth="6" strokeLinecap="round">
        <path d="M80 20v15M100 20v15M120 20v15M80 115v15M100 115v15M120 115v15M45 55h15M45 75h15M45 95h15M140 55h15M140 75h15M140 95h15" />
      </g>
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
