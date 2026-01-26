import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Heart, Minus, Plus } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCart } from "@/contexts/CartContext";
import type { Block, Product } from "@/types/storefront";

interface Props {
	block: Block;
	products: Product[];
}

export default function LovePickedForHer({ block, products }: Props) {
	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);
	
	const [emblaRef, emblaApi] = useEmblaCarousel({ 
		loop: false,
		align: "start",
		slidesToScroll: 1,
	});

	// Update scroll button visibility
	useEffect(() => {
		if (!emblaApi) return;

		const updateScrollButtons = () => {
			setCanScrollPrev(emblaApi.canScrollPrev());
			setCanScrollNext(emblaApi.canScrollNext());
		};

		updateScrollButtons();
		emblaApi.on("select", updateScrollButtons);
		emblaApi.on("reInit", updateScrollButtons);

		return () => {
			emblaApi.off("select", updateScrollButtons);
			emblaApi.off("reInit", updateScrollButtons);
		};
	}, [emblaApi]);

	const scrollPrev = () => {
		if (emblaApi) emblaApi.scrollPrev();
	};

	const scrollNext = () => {
		if (emblaApi) emblaApi.scrollNext();
	};

	return (
		<section className="pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-6 md:pb-8 bg-background">
			<div className="container mx-auto px-4 sm:px-6">
				{/* Header with Title */}
				<div className="mb-8 sm:mb-12">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-[0.05em] text-foreground uppercase">
						{block.title || "Love Picked For Her"}
					</h2>
				</div>

				{/* Embla Carousel Container */}
				<div className="relative">
					<div className="overflow-hidden" ref={emblaRef}>
						<div className="flex gap-4 sm:gap-6">
							{products.map((product) => (
								<div key={product.id} className="flex-[0_0_85%] sm:flex-[0_0_48%] md:flex-[0_0_23.5%] lg:flex-[0_0_23.5%] min-w-0">
									<ProductCard product={product} />
								</div>
							))}
						</div>
					</div>

					{/* Navigation Buttons - Only visible when relevant */}
					{canScrollPrev && (
						<button
							type="button"
							onClick={scrollPrev}
							className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 bg-white border border-foreground/10 rounded-full p-2 sm:p-3 shadow-md hover:bg-black transition-all group"
							aria-label="Previous products"
						>
							<ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground group-hover:text-white transition-colors" />
						</button>
					)}
					{canScrollNext && (
						<button
							type="button"
							onClick={scrollNext}
							className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 bg-white border border-foreground/10 rounded-full p-2 sm:p-3 shadow-md hover:bg-black transition-all group"
							aria-label="Next products"
						>
							<ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground group-hover:text-white transition-colors" />
						</button>
					)}
				</div>
			</div>
		</section>
	);
}

function ProductCard({ product }: { product: Product }) {
	const { addItem, updateQuantity, removeItem, getItemQuantity } = useCart();
	const quantityInCart = getItemQuantity(product.id);
	const isInCart = quantityInCart > 0;
	// Determine if product is "new" based on ID (deterministic)
	const isNew = parseInt(product.id.slice(-1)) % 2 === 0;

	const handleAddToBasket = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		addItem(product, 1);
	};

	const handleDecreaseQuantity = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (quantityInCart > 1) {
			updateQuantity(product.id, quantityInCart - 1);
		} else {
			// Remove item from cart when quantity reaches 0
			removeItem(product.id);
		}
	};

	const handleIncreaseQuantity = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (quantityInCart < product.available) {
			updateQuantity(product.id, quantityInCart + 1);
		}
	};

	return (
		<Link
			to="/products/$slug"
			params={{ slug: product.slug }}
			className="group cursor-pointer"
		>
			<div className="aspect-[3/4] relative bg-white overflow-hidden mb-4 sm:mb-6 shadow-sm border border-foreground/5">
				<button
					type="button"
					onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();
					}}
					className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md text-foreground/60 hover:text-foreground hover:bg-white transition-all"
					aria-label="Add to wishlist"
				>
					<Heart className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
				</button>

				{isNew && (
					<div className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
						New
					</div>
				)}

				<img
					src={product.featured_img || ""}
					alt={product.title}
					className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
				/>

				<div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
					{isInCart ? (
						<div className="flex">
							<button
								type="button"
								onClick={handleDecreaseQuantity}
								className="bg-foreground text-background hover:bg-foreground/90 py-4 sm:py-5 px-3 sm:px-4 flex items-center justify-center transition-colors"
								aria-label="Decrease quantity"
							>
								<Minus className="w-4 h-4 sm:w-5 sm:h-5" />
							</button>
							<div className="flex-1 bg-foreground text-background py-4 sm:py-5 text-xs sm:text-sm tracking-[0.2em] uppercase font-bold flex flex-col items-center justify-center">
								<span className="text-[10px] sm:text-xs leading-tight">IN BASKET</span>
								<span className="text-sm sm:text-base font-bold">{quantityInCart}</span>
							</div>
							<button
								type="button"
								onClick={handleIncreaseQuantity}
								disabled={quantityInCart >= product.available}
								className="bg-foreground text-background hover:bg-foreground/90 py-4 sm:py-5 px-3 sm:px-4 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed border-l border-background/20"
								aria-label="Increase quantity"
							>
								<Plus className="w-4 h-4 sm:w-5 sm:h-5" />
							</button>
						</div>
					) : (
						<button
							type="button"
							onClick={handleAddToBasket}
							className="w-full bg-black text-white hover:bg-black/80 py-4 sm:py-5 text-xs sm:text-sm tracking-[0.2em] uppercase font-bold transition-colors"
						>
							+ ADD TO BASKET
						</button>
					)}
				</div>
			</div>

			<div className="space-y-2 sm:space-y-3">
				<h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
					{product.title}
				</h3>
				<p className="text-sm sm:text-base tracking-[0.05em] text-foreground font-medium">
					{product.currency.symbol} {product.price.toLocaleString()}
				</p>
			</div>
		</Link>
	);
}
