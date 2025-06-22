export interface SocialInfo {
    iconClass: string,
    name: string,
    url: string,

}

export interface UserInfo {
    fullName: string,
    shortName: string,
    avatar: string,
    role: string,
    email: string,
    phone: string,
    location: string,
    socials: SocialInfo[]

}

export const gitHubInfo: SocialInfo = {
    iconClass: 'fa fa-github',
    name: 'GitHub',
    url: 'https://github.com/DzungHT'
}

export const linkedinInfo: SocialInfo = {
    iconClass: 'fa fa-linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dzunght95/'
}


export const facebookInfo: SocialInfo = {
    iconClass: 'fa fa-facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/dz.optimus'
}


export const userInfo: UserInfo = {
    fullName: 'Hoàng Trí Dũng',
    shortName: 'DzungHT',
    avatar: '/assets/images/avatar.jpg',
    role: 'Software Engineer / Project Manager',
    email: 'dzunght95@gmail.com',
    phone: '(+84)-334-xxx-525',
    location: 'Hanoi, Vietnam',
    socials: [
        gitHubInfo,
        linkedinInfo,
        facebookInfo,
    ]
}