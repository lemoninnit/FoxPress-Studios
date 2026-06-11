export interface NavLink { label: string; href: string; }
export interface Stat { icon: string; value: number; suffix: string; label: string; }
export interface Service { title: string; desc: string; icon: string; }
export interface Testimonial { quote: string; author: string; role: string; }
export interface NewsPost { title: string; date: string; summary: string; image?: string; }
export interface TeamMember { name: string; role: string; image?: string; }
export interface Award { name: string; year: string; category: string; icon?: string; }
export interface Project { title: string; category: string; }
