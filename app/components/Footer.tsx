const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'TikTok', href: 'https://www.tiktok.com' },
  { label: 'Pinterest', href: 'https://www.pinterest.com' }
];

const Footer = () => (
  <footer className="border-t border-white/10 bg-slate-950">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <p className="text-sm text-slate-400">© {new Date().getFullYear()} Phase One. Crafted for launch moments.</p>
      <div className="flex gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            rel="noopener noreferrer"
            target="_blank"
            className="text-sm text-slate-300 transition hover:text-white"
            data-analytics={`footer.social.${social.label.toLowerCase()}`}
          >
            {social.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
