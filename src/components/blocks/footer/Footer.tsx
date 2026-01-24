import { useState } from "react";
import { Instagram, Facebook, Linkedin, ChevronDown } from "lucide-react";

export default function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Explore The Shop Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-primary-foreground">
            EXPLORE THE SHOP
          </h2>
        </div>

        {/* Desktop: 5 Columns Grid | Mobile: Accordion */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          {/* Desktop View - Hidden on mobile */}
          <div className="hidden md:grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            {/* Column 1: Luxury Flowers & Special Editions */}
            <div>
              <h3 className="font-bold text-sm uppercase mb-4 text-primary-foreground">LUXURY FLOWERS</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li><a href="/fresh-flowers" className="hover:text-primary-foreground transition-colors">Fresh Flowers</a></li>
                <li><a href="/long-life-roses" className="hover:text-primary-foreground transition-colors">Long Life Roses</a></li>
                <li><a href="/faux-flowers" className="hover:text-primary-foreground transition-colors">Faux Flowers</a></li>
                <li><a href="/orchids" className="hover:text-primary-foreground transition-colors">Orchids</a></li>
              </ul>
              <h3 className="font-bold text-sm uppercase mb-4 mt-8 text-primary-foreground">SPECIAL EDITIONS</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li><a href="/home-garden" className="hover:text-primary-foreground transition-colors">Home & Garden</a></li>
                <li><a href="/faux-plants" className="hover:text-primary-foreground transition-colors">Faux Plants</a></li>
              </ul>
            </div>

            {/* Column 2: Gift Sets & Sweets & Events */}
            <div>
              <h3 className="font-bold text-sm uppercase mb-4 text-primary-foreground">GIFT SETS & SWEETS</h3>
              <h3 className="font-bold text-sm uppercase mb-4 mt-8 text-primary-foreground">EVENTS</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li><a href="/weddings-events" className="hover:text-primary-foreground transition-colors">Weddings & Events</a></li>
                <li><a href="/corporate" className="hover:text-primary-foreground transition-colors">Corporate</a></li>
                <li><a href="/home-decor" className="hover:text-primary-foreground transition-colors">Home Décor</a></li>
              </ul>
            </div>

            {/* Column 3: Shop by Occasion */}
            <div>
              <h3 className="font-bold text-sm uppercase mb-4 text-primary-foreground">SHOP BY OCCASION</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li><a href="/anniversary-flowers" className="hover:text-primary-foreground transition-colors">Anniversary Flowers</a></li>
                <li><a href="/birthday-flowers" className="hover:text-primary-foreground transition-colors">Birthday Flowers</a></li>
                <li><a href="/new-born-baby" className="hover:text-primary-foreground transition-colors">New Born Baby</a></li>
                <li><a href="/congratulations-flowers" className="hover:text-primary-foreground transition-colors">Congratulations Flowers</a></li>
                <li><a href="/flowers-for-her" className="hover:text-primary-foreground transition-colors">Flowers For Her</a></li>
                <li><a href="/flowers-for-him" className="hover:text-primary-foreground transition-colors">Flowers For Him</a></li>
                <li><a href="/get-well-soon" className="hover:text-primary-foreground transition-colors">Get Well Soon</a></li>
                <li><a href="/im-sorry-flowers" className="hover:text-primary-foreground transition-colors">I'm Sorry Flowers</a></li>
                <li><a href="/thank-you-flowers" className="hover:text-primary-foreground transition-colors">Thank You Flowers</a></li>
              </ul>
            </div>

            {/* Column 4: Celebrations */}
            <div>
              <h3 className="font-bold text-sm uppercase mb-4 text-primary-foreground">CELEBRATIONS</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li><a href="/christmas-flowers" className="hover:text-primary-foreground transition-colors">Christmas Flowers</a></li>
                <li><a href="/easter-flowers" className="hover:text-primary-foreground transition-colors">Easter Flowers</a></li>
                <li><a href="/halloween-flowers" className="hover:text-primary-foreground transition-colors">Halloween Flowers</a></li>
                <li><a href="/new-year-flowers" className="hover:text-primary-foreground transition-colors">New Year Flowers</a></li>
                <li><a href="/nowruz-flowers" className="hover:text-primary-foreground transition-colors">Nowruz Flowers</a></li>
                <li><a href="/valentine-flowers" className="hover:text-primary-foreground transition-colors">Valentine Flowers</a></li>
              </ul>
            </div>

            {/* Column 5: Seasonal */}
            <div>
              <h3 className="font-bold text-sm uppercase mb-4 text-primary-foreground">SEASONAL</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li><a href="/fall-collection" className="hover:text-primary-foreground transition-colors">Fall Collection</a></li>
                <li><a href="/festive-collection" className="hover:text-primary-foreground transition-colors">Festive Collection</a></li>
                <li><a href="/mothers-day-collection" className="hover:text-primary-foreground transition-colors">Mother's Day Collection</a></li>
                <li><a href="/ramadan-collection" className="hover:text-primary-foreground transition-colors">Ramadan Collection</a></li>
                <li><a href="/spring-collection" className="hover:text-primary-foreground transition-colors">Spring Collection</a></li>
                <li><a href="/summer-collection" className="hover:text-primary-foreground transition-colors">Summer Collection</a></li>
              </ul>
            </div>
          </div>

          {/* Mobile Accordion View */}
          <div className="md:hidden space-y-2">
            {/* Luxury Flowers */}
            <div className="border-b border-primary-foreground/10">
              <button
                type="button"
                onClick={() => toggleSection("luxury")}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-bold text-sm uppercase">LUXURY FLOWERS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${expandedSection === "luxury" ? "rotate-180" : ""}`} />
              </button>
              {expandedSection === "luxury" && (
                <ul className="space-y-3 text-sm text-primary-foreground/70 pb-4">
                  <li><a href="/fresh-flowers">Fresh Flowers</a></li>
                  <li><a href="/long-life-roses">Long Life Roses</a></li>
                  <li><a href="/faux-flowers">Faux Flowers</a></li>
                  <li><a href="/orchids">Orchids</a></li>
                </ul>
              )}
            </div>

            {/* Occasions */}
            <div className="border-b border-primary-foreground/10">
              <button
                type="button"
                onClick={() => toggleSection("occasions")}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-bold text-sm uppercase">SHOP BY OCCASION</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${expandedSection === "occasions" ? "rotate-180" : ""}`} />
              </button>
              {expandedSection === "occasions" && (
                <ul className="space-y-3 text-sm text-primary-foreground/70 pb-4">
                  <li><a href="/anniversary-flowers">Anniversary Flowers</a></li>
                  <li><a href="/birthday-flowers">Birthday Flowers</a></li>
                  <li><a href="/new-born-baby">New Born Baby</a></li>
                  <li><a href="/congratulations-flowers">Congratulations Flowers</a></li>
                </ul>
              )}
            </div>

            {/* Events */}
            <div className="border-b border-primary-foreground/10">
              <button
                type="button"
                onClick={() => toggleSection("events")}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-bold text-sm uppercase">EVENTS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${expandedSection === "events" ? "rotate-180" : ""}`} />
              </button>
              {expandedSection === "events" && (
                <ul className="space-y-3 text-sm text-primary-foreground/70 pb-4">
                  <li><a href="/weddings-events">Weddings & Events</a></li>
                  <li><a href="/corporate">Corporate</a></li>
                  <li><a href="/home-decor">Home Décor</a></li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Mid-Section: Brand & Navigation/Contact/Account */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12 border-t border-primary-foreground/10 pt-8 sm:pt-10 md:pt-12">
          {/* Left: Brand Information */}
          <div className="md:col-span-1 text-center md:text-left">
            <img 
              src="https://utfs.io/f/Pa5Wucpkzp6Lgzk7hl53eICnfTsN1WqM2hLpSPKw7O6oBYVb" 
              alt="Mesmerize" 
              className="h-12 sm:h-16 md:h-20 w-auto mb-4 sm:mb-6 object-contain mx-auto md:mx-0"
            />
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4 sm:mb-6">
              <a 
                href="https://facebook.com/mesmerizekenya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center hover:border-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/mesmerizekenya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center hover:border-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://instagram.com/mesmerizekenya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center hover:border-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            <p className="text-xs sm:text-sm text-primary-foreground/70 mb-1 sm:mb-2">Our Boutiques:</p>
            <p className="text-xs sm:text-sm text-primary-foreground/70">NAIROBI | MOMBASA | KISUMU</p>
          </div>

          {/* Right: Navigation, Contact, My Account */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Navigation */}
            <div>
              <h3 className="font-bold text-sm uppercase mb-3 sm:mb-4 text-primary-foreground">NAVIGATION</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-primary-foreground/70">
                <li><a href="/" className="hover:text-primary-foreground transition-colors">Home</a></li>
                <li><a href="/shop" className="hover:text-primary-foreground transition-colors">Shop</a></li>
                <li><a href="/about-us" className="hover:text-primary-foreground transition-colors">About Us</a></li>
                <li><a href="/locations" className="hover:text-primary-foreground transition-colors">Locations</a></li>
                <li><a href="/events-gallery" className="hover:text-primary-foreground transition-colors">Events Gallery</a></li>
                <li><a href="/blog" className="hover:text-primary-foreground transition-colors">Latest News & Blog</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-sm uppercase mb-3 sm:mb-4 text-primary-foreground">CONTACT</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-primary-foreground/70">
                <li>T. <a href="tel:+254780039148" className="hover:text-primary-foreground transition-colors">+254780039148</a></li>
                <li>M. <a href="tel:+254702045801" className="hover:text-primary-foreground transition-colors">+254702045801</a></li>
                <li className="mt-3 sm:mt-4">
                  <p className="font-medium mb-1 sm:mb-2 text-xs sm:text-sm">For Orders:</p>
                  <a href="mailto:order@mesmerizekenya.com" className="hover:text-primary-foreground transition-colors break-all">Order@Mesmerizekenya.Com</a>
                </li>
              </ul>
            </div>

            {/* My Account */}
            <div>
              <h3 className="font-bold text-sm uppercase mb-3 sm:mb-4 text-primary-foreground">MY ACCOUNT</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-primary-foreground/70">
                <li><a href="/login" className="hover:text-primary-foreground transition-colors">Login Or Register</a></li>
                <li><a href="/account" className="hover:text-primary-foreground transition-colors">My Account</a></li>
                <li><a href="/wishlist" className="hover:text-primary-foreground transition-colors">Wishlist</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Payment Options */}
        <div className="border-t border-primary-foreground/10 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-primary-foreground/40 text-center md:text-left">
            © 2026 Mesmerize Kenya. All Rights Reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <span className="text-xs sm:text-sm text-primary-foreground/70">Payment Options:</span>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/10 rounded border border-primary-foreground/20">
                <span className="text-white text-[10px] sm:text-xs font-bold">PAYSTACK</span>
              </div>
              <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/10 rounded border border-primary-foreground/20">
                <span className="text-white text-[10px] sm:text-xs font-bold">M-PESA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
