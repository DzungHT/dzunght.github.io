import { IconType } from 'react-icons';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6';

export interface SocialInfo {
    icon: IconType,
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
    icon: FaGithub,
    name: 'GitHub',
    url: 'https://github.com/DzungHT'
}

export const linkedinInfo: SocialInfo = {
    icon: FaLinkedin,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dzunght95/'
}


export const facebookInfo: SocialInfo = {
    icon: FaFacebook,
    name: 'Facebook',
    url: 'https://www.facebook.com/dz.optimus'
}


export const userInfo: UserInfo = {
    fullName: 'Hoàng Trí Dũng',
    shortName: 'DzungHT',
    avatar: '/assets/images/avatar.jpg',
    role: 'Project Manager / Software Engineer',
    email: 'dzunght95@gmail.com',
    phone: '(+84)-334-xxx-525',
    location: 'Hanoi, Vietnam',
    socials: [
        gitHubInfo,
        linkedinInfo,
        facebookInfo,
    ]
}