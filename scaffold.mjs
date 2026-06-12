import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, 'foxpress-studios');
const src = path.join(root, 'src');
const publicDir = path.join(root, 'public');

const files = {
  'types/index.ts': `export interface NavLink { label: string; href: string; }
export interface Stat { icon: string; value: string; label: string; }
export interface Service { title: string; desc: string; icon: string; }
export interface Testimonial { quote: string; author: string; role: string; }
export interface NewsPost { title: string; date: string; summary: string; image?: string; }
export interface TeamMember { name: string; role: string; image?: string; }
export interface Award { name: string; year: string; category: string; icon?: string; }
`,
  'constants/index.ts': `import { NavLink, Stat, Service, Testimonial, NewsPost, TeamMember, Award } from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Awards", href: "#awards" },
  { label: "News", href: "#news" },
  { label: "Contact Us", href: "#contact" }
];

export const STATS: Stat[] = [
  { icon: "trophy", value: "20+", label: "Industry Awards" },
  { icon: "clapperboard", value: "500+", label: "Projects Completed" },
  { icon: "globe", value: "30+", label: "Countries Served" },
  { icon: "users", value: "100+", label: "Creative Professionals" },
];

export const SERVICES: Service[] = [
  { title: "Film & Video Productions", desc: "High-quality film, TV, trailers, and branded content.", icon: "video" },
  { title: "CGI & Animation", desc: "Stunning CGI, animation, and visual effects.", icon: "sparkles" },
  { title: "Publicity & Media Placement", desc: "Strategic PR, press releases, and media exposure.", icon: "megaphone" },
  { title: "Events & Creative Campaigns", desc: "Creative campaigns and events that engage audiences.", icon: "calendar" },
];

export const TESTIMONIALS: Testimonial[] = [];
export const TEAM: TeamMember[] = [];
export const NEWS: NewsPost[] = [];
export const AWARDS: Award[] = [];
`,
  'hooks/useScrollY.ts': `import { useState, useEffect } from 'react';

export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}
`,
  'hooks/useInView.ts': `import { useInView as useIntersectionObserver } from 'react-intersection-observer';

export function useInView(options = {}) {
  const { ref, inView, entry } = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
    ...options,
  });

  return { ref, inView, entry };
}
`,
  'hooks/useCountUp.ts': `import { useState, useEffect } from 'react';

export function useCountUp(target: number, duration: number = 2000): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return count;
}
`,
  'components/layout/Navbar.tsx': `export default function Navbar() { return <nav></nav>; }`,
  'components/layout/TopBar.tsx': `export default function TopBar() { return <div></div>; }`,
  'components/layout/Footer.tsx': `export default function Footer() { return <footer></footer>; }`,
  'components/sections/Hero.tsx': `export default function Hero() { return <header></header>; }`,
  'components/sections/Stats.tsx': `export default function Stats() { return <section></section>; }`,
  'components/sections/Services.tsx': `export default function Services() { return <section></section>; }`,
  'components/sections/OurWork.tsx': `export default function OurWork() { return <section></section>; }`,
  'components/sections/Awards.tsx': `export default function Awards() { return <section></section>; }`,
  'components/sections/Testimonials.tsx': `export default function Testimonials() { return <section></section>; }`,
  'components/sections/Team.tsx': `export default function Team() { return <section></section>; }`,
  'components/sections/News.tsx': `export default function News() { return <section></section>; }`,
  'components/sections/Contact.tsx': `export default function Contact() { return <section></section>; }`,
  'components/ui/Button.tsx': `export default function Button() { return <button></button>; }`,
  'components/ui/SectionHeader.tsx': `export default function SectionHeader() { return <header></header>; }`,
  'components/ui/ServiceCard.tsx': `export default function ServiceCard() { return <div></div>; }`,
  'components/ui/StatCard.tsx': `export default function StatCard() { return <div></div>; }`,
  'components/ui/TestimonialCard.tsx': `export default function TestimonialCard() { return <div></div>; }`,
  'components/ui/NewsCard.tsx': `export default function NewsCard() { return <div></div>; }`,
  'components/ui/TeamCard.tsx': `export default function TeamCard() { return <div></div>; }`,
  'components/ui/AwardBadge.tsx': `export default function AwardBadge() { return <div></div>; }`,
  'styles/animations.css': `/* Keyframes and motion utilities */`,
  'App.tsx': `import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Services from './components/sections/Services';
import OurWork from './components/sections/OurWork';
import Awards from './components/sections/Awards';
import Testimonials from './components/sections/Testimonials';
import Team from './components/sections/Team';
import News from './components/sections/News';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <OurWork />
      <Awards />
      <Testimonials />
      <Team />
      <News />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
`
};

for (const [filepath, content] of Object.entries(files)) {
  const fullPath = path.join(src, filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
}

// Media files
const mediaFiles = [
  { path: path.join(publicDir, 'favicon.ico'), content: '' },
  { path: path.join(publicDir, 'og-image.jpg'), content: '' },
  { path: path.join(src, 'assets/images/hero-bg.mp4'), content: '' },
  { path: path.join(src, 'assets/images/hero-bg.webp'), content: '' },
  { path: path.join(src, 'assets/images/dragon-white.jpg'), content: '' },
  { path: path.join(src, 'assets/images/dragon-blue.jpg'), content: '' },
  { path: path.join(src, 'assets/images/dragon-battle.jpg'), content: '' },
  { path: path.join(src, 'assets/images/dragon-red.jpg'), content: '' },
  { path: path.join(src, 'assets/images/logo.svg'), content: '<svg></svg>' },
  { path: path.join(src, 'assets/icons/hermes-award.svg'), content: '<svg></svg>' },
];

for (const media of mediaFiles) {
  fs.mkdirSync(path.dirname(media.path), { recursive: true });
  fs.writeFileSync(media.path, media.content);
}

// delete old components
const oldComponents = ['Navbar.tsx', 'Hero.tsx', 'Stats.tsx', 'Services.tsx', 'Footer.tsx'];
for (const file of oldComponents) {
  try {
    fs.unlinkSync(path.join(src, 'components', file));
  } catch (e) { }
}

console.log('scaffolding complete');
