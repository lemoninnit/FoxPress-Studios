import type { NavLink, Service, Testimonial, TeamMember, Award, Project } from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/work" },
  { label: "About Us", href: "/about" },
  { label: "Awards", href: "/awards" },
  { label: "Contact Us", href: "#contact" }
];

export const SERVICES: Service[] = [
  { title: 'Film & Video Productions', desc: 'High-quality film, TV, trailers, and branded content that bring your story to life.', icon: 'Video' },
  { title: 'CGI & Animation', desc: 'Stunning CGI, animation, and visual effects that elevate your vision.', icon: 'Sparkles' },
  { title: 'Publicity & Media Placement', desc: 'Strategic PR, press releases, and media exposure that build your brand presence.', icon: 'Megaphone' },
  { title: 'Events & Creative Campaigns', desc: 'Creative campaigns and events that engage audiences and drive results.', icon: 'CalendarDays' },
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
  { title: "Ethereal Ascension", category: "CGI & Animation" },
  { title: "Crimson Skies", category: "Film Production" },
  { title: "The Frost King", category: "Visual Effects" },
  { title: "Battle of the Ancients", category: "Creative Campaign" },
];
