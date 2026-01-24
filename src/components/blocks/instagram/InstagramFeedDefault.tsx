import { useEffect } from "react";
import type { Block } from "@/types/storefront";

// TypeScript declaration for Instagram embed
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

interface Props {
  block: Block;
}

const instagramEmbeds = [
  {
    id: "1",
    permalink: "https://www.instagram.com/reel/DT2W77iCA2r/",
    captioned: true,
  },
  {
    id: "2",
    permalink: "https://www.instagram.com/p/DTmlqU4CCpO/",
    captioned: true,
  },
  {
    id: "3",
    permalink: "https://www.instagram.com/p/DTirromiH-l/",
    captioned: false,
  },
  {
    id: "4",
    permalink: "https://www.instagram.com/p/DTIaThSiJ6J/",
    captioned: false,
  },
  {
    id: "5",
    permalink: "https://www.instagram.com/p/DSbts2XiA-r/",
    captioned: false,
  },
  {
    id: "6",
    permalink: "https://www.instagram.com/p/DR3x6HPDOqc/",
    captioned: false,
  },
  {
    id: "7",
    permalink: "https://www.instagram.com/p/DRUl3rZDDeL/",
    captioned: false,
  },
];

export default function InstagramFeedDefault({ block: _block }: Props) {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Process embeds after script loads
    script.onload = () => {
      if (window.instgrm?.Embeds) {
        window.instgrm.Embeds.process();
        
        // Hide like counts after embeds are processed
        setTimeout(() => {
          const instagramEmbeds = document.querySelectorAll('.instagram-media');
          instagramEmbeds.forEach((embed) => {
            // Find and hide like count elements
            const likeElements = embed.querySelectorAll('[style*="margin-left: auto"]');
            likeElements.forEach((el) => {
              const html = (el as HTMLElement).innerHTML;
              // Check if it contains like-related content (hearts, numbers, etc.)
              if (html.includes('♥') || html.includes('like') || /^\d+$/.test(html.trim())) {
                (el as HTMLElement).style.display = 'none';
              }
            });
          });
        }, 1000);
      }
    };

    // Add observer to hide likes when new embeds are added
    const observer = new MutationObserver(() => {
      const instagramEmbeds = document.querySelectorAll('.instagram-media');
      instagramEmbeds.forEach((embed) => {
        const likeElements = embed.querySelectorAll('[style*="margin-left: auto"]');
        likeElements.forEach((el) => {
          const html = (el as HTMLElement).innerHTML;
          if (html.includes('♥') || html.includes('like') || /^\d+$/.test(html.trim())) {
            (el as HTMLElement).style.display = 'none';
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        {/* Header with title and Instagram handle */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl tracking-[0.1em] font-light text-foreground uppercase mb-3 sm:mb-0">
            AS SEEN ON INSTAGRAM
          </h2>
          <a
            href="https://instagram.com/mesmerize_kenya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base tracking-[0.1em] font-light text-foreground uppercase hover:text-foreground/70 transition-colors"
          >
            @mesmerize_kenya
          </a>
        </div>

        {/* Instagram Feed Grid - 4 columns in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center instagram-feed-container">
          {instagramEmbeds.slice(0, 4).map((embed) => (
            <blockquote
              key={embed.id}
              className="instagram-media"
              data-instgrm-captioned={embed.captioned}
              data-instgrm-permalink={embed.permalink}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "3px",
                boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "326px",
                padding: 0,
                width: "99.375%",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
