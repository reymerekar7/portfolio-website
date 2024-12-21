import React from 'react';
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';

const SocialBar = () => {
  const socials = [
    { icon: Github, href: 'https://github.com/reymerekar7', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/reyhanmerekar/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/reymerekar7', label: 'Twitter' },
    { icon: Mail, href: 'mailto:reyhan.merekar@gmail.com', label: 'Email' },
    { icon: Send, href: 'https://t.me', label: 'Telegram' },
  ];

  return (
    <div className="flex justify-center space-x-8">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110"
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialBar;