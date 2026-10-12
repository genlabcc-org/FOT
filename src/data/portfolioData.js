export const designer = {
  name: "Bejaman",
  role: "Product designer",
  location: "Chicago, IL",
  headline: "I design outstanding digital products",
  statusMarquee: [
    "Currently at Meridian Health",
    "Previously at Searchless AI",
    "Available for Q4 collaborations",
    "Based in Chicago, IL",
    "Obsessed with typography & micro-interactions",
    "Currently at Meridian Health",
    "Previously at Searchless AI"
  ],
  shortBio: "a product designer in Chicago who gets excited about making complicated things simple",
  bioParagraphs: [
    "I spend my days designing for healthcare platforms, booking systems, and other products where 'just figure it out' isn't an option. The people using these tools are busy, stressed, and have actual work to do. My job is to get out of their way.",
    "I've worked on teams of two and teams of twenty. I've had access to endless user research and I've had to make educated guesses with limited data. I've worked within strict component libraries and I've built design systems from scratch. What stays consistent is asking good questions, collaborating with people who know more than me, and shipping things that actually help.",
    "Currently, I'm at Meridian Health working on experiences for mental health clinicians and administrators. Before that, I spent almost two years at StyleBook helping salons manage their businesses (and discovering that stylists have very strong opinions about scheduling interfaces, which I deeply respect)."
  ],
  funFact: "When I'm not designing, you'll find me thinking about why some interfaces feel intuitive and others make you want to throw your laptop out a window. Usually with coffee.",
  avatar: "/png/tetevi8jenlobt4ydyppwydojg1203.png",
  workspaceImage: "/jpg/flhqlc1zfa1vomovnhwjalzo.jpg",
  skills: [
    "Interaction Design",
    "Prototyping",
    "User Research",
    "Motion Design",
    "Design Systems",
    "Framer Development"
  ],
  tools: [
    "Figma", "React / Vite", "Framer", "CSS / Motion", "Linear", "Notion", "Principle"
  ],
  experience: [
    {
      period: "2024 — Present",
      role: "Senior Product Designer",
      company: "Meridian Health",
      description: "Leading clinician workflows and administrative tooling. Reduced documentation overhead by 45% across 14 clinics."
    },
    {
      period: "2022 — 2024",
      role: "Product Designer",
      company: "StyleBook",
      description: "Spearheaded tablet-first salon scheduling redesign. Grew daily active stylist usage from 41% to 94%."
    },
    {
      period: "2020 — 2022",
      role: "Design Generalist",
      company: "Searchless AI",
      description: "Designed 0 to 1 developer tools, visual benchmarks, brand assets, and marketing sites."
    }
  ],
  socials: [
    { name: "Email", label: "hello@bejaman.design", href: "mailto:hello@bejaman.design", handle: "hello@bejaman.design" },
    { name: "LinkedIn", label: "LinkedIn", href: "https://linkedin.com", handle: "in/bejaman" },
    { name: "Twitter / X", label: "Twitter", href: "https://x.com", handle: "@bejaman_ui" },
    { name: "Instagram", label: "Instagram", href: "https://instagram.com", handle: "@bejaman.design" }
  ]
};

