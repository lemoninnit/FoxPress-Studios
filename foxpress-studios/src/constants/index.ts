import type { NavLink, Service, Testimonial, TeamMember, Award, Project } from '../types';

import serviceFilm from '../assets/service-film.jpg';
import serviceCgi from '../assets/service-cgi.jpg';
import servicePublicity from '../assets/service-publicity.jpg';
import serviceDistribution from '../assets/service-distribution.jpg';
import serviceEvents from '../assets/service-events.jpg';
import splitThumbnail from '../assets/thumbnail/split-thumbnail.png';
import magicalEggsThumbnail from '../assets/thumbnail/MagicalEggs-thumbnail.png';
import magicWineThumbnail from '../assets/thumbnail/MagicWine-thumbnail.png';
import congCatchersThumbnail from '../assets/thumbnail/CongCatchers-thumbnail.png';
import destinedThumbnail from '../assets/thumbnail/destined-thumbnail.png';
import redeemedThumbnail from '../assets/thumbnail/redeemed-thumbnail.png';

export const SERVICE_IMAGES = [
  serviceFilm,
  serviceCgi,
  servicePublicity,
  serviceDistribution,
  serviceEvents,
] as const;

export const PROJECT_IMAGES = [
  splitThumbnail,
  magicalEggsThumbnail,
  magicWineThumbnail,
  congCatchersThumbnail,
  destinedThumbnail,
  redeemedThumbnail,
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
  { name: "Hermes Creative Awards", year: "2026", category: "Platinum - Video Campaign", icon: "Trophy" },
  { name: "Telly Awards", year: "2025", category: "Gold - Visual Effects & CGI", icon: "Award" },
  { name: "Muse Creative Awards", year: "2025", category: "Gold - Branded Content", icon: "Medal" },
  { name: "Vega Digital Awards", year: "2024", category: "Platinum - Marketing Innovation", icon: "Trophy" },
  { name: "Hermes Creative Awards", year: "2024", category: "Gold - Creative Direction", icon: "Award" },
  { name: "Telly Awards", year: "2023", category: "Bronze - Branded Film", icon: "Medal" }
];

export const PROJECTS: Project[] = [
  { title: "Split Sceen INTRO", category: "Dr. Anna Aragno" },
  { title: "The Magical Eggs On Dragon's Lair Ep. 1", category: "Georgina Sano" },
  { title: "The Magic Wine Cup Teaser", category: "Helene Meyers" },
  { title: "Cong Catchers Teaser", category: "Lee Halverson" },
];
