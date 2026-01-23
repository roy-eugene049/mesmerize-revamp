export type Timestamps = {
	created_at?: string | null;
	updated_at?: string | null;
};

export type Currency = {
	code: string;
	symbol: string;
};

export const BlockType = {
	STRING: "string",
	NUMBER: "number",
	EMAIL: "email",
	URL: "url",
	BOOLEAN: "boolean",
} as const;

export type BlockTypeType = (typeof BlockType)[keyof typeof BlockType];

export const BlockTarget = {
	TOPBAR: "topbar",
	HEADER: "header",
	MARQUEE: "marquee",
	FOOTER: "footer",
	SIDEBAR: "sidebar",
	CONTENT: "content",
	HERO: "hero",
	BACKTOTOP: "backtotop",
	PRODUCTCARD: "productcard",
	PRODUCTLIST: "productlist",
	PRODUCTVIEW: "productview",
	CHECKOUT: "checkout",
	CART: "cart",
} as const;

export type BlockTargetType = (typeof BlockTarget)[keyof typeof BlockTarget];

export type SingleBlockData = {
	name: string;
	type: BlockTypeType;
	value: string | undefined;
	default?: string;
};

export type Block = Timestamps & {
	id: string;
	shop_id: string;
	user_id?: string | null;
	name: string;
	title: string;
	type: BlockTypeType;
	target: BlockTargetType;
	position?: number;
	data: SingleBlockData[];
	required_fields: string[] | null;
};

export type Shop = Timestamps & {
	id: string;
	name: string;
	slug: string;
	short_name: string;
	logo: string | null;
	favicon: string | null;
	phone: string | null;
	slogan: string | null;
	theme?: string | null;
	bg_color?: string | null;
	button_color?: string | null;
};

export type Product = Timestamps & {
	id: string;
	title: string;
	slug: string;
	featured_img: string | null;
	excerpt: string | null;
	description?: string | null;
	price: number;
	compare_at_price: number;
	currency: Currency;
	available: number;
	on_hand: number;
};