export const projects = [
  {
    id: "meridian-health",
    number: "01",
    title: "Meridian Health",
    subtitle: "When therapists spend less time clicking, they have more time for patients.",
    tag: "Healthcare",
    category: "Workflow Design",
    date: "Mar 19, 2026",
    image: "/jpg/veyomflfvf4bfzjkxrpypnzqwiw17d4.jpg",
    secondaryImage: "/jpg/veyomflfvf4bfzjkxrpypnzqwiwb3e0.jpg",
    role: "Product Designer",
    timeline: "8 weeks",
    team: "2 Engineers, 1 PM, me",
    platform: "Web & Tablet",
    accentColor: "#a1dfc5",
    problem: "Therapists at Meridian Health were documenting 3-5 client sessions daily. Each one meant clicking through 12 different screens, re-entering the same information multiple times, and hoping nothing crashed before they finished. People were losing work, getting disoriented, and spending 15-20 minutes per note when they had clients waiting.",
    solution: "We re-architected the clinical documentation flow into a single unified workspace with auto-saving, contextual diagnosis suggestions, and keyboard-first shortcuts. Clinicians can capture session notes in real-time without losing human eye contact.",
    metrics: [
      { label: "Documentation Time", value: "-45%", detail: "Average reduction per session note" },
      { label: "Data Duplication", value: "0", detail: "Completely eliminated repetitive entries" },
      { label: "Clinician NPS", value: "+38", detail: "Jumped from -12 to +26 in 60 days" }
    ],
    features: [
      "Keyboard-first note navigation with markdown support",
      "Live DSM-5 diagnosis autosuggest based on session transcripts",
      "Persistent auto-save preventing lost clinical history",
      "Modular sidebar for immediate patient medication history"
    ]
  },
  {
    id: "stylebook",
    number: "02",
    title: "StyleBook",
    subtitle: "From 'I hate this system' to 'Can we show other salons?'",
    tag: "SaaS",
    category: "Transformation",
    date: "Mar 2, 2026",
    image: "/jpg/hp4sdb6mgjqcaexv0yts7gljgka17d4.jpg",
    secondaryImage: "/jpg/hp4sdb6mgjqcaexv0yts7gljgkab3e0.jpg",
    role: "Lead Product Designer",
    timeline: "12 weeks",
    team: "3 Engineers, 1 PM, 1 Researcher, me",
    platform: "Web & iPad",
    accentColor: "#fabed1",
    problem: "Salons move at lightning speed with color bowls, hair dryers, and walk-ins. Stylists were actively avoiding the existing enterprise booking software because rebooking an appointment took 8 cumbersome steps and was impossible on a tablet while standing.",
    solution: "Rebuilt the appointment book with drag-and-drop gesture controls, rapid client lookups, multi-service bundling, and high-contrast styling readable from across the salon floor.",
    metrics: [
      { label: "Booking Speed", value: "3x", detail: "Faster rebooking workflow" },
      { label: "Daily Active Stylists", value: "94%", detail: "Up from 41% adoption" },
      { label: "No-Show Rate", value: "-22%", detail: "Automated SMS confirmation flow" }
    ],
    features: [
      "Touch-first calendar grid with pinch-to-zoom intervals",
      "Smart multi-service staggering for color processing breaks",
      "One-tap repeat booking with saved client preferences",
      "Offline sync mode for spotty salon Wi-Fi connections"
    ]
  },
  {
    id: "homestead",
    number: "03",
    title: "Homestead",
    subtitle: "Helping first-time homebuyers actually understand what they're looking at.",
    tag: "Proptech",
    category: "0 -> 1",
    date: "Jan 2, 2025",
    image: "/jpg/lramgmulf2qhd5no7cnt2lplr5mee45.jpg",
    secondaryImage: "/jpg/lramgmulf2qhd5no7cnt2lplr5m42f2.jpg",
    role: "Founding Designer",
    timeline: "16 weeks",
    team: "4 Engineers, 2 Founders, me",
    platform: "Mobile Web & iOS",
    accentColor: "#f5dda1",
    problem: "Buying a first home is terrifying. Complex escrow terminology, hidden closing costs, and opaque inspection reports leave buyers feeling anxious and powerless against aggressive bidding dynamics.",
    solution: "Designed an intuitive plain-English home inspection translator and financial roadmap that breaks down every inspection line item into estimated repair costs, urgency indicators, and negotiation leverage points.",
    metrics: [
      { label: "First-Time Buyers", value: "18,000+", detail: "Guided in the first 6 months" },
      { label: "Closing Confidence", value: "89%", detail: "Reported reduced transaction anxiety" },
      { label: "Avg Savings", value: "$4,200", detail: "Negotiated off purchase prices" }
    ],
    features: [
      "Plain-language conversion of 50-page PDF inspection reports",
      "Instant contractor cost estimates based on regional ZIP codes",
      "Negotiation script generator for buyer real estate agents",
      "Interactive 5-year maintenance timeline calendar"
    ]
  },
  {
    id: "north-light",
    number: "04",
    title: "North Light",
    subtitle: "Getting seven stakeholders to agree on what they're actually building.",
    tag: "Strategy",
    category: "Enterprise",
    date: "Mar 19, 2026",
    image: "/jpg/77vnsoqq0x6omvszygh7nmkdh0ee45.jpg",
    secondaryImage: "/jpg/77vnsoqq0x6omvszygh7nmkdh042f2.jpg",
    role: "Design Strategist",
    timeline: "6 weeks",
    team: "Design Sprint Team & VP Leadership",
    platform: "Desktop Web & Design System",
    accentColor: "#d2c5de",
    problem: "North Light had 4 competing internal initiatives with overlapping scopes, siloed engineering roadmaps, and conflicting metrics, paralyzing the Q2 release cycle.",
    solution: "Facilitated intensive cross-functional design sprints, wireframing live interactive prototypes to test real customer reactions, aligning executive leadership around one cohesive product vision and roadmap.",
    metrics: [
      { label: "Alignment Time", value: "6 wks", detail: "Resolved 9 months of deadlock" },
      { label: "Roadmap Clarity", value: "100%", detail: "Unanimous sign-off across all VPs" },
      { label: "Saved Eng Hours", value: "1,200+", detail: "By eliminating redundant features" }
    ],
    features: [
      "Rapid prototype testing with 24 enterprise customer sessions",
      "Unified design system token foundation for engineering teams",
      "Customer journey prioritization matrix",
      "Executive alignment scorecard and decision framework"
    ]
  }
];

