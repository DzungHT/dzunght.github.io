export interface MenuItem {
    name: string;
    url: string;       // Route URL (ví dụ: "/", "/blog")
    scrollTo?: string; // ID của section nếu có (ví dụ: "about")
}

export const menuItems: MenuItem[] = [
    { name: 'home', url: '/', scrollTo: 'mh-home' },
    { name: 'about', url: '/', scrollTo: 'mh-about' },
    { name: 'services', url: '/', scrollTo: 'mh-service' },
    { name: 'blog', url: '/blog', scrollTo: 'mh-blog' },
    { name: 'contact', url: '*', scrollTo: 'mh-contact' },
]