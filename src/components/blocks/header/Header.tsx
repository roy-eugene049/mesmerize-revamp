import { useState, useEffect } from "react";
import { Search, ShoppingBag, User, Heart, ChevronDown, X, Menu } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  subItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Categories",
    href: "#",
    hasDropdown: true,
    subItems: [
      { label: "Fresh Flowers", href: "#" },
      { label: "Orchids", href: "#" },
      { label: "Bouquets", href: "#" },
      { label: "Long Life Roses", href: "#" },
      { label: "Faux Flowers", href: "#" },
      { label: "Signature Collection", href: "#" },
    ],
  },
  {
    label: "Occasions",
    href: "#",
    hasDropdown: true,
    subItems: [
      { label: "Anniversary Flowers", href: "#" },
      { label: "Birthday Flowers", href: "#" },
      { label: "New Born Baby", href: "#" },
      { label: "Congratulations Flowers", href: "#" },
      { label: "Flowers For Her", href: "#" },
      { label: "Flowers For Him", href: "#" },
      { label: "Get Well Soon", href: "#" },
      { label: "I'm Sorry Flowers", href: "#" },
      { label: "Thank You Flowers", href: "#" },
    ],
  },
  {
    label: "Valentine's",
    href: "#",
  },
  {
    label: "Ramadan",
    href: "#",
  },
  {
    label: "Special Editions",
    href: "#",
    hasDropdown: true,
    subItems: [
      { label: "Home & Garden", href: "#" },
      { label: "Faux Plants", href: "#" },
      { label: "Luxury Collections", href: "#" },
      { label: "Limited Edition", href: "#" },
    ],
  },
  {
    label: "Gift Sets & Sweets",
    href: "#",
  },
  {
    label: "Events",
    href: "#",
    hasDropdown: true,
    subItems: [
      { label: "Weddings & Events", href: "#" },
      { label: "Corporate", href: "#" },
      { label: "Home Décor", href: "#" },
      { label: "Event Planning", href: "#" },
    ],
  },
];

