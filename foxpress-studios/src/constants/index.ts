import type { NavLink, Service, Testimonial, TeamMember, Award, Project } from '../types';

import serviceFilm from '../assets/service-film.jpg';
import serviceCgi from '../assets/service-cgi.jpg';
import servicePublicity from '../assets/service-publicity.jpg';
import serviceDistribution from '../assets/service-distribution.jpg';
import serviceEvents from '../assets/service-events.jpg';

export const SERVICE_IMAGES = [
  serviceFilm,
  serviceCgi,
  servicePublicity,
  serviceDistribution,
  serviceEvents,
] as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Works", href: "/work" },
  { label: "About Us", href: "/about" },
  { label: "Awards", href: "/awards" },
  { label: "Contact Us", href: "#contact" }
];

export const SERVICES: Service[] = [
  { title: 'Film & Video Productions', desc: 'High-quality films, trailers, and branded content that captivate.', icon: 'Video' },
  { title: 'CGI & Animation', desc: 'Stunning CGI, animation, and visual effects that bring imagination to life.', icon: 'Sparkles' },
  { title: 'Publicity & Media Placement', desc: 'Press releases, media exposure, and PR that build your brand.', icon: 'Megaphone' },
  { title: 'Distribution & Publishing Support', desc: 'Global distribution, bookstore placement, and publishing solutions for authors.', icon: 'BookOpen' },
  { title: 'Events & Creative Campaigns', desc: 'Creative campaigns and events that engage audiences and drive results.', icon: 'Users' },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "Foxpress Studios transformed our brand story into a cinematic masterpiece. Their attention to detail in the CGI sequences was breathtaking.", author: "Sarah Jenkins", role: "VP of Marketing, Apex Tech" },
  { quote: "Their media placement campaign landed us features in top-tier publications, multiplying our reach and visibility overnight.", author: "Robert Chen", role: "Co-Founder, Chrono Labs" },
  { quote: "The CGI work on our campaign was world-class. They brought a level of artistry that set our product launch apart from anything else in the market.", author: "Emma Watson", role: "Brand Lead, Velo Motors" }
];

export const TEAM: TeamMember[] = [
  { name: "Jamer Osigan", role: "Creative Director & Founder" },
  { name: "Chrstyle Osigan", role: "Head of CGI & Visual Effects" },
  { name: "Lenon Lee Natividad", role: "Director of Film Production" },
  { name: "Sakai Moka", role: "VP of Publicity & Media Placement" }
];

export const AWARDS: Award[] = [
  { name: "Marcom Awards", year: "2025", category: "Internationally Awarded Globally Recognized. Platinum Winner", icon: "Trophy" },
  { name: "Viddy Awards", year: "2026", category: "Platinum Winner", icon: "Award" },
  { name: "Hermes Awards", year: "2026", category: "Creative Awards Platinum Winner", icon: "Medal" }
];

