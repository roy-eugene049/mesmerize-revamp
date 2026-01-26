import { useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import type { Block, Product } from "@/types/storefront";

interface Props {
	block: Block;
	product: Product;
}

export default function FeaturedProductDefault({ block, product }: Props) {
	const [quantity, setQuantity] = useState(1);
	const { addItem, getItemQuantity } = useCart();
	const quantityInCart = getItemQuantity(product.id);
	const isInCart = quantityInCart > 0;

	const handleQuantityChange = (delta: number) => {
		setQuantity((prev) => Math.max(1, Math.min(product.available, prev + delta)));
	};

	return (
		<section className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 bg-background">
			<div className="container mx-auto px-4 sm:px-6">
				{/* Section Title - Centered, Bigger, Truncated to 2 lines */}
				<div className="text-center mb-8 sm:mb-12 md:mb-16">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight line-clamp-2 px-4">
						{block.title || "Featured Product"}
					</h2>
				</div>

				{/* Main Product Section */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 lg:items-stretch">
					{/* Product Image */}
					<div className="w-full max-w-md mx-auto lg:max-w-none">
						<div className="relative aspect-[3/4] w-full bg-muted/30 overflow-hidden">
							<img
								src={product.featured_img || ""}
								alt={product.title}
								className="w-full h-full object-cover"
								onError={(e) => {
									const target = e.target as HTMLImageElement;
									target.src = "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=800&h=1000";
								}}
							/>
						</div>
					</div>

					{/* Product Details */}
					<div className="space-y-6 w-full flex flex-col max-w-md mx-auto lg:max-w-none">
						{/* Product Name - Bigger and Bold */}
						<h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-center lg:text-left">
							{product.title}
						</h3>

						{/* Price */}
						<div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center lg:text-left">
							{product.currency.symbol} {product.price.toLocaleString()}
						</div>
						<p className="text-sm text-foreground/60 text-center lg:text-left">Tax included.</p>

						{/* Description - Expanded to cover more space */}
						<div className="text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed flex-grow text-center lg:text-left">
							<p>
								{product.excerpt || product.description || "Got a January baby to celebrate? Make their day as bright and refreshing as the new year! This exclusive hamper features a moist vanilla sponge with mint & pineapple whipped cream, paired with the Leilani bouquet, A stunning mix of blooms symbolizing growth and new beginnings. Finished with a bubbly card, it's the perfect way to show them just how special they are."}
							</p>
						</div>

						{/* Allergens */}
						<div className="text-sm text-foreground/60 text-center lg:text-left">
							<p><strong>Allergens:</strong> Contains gluten, eggs, and milk. (Made in a facility that also handles nuts and peanuts.)</p>
						</div>

						{/* Delivery Information */}
						<div className="text-sm text-foreground/60 flex items-center gap-2 justify-center lg:justify-start">
							<span>🚚</span>
							<span className="text-center lg:text-left">Delivery: Available only in Nairobi & Environs, Nakuru, Naivasha, Eldoret, Kericho, Kisumu, Mombasa & Diani</span>
						</div>

						{/* Quantity Selector */}
						<div className="pt-4 border-t border-foreground/10">
							<div className="flex items-center gap-4 justify-center lg:justify-start">
								<span className="text-sm md:text-base text-foreground/60 font-medium">Quantity:</span>
								<div className="flex items-center border border-foreground/20 bg-white">
									<button
										type="button"
										onClick={() => handleQuantityChange(-1)}
										disabled={quantity <= 1}
										className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none"
										aria-label="Decrease quantity"
									>
										<Minus className="w-4 h-4 text-foreground" />
									</button>
									<input
										type="number"
										min="1"
										max={product.available}
										value={quantity}
										onChange={(e) => {
											const val = parseInt(e.target.value) || 1;
											setQuantity(Math.max(1, Math.min(product.available, val)));
										}}
										className="w-16 h-10 text-center border-0 bg-transparent text-base md:text-lg font-medium text-foreground focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
										aria-label="Product quantity"
									/>
									<button
										type="button"
										onClick={() => handleQuantityChange(1)}
										disabled={quantity >= product.available}
										className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none"
										aria-label="Increase quantity"
									>
										<Plus className="w-4 h-4 text-foreground" />
									</button>
								</div>
							</div>
						</div>

						{/* Add to Cart Button - Pushed down to align with bottom of image */}
						<div className="mt-auto pt-6">
							<button
								type="button"
								onClick={() => addItem(product, quantity)}
								className={`w-full py-4 px-6 text-sm md:text-base tracking-[0.15em] uppercase font-bold transition-colors focus:outline-none flex items-center justify-center gap-2 ${
									isInCart
										? "bg-foreground text-background hover:bg-foreground/90"
										: "bg-primary text-primary-foreground hover:bg-primary/90"
								}`}
							>
								<ShoppingBag className="w-5 h-5" />
								{isInCart ? `✓ IN BASKET (${quantityInCart})` : "Add To Cart"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
