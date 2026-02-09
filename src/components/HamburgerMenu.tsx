import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { label: 'Prepare My Card', to: '/prepare' },
  { label: 'Review My Rights', to: '/rights' },
  { label: 'Help Your Community', to: '/community' },
  { label: 'Tips', to: '/tips' },
  { label: 'Hotlines & Resources', to: '/hotlines' },
  { label: 'About', to: '/about' },
];

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 flex flex-col justify-center gap-[5px]"
        aria-label="Open menu"
      >
        <span className="block w-5 h-[2px] bg-foreground" />
        <span className="block w-5 h-[2px] bg-foreground" />
        <span className="block w-5 h-[2px] bg-foreground" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col animate-page-enter">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-foreground"
              aria-label="Close menu"
            >
              <span className="block text-2xl leading-none font-light">✕</span>
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex-1 flex flex-col justify-center px-8 pb-16">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-xl font-bold uppercase tracking-wider transition-opacity ${
                      location.pathname.startsWith(item.to)
                        ? 'opacity-100'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
