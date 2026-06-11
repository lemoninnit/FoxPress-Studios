import type { NavLink, Stat, Service, Testimonial, NewsPost, TeamMember, Award, Project } from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#work" },
  { label: "About Us", href: "/#about" },
  { label: "Awards", href: "/#awards" },
  { label: "News", href: "/#news" },
  { label: "Contact Us", href: "#contact" }
];

export const STATS: Stat[] = [
  { icon: 'Trophy', value: 20, suffix: '+', label: 'Industry Awards' },
  { icon: 'Clapperboard', value: 500, suffix: '+', label: 'Projects Completed' },
  { icon: 'Globe', value: 30, suffix: '+', label: 'Countries Served' },
  { icon: 'Users', value: 100, suffix: '+', label: 'Creative Professionals' },
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

export const NEWS: NewsPost[] = [
  { title: "Foxpress Studios Secures Double Platinum at Hermes Creative Awards", date: "June 2026", summary: "Foxpress Studios has been recognized with two Platinum Awards at the 2026 Hermes Creative Awards for outstanding achievement in creative direction and video production." },
  { title: "Behind the CGI: The Making of Ethereal Ascension", date: "May 2026", summary: "A deep dive into the technology, artistry, and vision behind the virtual worlds and stunning character animation of our latest award-winning production." },
  { title: "Foxpress Launches Pasadena Creative Production Suite", date: "April 2026", summary: "Announcing the official opening of our brand-new, state-of-the-art LA production hub, housing cutting-edge editing, color grading, and CGI rendering facilities." },
  { title: "The Power of Branded Storytelling in the Digital Era", date: "March 2026", summary: "How brands can cut through the noise by investing in premium visual stories, cinematic campaigns, and strategic media placements that truly resonate with audiences." }
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
