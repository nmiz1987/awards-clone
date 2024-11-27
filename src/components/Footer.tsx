import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://discord.com', icon: <FaDiscord />, color: '#7289da' },
  { href: 'https://twitter.com', icon: <FaTwitter />, color: '#1DA1F2' },
  { href: 'https://youtube.com', icon: <FaYoutube />, color: '#FF0000' },
  { href: 'https://medium.com', icon: <FaMedium />, color: '#000' },
];

export const Footer = () => {
  return (
    <footer className="w-screen bg-[#7668fb] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">©Nova 2024. All rights reserved</p>

        <div className="flex justify-center gap-6 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-colors duration-500 ease-in-out hover:text-white"
              style={{ color: link.color }}>
              {link.icon}
            </a>
          ))}
        </div>

        <a href="#privacy-policy" className="text-center text-sm font-light hover:underline md:text-right">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};