export default function Header() {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  // Prevent body scroll when search or mobile menu is open
  useEffect(() => {
    if (isSearchOpen || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchOpen, isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex items-center justify-between py-2 sm:py-3">
            {/* Left: Phone Number (hidden on mobile) */}
            <div className="hidden sm:flex items-center gap-6">
              <a href="tel:+254780039148" className="flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors">
                <span className="text-xs tracking-widest font-medium uppercase">+254780039148</span>
              </a>
            </div>

            {/* Mobile: Hamburger Menu */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Center: Logo */}
            <div className="flex-1 sm:flex-initial text-center">
              <a href="/" className="inline-block">
                <img 
                  src="https://utfs.io/f/Pa5Wucpkzp6Lgzk7hl53eICnfTsN1WqM2hLpSPKw7O6oBYVb" 
                  alt="Mesmerize" 
                  className="h-10 sm:h-12 md:h-16 w-auto mx-auto object-contain"
                />
              </a>
            </div>

            {/* Right: Utility Icons */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-1 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                type="button"
                className="hidden sm:block p-1 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="p-1 text-gray-700 hover:text-gray-900 transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="absolute -top-1 -right-1 bg-[#D4AD70] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  1
                </span>
              </button>
              <button
                type="button"
                className="hidden md:block p-1 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Bar - Hidden on mobile/tablet */}
      <div className="hidden lg:block border-b border-gray-200 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <nav aria-label="Main navigation">
            <ul className="flex items-center justify-between py-4 list-none m-0 p-0">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative group flex-1"
                  onMouseEnter={() => item.hasDropdown && setHoveredNavItem(item.label)}
                  onMouseLeave={() => setHoveredNavItem(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center justify-center gap-1.5 text-[11px] tracking-widest font-bold text-gray-900 hover:text-gray-700 transition-colors uppercase"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Desktop Megamenu */}
        {hoveredNavItem && (() => {
          const activeItem = navItems.find(item => item.label === hoveredNavItem && item.hasDropdown);
          if (!activeItem) return null;
          
          return (
            <div 
              className="absolute left-0 right-0 top-full mt-0 w-full bg-white shadow-lg z-50"
              onMouseEnter={() => setHoveredNavItem(hoveredNavItem)}
              onMouseLeave={() => setHoveredNavItem(null)}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex h-[400px] overflow-hidden">
                  <div className="flex-1 p-10 flex items-start min-w-0 overflow-hidden">
                    <ul className="space-y-4 w-full list-none p-0 m-0 overflow-y-auto">
                      {activeItem.subItems?.map((subItem) => (
                        <li key={subItem.label} className="whitespace-nowrap">
                          <a
                            href={subItem.href}
                            className="text-sm font-normal text-gray-900 hover:text-gray-700 transition-colors block py-1"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-[45%] min-w-0 relative overflow-hidden flex-shrink-0">
                    <div 
                      className="h-full w-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f5f2ed;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23e8d5d5;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='600' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='%23c5a059' text-anchor='middle' dominant-baseline='middle'%3E🌸 Floral Display 🌸%3C/text%3E%3C/svg%3E")`,
                        backgroundColor: '#f5f2ed'
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                      <p className="text-white font-bold text-xl uppercase mb-2 leading-tight">
                        {hoveredNavItem === "Categories" && "DISCOVER OUR WIDE RANGE OF FLOWERS"}
                        {hoveredNavItem === "Occasions" && "PERFECT FLOWERS FOR EVERY OCCASION"}
                        {hoveredNavItem === "Special Editions" && "EXCLUSIVE SPECIAL EDITIONS"}
                        {hoveredNavItem === "Events" && "ELEGANT FLORAL ARRANGEMENTS FOR EVENTS"}
                      </p>
                      <p className="text-white text-sm font-normal">
                        {hoveredNavItem === "Categories" && "View our full selection of Gorgeous Flowers"}
                        {hoveredNavItem === "Occasions" && "Find the perfect arrangement for your special moment"}
                        {hoveredNavItem === "Special Editions" && "Explore our limited edition collections"}
                        {hoveredNavItem === "Events" && "Transform your events with our stunning arrangements"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div className="absolute top-0 left-0 bottom-0 w-full max-w-sm bg-white shadow-xl overflow-y-auto">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <img 
                src="https://utfs.io/f/Pa5Wucpkzp6Lgzk7hl53eICnfTsN1WqM2hLpSPKw7O6oBYVb" 
                alt="Mesmerize" 
                className="h-12 w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="p-4">
              <ul className="space-y-2 list-none p-0 m-0">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => setExpandedMobileItem(expandedMobileItem === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between py-3 px-4 text-sm font-bold text-gray-900 hover:bg-gray-50 transition-colors uppercase tracking-wider"
                        >
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${expandedMobileItem === item.label ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedMobileItem === item.label && (
                          <ul className="pl-4 mt-2 space-y-2 list-none">
                            {item.subItems?.map((subItem) => (
                              <li key={subItem.label}>
                                <a
                                  href={subItem.href}
                                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block py-3 px-4 text-sm font-bold text-gray-900 hover:bg-gray-50 transition-colors uppercase tracking-wider"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-gray-200 space-y-3">
              <a href="tel:+254780039148" className="block py-2 text-sm text-gray-700">
                📞 +254780039148
              </a>
              <div className="flex gap-3">
                <button className="flex-1 py-2 px-4 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Wishlist
                </button>
                <button className="flex-1 py-2 px-4 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Account
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full-Page Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 text-white hover:text-white/80 transition-colors p-2"
            aria-label="Close search"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-12 sm:py-20">
            <p className="text-white text-xs sm:text-sm mb-6 sm:mb-8 text-center">
              Start typing and press enter to search
            </p>

            <div className="w-full max-w-2xl mb-12 sm:mb-16">
              <label htmlFor="search-input" className="block text-white text-base sm:text-lg mb-3 sm:mb-4 font-medium">
                Search
              </label>
              <input
                id="search-input"
                type="text"
                autoFocus
                className="w-full bg-transparent border-b-2 border-white text-white text-xl sm:text-2xl md:text-3xl pb-3 sm:pb-4 focus:outline-none focus:border-white/80 transition-colors placeholder:text-white/40"
                placeholder=""
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setIsSearchOpen(false);
                  }
                }}
              />
            </div>

            <div className="w-full max-w-2xl text-left">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-2">
                SIGNATURE COLLECTION
              </p>
              <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-3 sm:mb-4">
                PREMIUM FLOWERS & LUXURY GIFTS
              </h3>
              <p className="text-white/90 text-sm md:text-base mb-4 sm:mb-6 leading-relaxed max-w-xl">
                Discover our exquisite collection of fresh flowers, preserved arrangements, and thoughtfully curated gift sets. Each arrangement is carefully crafted to bring beauty and joy to every occasion.
              </p>
              <a
                href="/collections/signature"
                className="text-white underline hover:text-white/80 transition-colors text-sm md:text-base"
                onClick={() => setIsSearchOpen(false)}
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
