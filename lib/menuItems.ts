export interface MenuItem {
    name: string;
    url: string;       // Route URL (ví dụ: "/", "/blog")
    scrollTo?: string; // ID của section nếu có (ví dụ: "about")
}

export const menuItems: MenuItem[] = [
    { name: 'home', url: '/', scrollTo: 'home-section' },
    { name: 'about', url: '/', scrollTo: 'about-me-section' },
    { name: 'resume', url: '/', scrollTo: 'resume-section' },
    { name: 'blog', url: '/blog', scrollTo: 'blog-section' },
    { name: 'contact', url: '*', scrollTo: 'contact-section' },
]