import type { Block } from "@/types/storefront";
import { Play } from "lucide-react";

interface Props {
  block: Block;
}

interface InstagramPost {
  id: string;
  image: string;
  isVideo: boolean;
  link: string;
}

const instagramPosts: InstagramPost[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=400&h=400",
    isVideo: true,
    link: "https://instagram.com/p/example1",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=400&h=400",
    isVideo: false,
    link: "https://instagram.com/p/example2",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1597089548027-e40b852e505d?auto=format&fit=crop&q=80&w=400&h=400",
    isVideo: true,
    link: "https://instagram.com/p/example3",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=400&h=400",
    isVideo: false,
    link: "https://instagram.com/p/example4",
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&q=80&w=400&h=400",
    isVideo: false,
    link: "https://instagram.com/p/example5",
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1550983092-249511f07a51?auto=format&fit=crop&q=80&w=400&h=400",
    isVideo: true,
    link: "https://instagram.com/p/example6",
  },
];

export default function InstagramFeedDefault({ block }: Props) {
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

        {/* Instagram Feed Grid - Responsive: 2 cols mobile, 3 cols tablet, 6 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group aspect-square overflow-hidden"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Play icon overlay for videos */}
              {post.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black ml-0.5 sm:ml-1" fill="currentColor" />
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
