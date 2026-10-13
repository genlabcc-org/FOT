export const EVENT = {
  name: 'FOT',
  full: 'Friends of Tech',
  date: 'Sat, 14 Nov 2026',
  time: '10:00 AM to 1:00 PM IST',
  venue: 'Venue to be confirmed',
}

export const NAV = [
  { id: 'top', label: 'Home', icon: 'M8 1l7 6v8h-5v-5H6v5H1V7z' },
  { id: 'about', label: 'About', icon: 'M7 0h2v6l4.2-4.2 1.4 1.4L10.4 7.4H16v1.2h-5.6l4.2 4.2-1.4 1.4L9 10V16H7v-6l-4.2 4.2-1.4-1.4 4.2-4.2H0V7.4h5.6L1.4 3.2 2.8 1.8 7 6z' },
  { id: 'sessions', label: 'Sessions', icon: 'M1 3h14v3H1zm0 5h9v3H1zm0 5h14v2H1z' },
  { id: 'register', label: 'Register', icon: 'M2 2h12v9H8l-4 3v-3H2z' },
]

export const SESSIONS = [
  {
    id: 1, tone: 'p1', art: 'voice', label: 'Talk · 25 min', when: 'Sat 14 Nov 2026 · 10:00 AM',
    title: 'When AI Finds Its Voice',
    desc: 'Discover how AI listens, understands human speech, and responds naturally. Explore the technology behind voice agents and the future of conversational experiences.',
    tags: ['AI', 'Voice agents'],
  },
  {
    id: 2, tone: 'p2', art: 'chip', label: 'Live demo · 30 min', when: 'Sat 14 Nov 2026 · 10:45 AM',
    title: 'AI Tools That Save Hours',
    desc: "Watch real workflows for coding, research and design. Bring a task and we'll try it live.",
    tags: ['AI', 'Productivity'],
  },
  {
    id: 3, tone: 'p3', art: 'award', label: 'Workshop · 45 min', when: 'Sat 14 Nov 2026 · 11:30 AM',
    title: 'Design It, Then Ship It',
    desc: 'Turn a rough idea into a clean landing page. Sketch, build and publish with a mentor beside you.',
    tags: ['Design', 'Hands-on'],
  },
  {
    id: 4, tone: 'p4', art: 'network', label: 'Open floor · 30 min', when: 'Sat 14 Nov 2026 · 12:30 PM',
    title: 'Meet Your Tech Friends',
    desc: 'Find a teammate, a mentor or your next collaborator. Short intros, snacks and plenty of time to talk.',
    tags: ['Networking', 'Community'],
  },
]

export const SKILLS = ['Web & Apps', 'AI Tools', 'Design', 'Careers', 'Open Source']
export const ROLES = ['Student', 'Fresher', 'Freelancer', 'Working professional', 'Just curious']