export const services = [
  {
    number: "(01)",
    title: "Product Design",
    description: "Designing digital products from the first idea to the final interface.",
    tagline: "End-to-end UX/UI architecture",
    accentColor: "#a1dfc5",
    tags: ["UX / UI Design", "Project Strategy", "Prototyping", "Interaction Design", "Design Systems"],
    points: [
      "Complex workflow simplification and information architecture",
      "High-fidelity interactive Figma & code prototypes",
      "Design systems built with scalable tokens and components",
      "User testing and heuristic interface evaluations"
    ]
  },
  {
    number: "(02)",
    title: "Visual & Brand Direction",
    description: "Strong visual direction with thoughtful structure to create digital experiences that are as effective as they are memorable.",
    tagline: "Narrative & creative web experiences",
    accentColor: "#fabed1",
    tags: ["Art Direction", "Web design", "Responsive design", "Framer Development", "Motion & Interaction"],
    points: [
      "Editorial web design with personality and bespoke typography",
      "Micro-interactions and fluid motion design that delight users",
      "Conversion-focused landing pages and narrative storytelling",
      "Responsive polish across mobile, tablet, and widescreen"
    ]
  },
  {
    number: "(03)",
    title: "Systems & Scaling",
    description: "Building flexible visual systems that make products easier to design, build, and scale.",
    tagline: "Token architecture & developer velocity",
    accentColor: "#d2c5de",
    tags: ["Component Libraries", "Token Architecture", "Accessibility WCAG", "Developer Handoff", "Governance"],
    points: [
      "Multi-brand and themeable component libraries",
      "Seamless developer handoff with token specifications",
      "Accessibility compliance baked in from day one",
      "Documentation that engineering and product love to use"
    ]
  }
];