export const PROJECTS: Project[] = [
  {
    title: "Split Screen INTRO",
    category: "Dr. Anna Aragno",
    youtubeId: "q53x16txh4o",
    client: "Dr. Anna Aragno",
    date: "December 2026",
    tech: "Creative Editing, Motion Graphics",
    description: "An elegant, stylized intro sequence showing creative direction and high-end video compilation methods."
  },
  {
    title: "The Magical Eggs On Dragon's Lair Ep. 1",
    category: "Georgina Sano",
    youtubeId: "XDcrGFg98Qk",
    client: "Georgina Sano",
    date: "November 2026",
    tech: "CGI, Animation, Unreal Engine",
    description: "Episode 1 of 'The Magical Eggs On Dragon's Lair' series. This fantasy project combines high-quality character animation and complex lighting rigs to bring the magical dragon eggs to life."
  },
  {
    title: "The Magic Wine Cup Teaser",
    category: "Helene Meyers",
    youtubeId: "JTOwZr8IOI8",
    client: "Helene Meyers",
    date: "October 2026",
    tech: "Cinematography, Visual Tone, Sound Editing",
    description: "Teaser video for 'The Magic Wine Cup & Other Jewish Plays'. This dramatic trailer establishes the mysterious and magical atmosphere of the upcoming theatrical adaptation."
  },
  {
    title: "Cong Catchers Teaser",
    category: "Lee Halverson",
    youtubeId: "EO3y0fWjGJE",
    client: "Lee Halverson",
    date: "September 2026",
    tech: "Sound Design, Editing, Creative Campaign",
    description: "High-impact teaser campaign trailer showcasing fast cuts, stylized typography, and professional action-oriented sound design."
  },
  {
    title: "Destined To Live 9 Lives Teaser",
    category: "Phyllis Duke",
    youtubeId: "M08SGI8QHt8",
    client: "Phyllis Duke",
    date: "August 2026",
    tech: "Cinematography, Visual Effects, Editing",
    description: "An evocative teaser for 'Destined To Live 9 Lives' showcasing dramatic visual pacing, rich color grading, and compelling narrative structure."
  },
  {
    title: "A Redeemed Soul's Journey Teaser",
    category: "Walter Scarborough",
    youtubeId: "SU8T6DDv72Q",
    client: "Walter Scarborough",
    date: "July 2026",
    tech: "Creative Editing, Sound Design, Motion Graphics",
    description: "A high-impact cinematic teaser tracking a spiritual and emotional journey, featuring expert audio integration and evocative motion graphics."
  },
  {
    title: "Gaining the Higher Ground Over Evolutionism",
    category: "Author Promo",
    youtubeId: "0ml0Tgrt6JA",
    client: "Dr. Robert Carter",
    date: "June 2026",
    tech: "Book Trailer, Sound Design",
    description: "A compelling trailer raising key questions about evolutionary theory and science."
  },
  {
    title: "Valley Egypt",
    category: "Documentary",
    youtubeId: "SKC02TB2R0A",
    client: "Aegyptus Media",
    date: "May 2026",
    tech: "Cinematography, Color Grading",
    description: "A visual journey through the ancient valleys and monument sites of Egypt."
  },
  {
    title: "Remembering Passion",
    category: "Cinematic Promo",
    youtubeId: "VoWRzmmPzA4",
    client: "Memory Works",
    date: "April 2026",
    tech: "Creative Editing, Music Score",
    description: "An evocative visual sequence exploring memory, passion, and personal discovery."
  },
  {
    title: "Forgiveness and Return",
    category: "Book Promo",
    youtubeId: "0jBvcalTFrI",
    client: "TDL Publishing",
    date: "March 2026",
    tech: "Motion Graphics, VFX",
    description: "Teaser promotion tracking themes of redemption, forgiveness, and finding one's path home."
  },
  {
    title: "Return Call",
    category: "Short Film",
    youtubeId: "ANmdAVaF2Wk",
    client: "Dialect Movies",
    date: "February 2026",
    tech: "Directing, Sound Editing",
    description: "A dramatic short focusing on a single life-altering phone call."
  },
  {
    title: "Remembering a Leader’s Purpose",
    category: "Historical Promo",
    youtubeId: "xCm0jDFWd_k",
    client: "Legacy Institute",
    date: "January 2026",
    tech: "Archival Editing, Audio Mixing",
    description: "A commemorative video documenting the legacy and life-guiding purpose of a visionary leader."
  },
  {
    title: "The Bears Aggression",
    category: "Action Trailer",
    youtubeId: "OK8DV2bLun8",
    client: "M.R. Ocha",
    date: "December 2025",
    tech: "Action Editing, Sound Effects",
    description: "A high-impact dramatic preview featuring intense pacing and sonic design."
  },
  {
    title: "White Men Make the Best Lovers",
    category: "Book Teaser",
    youtubeId: "Ea8QWEFaEO8",
    client: "Flora Coley",
    date: "November 2025",
    tech: "CGI, Color Grading",
    description: "Book teaser showcasing the romantic and thematic highlights of the literary release."
  },
  {
    title: "The Ultimate Quest",
    category: "Adventure Trailer",
    youtubeId: "iS9AMCPUIGI",
    client: "Dr. Antonio Mataban",
    date: "October 2025",
    tech: "CGI, Sound Design",
    description: "An epic trailer following the path of discovery and adventure."
  },
  {
    title: "The Holy Spirit Speaks of His Creation",
    category: "Spiritual Promo",
    youtubeId: "whvFdpxffzA",
    client: "James Kemp",
    date: "September 2025",
    tech: "Creative Graphics, Voiceover",
    description: "A beautiful message of faith and creation, rendered with high-quality visual text."
  },
  {
    title: "Paul Boerger’s Sparks",
    category: "Artistic Documentary",
    youtubeId: "ctnmzb8lXK8",
    client: "Paul Boerger",
    date: "August 2025",
    tech: "Cinematography, Grading",
    description: "Exploring the alchemist’s way through the lens of art and scientific craft."
  },
  {
    title: "Eternity Interrupts Time",
    category: "Cinematic Series",
    youtubeId: "SI_iqV55fSE",
    client: "Walter Scarborough",
    date: "July 2025",
    tech: "Production Design, Sound",
    description: "Episode 1 of the drama series exploring the intersection of time and eternity."
  },
  {
    title: "Between Two Heartbeats",
    category: "Drama Trailer",
    youtubeId: "9hZ7FOf0sS0",
    client: "Jim Stavis",
    date: "June 2025",
    tech: "Editing, Sound Design",
    description: "An intimate look at life's defining decisions made in a split second."
  },
  {
    title: "My Dedication",
    category: "Cinematic Trailer",
    youtubeId: "Dh4UV1ZDvGo",
    client: "FoxPress Media",
    date: "May 2025",
    tech: "Visual Effects, Title Design",
    description: "A promotional cinematic trailer showcasing dedication, struggle, and final success."
  },
  {
    title: "White Men Make the Best Lovers (Alt)",
    category: "Teaser Promo",
    youtubeId: "_lxbgs07QEE",
    client: "Flora Coley",
    date: "April 2025",
    tech: "Motion Graphics, Sound Design",
    description: "Alternative teaser preview showcasing additional scenes and dramatic clips."
  },
  {
    title: "POC Tabor A Christmas Tale",
    category: "Holiday Special",
    youtubeId: "Gq8hbEjfd9I",
    client: "FoxPress Media",
    date: "December 2024",
    tech: "CGI Animation, Sound Design",
    description: "A heartwarming holiday teaser capturing the spirit of Christmas."
  },
  {
    title: "Tabor: A Christmas Tale",
    category: "Holiday Trailer",
    youtubeId: "YgaRqmAa7bE",
    client: "FoxPress Media",
    date: "December 2024",
    tech: "CGI Animation, Color Grading",
    description: "Main trailer for the festive story of Tabor and his Christmas journey."
  }
];
