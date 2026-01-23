import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Explore The Shop Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-primary-foreground">
            EXPLORE THE SHOP
          </h2>
        </div>

        {/* Upper Links Section - 5 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-16">
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

        {/* Mid-Section: Brand & Navigation/Contact/Account */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-t border-primary-foreground/10 pt-12">
          {/* Left: Brand Information */}
          <div className="md:col-span-1">
            <img 
              src="https://utfs.io/f/Pa5Wucpkzp6Lgzk7hl53eICnfTsN1WqM2hLpSPKw7O6oBYVb" 
              alt="Mesmerize" 
              className="h-16 md:h-20 w-auto mb-6 object-contain"
            />
            <div className="flex items-center space-x-3 mb-6">
              <a 
                href="https://facebook.com/mesmerizekenya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center hover:border-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/mesmerizekenya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center hover:border-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/mesmerizekenya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center hover:border-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://pinterest.com/mesmerizekenya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center hover:border-primary-foreground transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-label="Pinterest">
                  <title>Pinterest</title>
                  <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c5.302 0 9.917-3.176 11.827-7.73-.163-.66-.37-1.308-.618-1.942-.353.15-.718.25-1.095.33.395-.472.696-1.02.9-1.62.21-.63.315-1.296.315-1.986 0-2.576-1.408-4.782-3.843-5.788-.45-.23-.93-.345-1.41-.345-1.1 0-2.1.6-2.73 1.5-.54.75-.855 1.8-.855 2.85 0 .96.24 1.8.72 2.55.15.24.18.42.12.66l-.3 1.2c-.06.24-.24.3-.54.18-1.26-.54-2.04-2.16-2.04-3.9 0-3.33 2.43-6.36 6.06-6.36 3.33 0 5.4 2.1 5.4 5.1 0 3.78-2.04 6.66-5.22 6.66-1.02 0-1.98-.54-2.31-1.26l-.63 2.4c-.23.9-.84 2.04-1.26 2.7 1.14.36 2.34.54 3.6.54 6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-2">Our Boutiques:</p>
            <p className="text-sm text-primary-foreground/70">NAIROBI | MOMBASA | KISUMU</p>
          </div>

          {/* Right: Navigation, Contact, My Account */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Navigation */}
            <div>
              <h3 className="font-bold text-sm uppercase mb-4 text-primary-foreground">NAVIGATION</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li><a href="/" className="hover:text-primary-foreground transition-colors">Home</a></li>
                <li><a href="/shop" className="hover:text-primary-foreground transition-colors">Shop</a></li>
                <li><a href="/about-us" className="hover:text-primary-foreground transition-colors">About Us</a></li>
                <li><a href="/locations" className="hover:text-primary-foreground transition-colors">Locations</a></li>
                <li><a href="/events-gallery" className="hover:text-primary-foreground transition-colors">Events Gallery</a></li>
                <li><a href="/blog" className="hover:text-primary-foreground transition-colors">Latest News & Blog</a></li>
                <li><a href="/reviews" className="hover:text-primary-foreground transition-colors">Reviews Or Testimonials</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-sm uppercase mb-4 text-primary-foreground">CONTACT</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li>T. <a href="tel:+254780039148" className="hover:text-primary-foreground transition-colors">+254780039148</a></li>
                <li>M. <a href="tel:+254702045801" className="hover:text-primary-foreground transition-colors">+254702045801</a></li>
                <li className="mt-4">
                  <p className="font-medium mb-2">For Orders And Follow-Ups:</p>
                  <a href="mailto:order@mesmerizekenya.com" className="hover:text-primary-foreground transition-colors">Order@Mesmerizekenya.Com</a>
                </li>
                <li className="mt-4">
                  <p className="font-medium mb-2">For General Inquiries:</p>
                  <a href="mailto:marketing@mesmerizekenya.com" className="hover:text-primary-foreground transition-colors">Marketing@Mesmerizekenya.Com</a>
                </li>
              </ul>
            </div>

            {/* My Account */}
            <div>
              <h3 className="font-bold text-sm uppercase mb-4 text-primary-foreground">MY ACCOUNT</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li><a href="/login" className="hover:text-primary-foreground transition-colors">Login Or Register</a></li>
                <li><a href="/account" className="hover:text-primary-foreground transition-colors">My Account</a></li>
                <li><a href="/wishlist" className="hover:text-primary-foreground transition-colors">Wishlist</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Payment Options */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs uppercase tracking-widest text-primary-foreground/40 mb-4 md:mb-0">
            © 2026 Mesmerize Kenya. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-primary-foreground/70">Payment Options:</span>
            <div className="flex items-center gap-4">
              {/* Paystack */}
              <div className="px-3 py-1.5 bg-white/10 rounded border border-primary-foreground/20">
                <span className="text-white text-xs font-bold">PAYSTACK</span>
              </div>
              {/* M-Pesa */}
              <div className="px-3 py-1.5 bg-white/10 rounded border border-primary-foreground/20">
                <span className="text-white text-xs font-bold">M-PESA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