export const articles = [
  {
    id: "ideas-need-silence",
    title: "Ideas Need Silence",
    date: "Jan 14, 2026",
    category: "Creativity",
    readTime: "4 min read",
    accentColor: "#a4e5f8",
    image: "/jpg/3xgkzpsqqh2drecfvucxldiupib6d8.jpg",
    excerpt: "A reflection on why quiet moments are essential to meaningful creative work. It explores how distance, mental rest, and deliberate pauses help ideas mature.",
    content: [
      "In a day filled with notifications and conversations, silence is often mistaken for empty time. In reality, it is when the mind arranges scattered pieces of information into a meaningful direction.",
      "When we no longer need to react immediately, we begin to notice what matters beneath the surface. The pressure to generate rapid answers frequently leads to obvious solutions. Give a problem 24 hours of silence, and the deeper structural clarity almost always reveals itself.",
      "Creative endurance isn't about how many hours you spend staring at Figma; it's about how protected your attention is when you step back to think."
    ]
  },
  {
    id: "geometry-builds-trust",
    title: "Geometry Builds Trust",
    date: "Mar 9, 2026",
    category: "Design",
    readTime: "5 min read",
    accentColor: "#a1dfc5",
    image: "/jpg/3xgkzpsqqh2drecfvucxldiupie0c6.jpg",
    excerpt: "An exploration of how geometry, alignment, rhythm, and thoughtful spacing create trust in visual design.",
    content: [
      "People recognize order before they can name it. A clear line, a steady rhythm of columns, or a carefully measured area of white space signals that everything is under control.",
      "In design, trust often begins with the simplest geometric choices. When baseline grids align, padding feels mathematically intentional, and proportions echo natural harmony, users relax without knowing why.",
      "Sloppy spacing whispers that the underlying code or business might be sloppy too. Crisp geometry conveys authority and craftsmanship."
    ]
  },
  {
    id: "everyday-beauty",
    title: "Everyday Beauty",
    date: "Apr 22, 2026",
    category: "Design",
    readTime: "3 min read",
    accentColor: "#fabed1",
    image: "/jpg/gzepnwirrqrmwiqv3vhqxypeeke994.jpg",
    excerpt: "A closer look at the intelligence and emotional value hidden within ordinary objects. Proportion, material, and repeated use.",
    content: [
      "A desk lamp, a notebook, or a ceramic mug can become memorable when every detail is considered with care. The beauty of an everyday object is not found in spectacle.",
      "It lives in the natural way that object serves a person. Comfort and clarity remain persuasive for a very long time. In software, we too easily chase novelty when what users crave is durability, warmth, and reliable grace."
    ]
  },
  {
    id: "the-power-of-focus",
    title: "The Power of Focus",
    date: "Jun 5, 2026",
    category: "Workspace",
    readTime: "6 min read",
    accentColor: "#f5dda1",
    image: "/jpg/hl9wbvzobplc8p5dpf0sigsvaqb351.jpg",
    excerpt: "A practical perspective on protecting focused time and producing meaningful work in a noisy world.",
    content: [
      "The ability to concentrate is becoming a rare advantage. Many people begin the day by opening every communication channel, then spend most of their time moving between small requests.",
      "The feeling of being busy arrives quickly, while the work that matters moves forward very slowly. True design breakthroughs require unfragmented blocks of two to three hours where the brain can hold intricate problem architectures in working memory."
    ]
  },
  {
    id: "a-greener-workspace",
    title: "A Greener Workspace",
    date: "Aug 17, 2026",
    category: "Workspace",
    readTime: "4 min read",
    accentColor: "#a1dfc5",
    image: "/jpg/cxww8slaf4gozokm3yncaes637qce1b.jpg",
    excerpt: "A thoughtful guide to using natural light, greenery, and changing environmental conditions to create calmer workspaces.",
    content: [
      "Space directly influences the way we think. Natural light and greenery soften a room and create the feeling that time is moving more slowly.",
      "A few modest changes can make a workplace feel less rigid and more connected to everyday life. When we bring organic textures into our digital workspaces, our visual fatigue drops noticeably."
    ]
  },
  {
    id: "the-creative-desk",
    title: "The Creative Desk",
    date: "Sep 2, 2026",
    category: "Creativity",
    readTime: "5 min read",
    accentColor: "#d2c5de",
    image: "/jpg/rt9ojedzkwcxsu6sdncpf9zia56d5.jpg",
    excerpt: "An observation of how a creative desk reflects personal habits, evolving ideas, and the rhythm of a project.",
    content: [
      "A desk is a small map of the creative process. Open books, written notes, and early experiments reveal how many directions an idea explored before taking shape.",
      "Selective disorder can be a sign of a mind connecting many layers of information. Finding the right equilibrium between tactical clutter and clean canvas is a personal ritual."
    ]
  },
  {
    id: "materials-and-memory",
    title: "Materials and Memory",
    date: "Jul 28, 2026",
    category: "Design",
    readTime: "4 min read",
    accentColor: "#d8a59d",
    image: "/jpg/cksyqp1uj0mq0nclgsca0upoprk8de5.jpg",
    excerpt: "How materials shape atmosphere, behavior, memory, and emotional connection to a place through tactile contrast.",
    content: [
      "We remember a place through more than images. We remember the feeling of a surface, the temperature of the light, and the sound of footsteps touching the floor.",
      "Materials create memories through several senses at once. Wood brings warmth, stone suggests permanence, and glass expands the view. In digital products, haptics, spring physics, and tonal contrast perform that same tactile grounding."
    ]
  },
  {
    id: "beyond-the-screen",
    title: "Beyond the Screen",
    date: "May 19, 2026",
    category: "Design",
    readTime: "5 min read",
    accentColor: "#a4e5f8",
    image: "/jpg/flhqlc1zfa1vomovnhwjalzo.jpg",
    excerpt: "A reminder that meaningful digital experiences extend far beyond the visible interface into human life.",
    content: [
      "A digital product does not begin when a person touches the screen, and it does not end when the application closes.",
      "The experience also includes expectations before use, feelings during moments of waiting, and memories after the task is complete. Every point of contact contributes to trust."
    ]
  }
];

