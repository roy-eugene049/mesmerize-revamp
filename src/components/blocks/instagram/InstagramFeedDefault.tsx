import { useState } from "react";
import { Instagram, ChevronLeft, ChevronRight, Play } from "lucide-react";
import type { Block } from "@/types/storefront";

const MESMERIZE_INSTAGRAM_URL =
  "https://www.instagram.com/mesmerize_kenya?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

const MESMERIZE_LOGO_URL =
  "https://utfs.io/f/Pa5Wucpkzp6Lgzk7hl53eICnfTsN1WqM2hLpSPKw7O6oBYVb";

/** Single card: either a video or one or more images */
export type InstagramCardMedia =
  | { type: "video"; url: string }
  | { type: "images"; urls: string[] };

export interface InstagramCardItem {
  id: string;
  media: InstagramCardMedia;
  caption?: string;
}

/** Default feed data – easily customizable */
export const defaultInstagramCards: InstagramCardItem[] = [
  {
    id: "1",
    media: {
      type: "video",
      url: "https://utfs.io/f/Pa5Wucpkzp6LJCLzXMH9BSDAmzTy5W1Cn7R0whjGEgH9Y2U3",
    },
    caption: "Should we make this your valentine's gift?",
  },
  {
    id: "2",
    media: {
      type: "images",
      urls: [
        "https://utfs.io/f/Pa5Wucpkzp6LX62TtUluB8HOMQmlFY5aztEqsWSjDy0oPdNG",
        "https://utfs.io/f/Pa5Wucpkzp6LQYknciiRKUTPY5rFWu87xoOw6enVIZGNjg4q",
      ],
    },
    caption: "Fresh blooms for every occasion.",
  },
  {
    id: "3",
    media: {
      type: "images",
      urls: [
        "https://utfs.io/f/Pa5Wucpkzp6LLCyAv7fD8TeNJSp27KXRlq56rMZ4a9EBYVoA",
        "https://utfs.io/f/Pa5Wucpkzp6LrEPkXhmBkn7U5STDpYFyJ6PHl9hm8x3XWOV4",
      ],
    },
    caption: "Elegant arrangements, delivered with care.",
  },
  {
    id: "4",
    media: {
      type: "images",
      urls: [
        "https://utfs.io/f/Pa5Wucpkzp6L566CWwSoglb3x6kpmXNfEeqFT2AJ08CuL49c",
      ],
    },
    caption: "Bringing beauty to your space.",
  },
];

interface Props {
  block: Block;
  /** Override cards; defaults to defaultInstagramCards */
  cards?: InstagramCardItem[];
  /** Profile URL for View profile / View more; defaults to Mesmerize Instagram */
  profileUrl?: string;
}

function InstagramCard({
  card,
  profileUrl,
}: {
  card: InstagramCardItem;
  profileUrl: string;
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const isVideo = card.media.type === "video";
  const images = card.media.type === "images" ? card.media.urls : [];
  const hasMultipleImages = images.length > 1;

  const goPrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setImageIndex((i) => (i <= 0 ? images.length - 1 : i - 1));
  };
  const goNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setImageIndex((i) => (i >= images.length - 1 ? 0 : i + 1));
  };
  const setIndex = (i: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setImageIndex(i);
  };

  return (
    <article
      className="flex flex-col bg-white rounded-lg overflow-hidden border border-black/25"
      style={{ minHeight: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
    >
      {/* Header: profile, username, followers, View profile */}
      <header className="flex items-center gap-3 p-3 shrink-0 border-b border-black/10">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 min-w-0 flex-1"
          aria-label="View Mesmerize Instagram profile"
        >
          {/* Logo circle with Instagram-style gradient border (red → orange → purple) */}
          <div
            className="shrink-0 p-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            }}
          >
            <div className="size-10 rounded-full overflow-hidden bg-[#f5f2ed] border border-black/5 flex items-center justify-center">
              <img
                src={MESMERIZE_LOGO_URL}
                alt=""
                className="w-full h-full object-contain p-0.5"
              />
            </div>
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-foreground truncate">
              mesmerize_kenya
            </p>
            <p className="text-xs text-muted-foreground">13.1K followers</p>
          </div>
        </a>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-3 py-1.5 rounded-lg bg-[#0095f6] text-white text-sm font-semibold hover:bg-[#0095f6]/90 transition-colors"
        >
          View profile
        </a>
      </header>

      {/* Media: fixed aspect for uniform card height */}
      <div className="relative w-full aspect-square bg-black/5 shrink-0">
        {isVideo ? (
          <>
            <video
              src={card.media.url}
              poster=""
              className="absolute inset-0 w-full h-full object-cover"
              playsInline
              muted
              loop
              preload="metadata"
            />
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/20 hover:bg-black/30 transition-colors"
              aria-label="Watch on Instagram"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-white/90 text-foreground">
                <Play className="size-7 ml-1" fill="currentColor" />
              </span>
              <span className="text-sm font-medium text-white drop-shadow-md">
                Watch on Instagram
              </span>
            </a>
          </>
        ) : (
          <>
            {images[imageIndex] != null && (
              <img
                key={`${card.id}-img-${imageIndex}`}
                src={images[imageIndex]}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            {hasMultipleImages && images.length > 0 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-white/90 shadow-md flex items-center justify-center text-foreground hover:bg-white transition-colors z-10"
                  aria-label="Previous variation"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-white/90 shadow-md flex items-center justify-center text-foreground hover:bg-white transition-colors z-10"
                  aria-label="Next variation"
                >
                  <ChevronRight className="size-5" />
                </button>
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
                  {images.map((_, i) => (
                    <button
                      key={`${card.id}-dot-${i}`}
                      type="button"
                      onClick={setIndex(i)}
                      className={`size-1.5 rounded-full transition-colors ${
                        i === imageIndex ? "bg-white" : "bg-white/50"
                      }`}
                      aria-label={`View variation ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* Footer: View more, caption, Instagram icon */}
      <footer className="flex flex-col gap-2 p-3 shrink-0 border-t border-black/10 min-h-[4.5rem]">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#0095f6] hover:underline w-fit"
        >
          View more on Instagram
        </a>
        {card.caption && (
          <p className="text-sm text-foreground leading-snug line-clamp-2">
            <span className="font-semibold">mesmerize_kenya</span>{" "}
            {card.caption}
          </p>
        )}
        <div className="flex items-center justify-end mt-auto pt-1">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/60 hover:text-black transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="size-5" strokeWidth={1.5} />
          </a>
        </div>
      </footer>
    </article>
  );
}

export default function InstagramFeedDefault({
  block: _block,
  cards = defaultInstagramCards,
  profileUrl = MESMERIZE_INSTAGRAM_URL,
}: Props) {
  const displayCards = cards.slice(0, 4);

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.05em] font-serif text-foreground uppercase mb-3 sm:mb-0">
            AS SEEN ON INSTAGRAM
          </h2>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base tracking-[0.1em] font-light text-foreground uppercase hover:text-foreground/70 transition-colors"
          >
            @mesmerize_kenya
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {displayCards.map((card) => (
            <InstagramCard
              key={card.id}
              card={card}
              profileUrl={profileUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
