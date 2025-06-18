export interface MenuItem {
    name: string,
    url: string,
}

export const menuItems: MenuItem[] = [
    { name: 'home', url: 'mh-home' },
    { name: 'about', url: 'mh-about' },
    { name: 'services', url: 'mh-service' },
    { name: 'contact', url: 'mh-contact' },
]