export const playgroundItems = [
  {
    id: "play-1",
    title: "Brain’s messy, but it’s okay",
    caption: "Late night desk setup & coffee steam",
    image: "/png/21gru6l1dwsbhywxo3slnw2oao0dd21.png",
    tag: "Workspace",
    color: "#fabed1",
    aspect: "tall"
  },
  {
    id: "play-2",
    title: "Good weather",
    caption: "Afternoon sun casting shadows across the sketchbook",
    image: "/jpg/flhqlc1zfa1vomovnhwjalzo.jpg",
    tag: "Life",
    color: "#a1dfc5",
    aspect: "wide"
  },
  {
    id: "play-3",
    title: "Random shot",
    caption: "Street architecture patterns in Chicago downtown",
    image: "/png/gebuv4vcrcbgk0ytc0xd3hts41fe8.png",
    tag: "Observation",
    color: "#d2c5de",
    aspect: "square"
  },
  {
    id: "play-4",
    title: "Tiny moments",
    caption: "Book typography and coffee mug pairing",
    image: "/png/imwtq4ykp0wdm1pbrsczsl11z1a2de9.png",
    tag: "Moments",
    color: "#f5dda1",
    aspect: "tall"
  },
  {
    id: "play-5",
    title: "Not sure what I’m doing",
    caption: "Micro 3D spline interaction experiments",
    image: "/png/8wcddjf9lkofd38rmga4cti7egsba09.png",
    tag: "Experiment",
    color: "#a4e5f8",
    aspect: "wide"
  },
  {
    id: "play-6",
    title: "bus bus bus",
    caption: "CTA commute sketches on the blue line",
    image: "/png/depdiibq0per3ga9qjx5vggp8cac90.png",
    tag: "Transit",
    color: "#d8a59d",
    aspect: "square"
  },
  {
    id: "play-7",
    title: "flower!",
    caption: "Found near Logan Square corner bodega",
    image: "/png/hkqae76oi4thm32d4iwu4efqps1156.png",
    tag: "Nature",
    color: "#fabed1",
    aspect: "square"
  },
  {
    id: "play-8",
    title: "nothing big, still feels nice",
    caption: "Paper prototype card sort session",
    image: "/jpg/zmwei8bxq0uhymgeucsatjsvrkg.jpg",
    tag: "Craft",
    color: "#a1dfc5",
    aspect: "wide"
  }
];
