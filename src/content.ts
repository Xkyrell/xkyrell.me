/** FAQ builder */
const qa = (question: string, answer: string) => ({ question, answer });

// General
export const site = {
  lang: 'en',
  skipLink: 'Skip to content',
  backToTop: 'Back to top',
  mainNavLabel: 'Main',
  footer: {
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
  },
  nav: { home: 'Home', portfolio: 'Portfolio', faq: 'FAQ' },
};

// Home
export const home = {
  title: '{nickname} | Welcome',
  description: 'Personal website of {nickname}\'s featuring information about him and his work',
  kicker: 'Backend Developer',
  lead:
    'I work as a freelance developer building reliable backend systems and software. ' + 
    'Most of my work is done in Java and I am learning Kotlin. A preference for simplicity, clean and high-quality code.',
  buttons: { github: 'GitHub', email: 'Gmail', discord: 'Discord' },
};

// Portfolio
export const portfolio = {
  title: '{nickname} | Portfolio',
  description: 'Personal portfolio showcasing {nickname}\'s projects, skills and experience.',
  heading: 'Portfolio',
  about: {
    heading: 'Minecraft Developer',
    text:
      'I have around 6 years of experience developing Minecraft software ' + 
      'with a focus on plugins, performace and packet-level systems.',
  },
  stackHeading: 'Tech stack',
  stack: [
    { title: 'Languages', items: ['Java', 'Kotlin', 'SQL'] },
    { title: 'Minecraft', items: ['Paper', 'Folia', 'Velocity', 'BungeeCord'] },
    { title: 'Networking and packets', items: ['ProtocolLib', 'PacketEvents', 'NMS', 'Netty'] },
    { title: 'Data and infrastructure', items: ['Redis', 'MySQL', 'SQLite', 'H2', 'MongoDB', 'Docker'] },
    { title: 'Tools', items: ['Git', 'Maven', 'Gradle', 'Linux', 'IntelliJ IDEA'] },
  ],
  projectsHeading: 'Projects',
  watch: 'Watch it',
  soon: { 
    label: '^_^', text: 'Coming soon...' 
  },
};

// FAQ definition
export const faq = {
  title: '{nickname} | FAQ',
  description: 'Frequently asked questions from employers and clients.',
  heading: 'FAQ',
  items: [],
};

// Privacy
export const privacy = {
  title: '{nickname} | Privacy Policy',
  description: 'How this website handles data.',
  heading: 'Privacy Policy',
  updated: 'Last updated: 6 November 2026',
  sections: [
    {
      heading: 'Summary',
      paragraphs: [
        'This is a static personal website. It has no accounts, forms, comments, cookies, analytics or advertising, and it does not collect personal data itself.',
      ],
    },
    {
      heading: 'Hosting',
      paragraphs: [
        'The site is hosted on GitHub Pages. When you visit, GitHub, as the hosting provider, may process technical data such as your IP address, browser type and request time in server logs. ' +
          'This processing is governed by the [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement); I do not have access to individual visitor logs.',
      ],
    },
    {
      heading: 'Cookies and local storage',
      paragraphs: ["The site does not set cookies and does not store anything in your browser's local storage."],
    },
    {
      heading: 'Third-party resources',
      paragraphs: ['All fonts, scripts, styles and images are served from this site. No third-party trackers, fonts or embeds are loaded.'],
    },
    {
      heading: 'Contact links',
      paragraphs: [
        'Links to GitHub, Discord and e-mail lead to external services with their own privacy policies. If you write to me by e-mail, I will use your message and address only to reply to you.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: ['Questions about this policy: [{email}](mailto:{email}).'],
    },
  ],
  back: '← Back to the main page',
};

import { profile } from './config';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const placeholder = (s: string) => s.replace(/\{(name|nickname|email)\}/g, (_, k: 'name' | 'nickname' | 'email') => profile[k]);

export const rich = (s: string) =>
  esc(placeholder(s)).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text, href) => {
    const external = /^https?:/.test(href);
    return `<a href="${href}"${external ? ' rel="noopener noreferrer"' : ''}>${text}</a>`;
  });
