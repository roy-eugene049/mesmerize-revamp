import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, Minus, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import type { Block, Product } from "@/types/storefront";

interface Props {
	block: Block;
	products: Product[];
}

export default function ProductListDefault({ block, products }: Props) {
	const [activeTab, setActiveTab] = useState("best-sellers");

	const tabs = [
		{ id: "best-sellers", label: "BEST SELLERS" },
		{ id: "new-release", label: "NEW RELEASE" },
	];

	// Product sets for different tabs
	const bestSellersProducts = [
		{
			title: "Premium Rose Bouquet",
			price: 12500,
			img: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=600&h=750",
		},
		{
			title: "Eternal Rose Box",
			price: 15000,
			img: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=600&h=750",
		},
		{
			title: "Classic Red Roses",
			price: 8900,
			img: "https://images.unsplash.com/photo-1596438459194-f9686001d413?auto=format&fit=crop&q=80&w=600&h=750",
		},
		{
			title: "Luxury Mixed Bouquet",
			price: 12000,
			img: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=600&h=750",
		},
		{
			title: "Sunkissed Bouquet",
			price: 9500,
			img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600&h=750",
		},
		{
			title: "Velvet Crimson",
			price: 18000,
			img: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=600&h=750",
		},
		{
			title: "White Elegance",
			price: 11000,
			img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600&h=750",
		},
		{
			title: "Garden Delight",
			price: 8500,
			img: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&q=80&w=600&h=750",
		},
	];

	const newReleaseProducts = [
		{
			title: "Spring Collection",
			price: 13500,
			img: "https://images.unsplash.com/photo-1550983092-249511f07a51?auto=format&fit=crop&q=80&w=600&h=750",
		},
		{
			title: "Tropical Paradise",
			price: 14200,
			img: "https://images.unsplash.com/photo-1519378013398-fa3274be394b?auto=format&fit=crop&q=80&w=600&h=750",
		},
		{
			title: "Sunset Dreams",
			price: 12800,
			img: "https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b6?auto=format&fit=crop&q=80&w=600&h=750",
		},
		{
			title: "Ocean Breeze",
			price: 11500,
			img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&q=80&w=600&h=750",
		},
		{
			title: "Midnight Bloom",
			price: 16000,
			img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600&h=750",
		},
		{
			title: "Golden Hour",
			price: 13800,
			img: "https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?auto=format&fit=crop&q=80&w=600&h=750",
		},
		{
			title: "Purple Majesty",
			price: 12200,
			img: "https://images.unsplash.com/photo-1599148482840-d54ca35abc39?auto=format&fit=crop&q=80&w=600&h=750",
		},
		{
			title: "Cherry Blossom",
			price: 10500,
			img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600&h=750",
		},
	];

	// Get products based on active tab
	const getProductsForTab = (tabId: string) => {
		const productSet =
			tabId === "best-sellers" ? bestSellersProducts : newReleaseProducts;
		return productSet.map((p, i) => ({
			...products[0], // Use base product structure
			id: `${tabId}-${i}`,
			title: p.title,
			slug: p.title.toLowerCase().replace(/\s+/g, "-"),
			price: p.price,
			compare_at_price: Math.round(p.price * 1.2),
			currency: { symbol: "KSh", code: "KES" },
			featured_img: p.img,
			excerpt: `Exquisite ${p.title.toLowerCase()} arrangement.`,
		}));
	};

	const displayedProducts = getProductsForTab(activeTab);

	return (
		<section className="pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-6 md:pb-8 bg-background overflow-hidden flex flex-col items-center">
			<div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-foreground/5 pb-6 sm:pb-8 mb-8 sm:mb-12">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-[0.05em] text-black uppercase mb-6 md:mb-0">
						{block.title || "POPULAR FLOWERS & GIFTS"}
					</h2>

					{/* Tabs - Scrollable on mobile */}
					<div className="flex space-x-8 sm:space-x-12 overflow-x-auto w-full md:w-auto no-scrollbar">
						{tabs.map((tab) => (
							<button
								key={tab.id}
								type="button"
								onClick={() => setActiveTab(tab.id)}
								className={`text-xs sm:text-sm tracking-[0.2em] font-bold transition-all duration-300 relative pb-3 sm:pb-4 whitespace-nowrap ${
									activeTab === tab.id
										? "text-black"
										: "text-foreground/30 hover:text-foreground/50"
								}`}
							>
								{tab.label}
								{activeTab === tab.id && (
									<span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-black"></span>
								)}
							</button>
						))}
					</div>
				</div>

				{/* Product Grid - Responsive */}
				<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-10 sm:gap-y-12 md:gap-y-16">
					{displayedProducts.map((product) => (
						<ProductCard key={product.id} product={product as Product} />
					))}
				</div>

				{/* View More Products Button - Responsive */}
				<div className="mt-12 sm:mt-16 md:mt-20 flex justify-center px-4">
					<Link to="/products" className="w-full sm:w-auto">
						<button
							type="button"
							className="w-full sm:w-auto bg-black text-white px-8 py-4 sm:px-12 sm:py-6 md:px-16 md:py-8 text-xs sm:text-sm tracking-[0.2em] uppercase font-bold hover:bg-black/90 transition-all duration-300"
						>
							View More Products
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}

function ProductCard({ product }: { product: Product }) {
	const { addItem, updateQuantity, getItemQuantity } = useCart();
	const quantityInCart = getItemQuantity(product.id);
	const isInCart = quantityInCart > 0;

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
								disabled={quantityInCart <= 1}
								className="bg-foreground text-background hover:bg-foreground/90 py-4 sm:py-5 px-3 sm:px-4 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
