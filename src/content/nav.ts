import Avatar from '../assets/images/Avatar-nav.png';
import cv from '../assets/docs/Aneesa-Awaludin-CV-2025.pdf';

export const content = {
  avatar: Avatar,
  name: "Aneesa Awaludin",
  nameLink: '',
  navs: [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'experience', icon: 'briefcase', label: 'My Experience' },
    { id: 'education', icon: 'academic', label: 'My Education' }
  ],
  footers: [
    { id: 'linkedin', icon: 'linkedin', link: 'https://www.linkedin.com/in/aneesa-awaludin-6b2ba447/'},
    { id: 'pdf', icon: 'pdf', link: cv}
  ]
};