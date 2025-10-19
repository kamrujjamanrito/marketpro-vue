export interface Product {
  id: number;
  title: string;
  discountPercent?: number;
  oldPrice?: number;
  price: number;
  sold: string;
  totalStock: number;
  rating: number;
  ratingCount: string;
  seller: string;
  image: string;
  badge?: string;
  href: string;
  shopHref: string;
  isFeatured?: boolean;
}

export const topSellingProducts: Product[] = [
  {
    id: 1,
    title: "Polaroid Now+ Gen 2 - White",
    discountPercent: 35,
    price: 14.99,
    oldPrice: 28.99,
    sold: "18",
    totalStock: 35,
    rating: 4.8,
    ratingCount: "17k",
    seller: "Lucky Supermarket",
    image: "/images/thumbs/deal-img.png",
    href: "/shop",
    shopHref: "/shop",
  },
  {
    id: 2,
    title: "Taylor Farms Broccoli Florets Vegetables",
    discountPercent: 35,
    price: 14.99,
    oldPrice: 28.99,
    sold: "18",
    totalStock: 35,
    rating: 4.8,
    ratingCount: "17k",
    seller: "Lucky Supermarket",
    image: "/images/thumbs/product-two-img10.png",
    href: "/product-details-two",
    shopHref: "/cart",
  },
  {
    id: 3,
    title: "Taylor Farms Broccoli Florets Vegetables",
    discountPercent: 35,
    price: 14.99,
    oldPrice: 28.99,
    sold: "18",
    totalStock: 35,
    rating: 4.8,
    ratingCount: "17k",
    seller: "Lucky Supermarket",
    image: "/images/thumbs/product-two-img8.png",
    badge: "Best Sale",
    href: "/product-details-two",
    shopHref: "/cart",
    isFeatured: true,
  },
  {
    id: 4,
    title: "Taylor Farms Broccoli Florets Vegetables",
    discountPercent: 48,
    price: 14.99,
    oldPrice: 28.99,
    sold: "18",
    totalStock: 35,
    rating: 4.8,
    ratingCount: "17k",
    seller: "Lucky Supermarket",
    image: "/images/thumbs/product-two-img8.png",
    badge: "Sale 50%",
    href: "/product-details-two",
    shopHref: "/cart",
  },
  {
    id: 5,
    title: "Taylor Farms Broccoli Florets Vegetables",
    discountPercent: 48,
    price: 14.99,
    oldPrice: 28.99,
    sold: "18",
    totalStock: 35,
    rating: 4.8,
    ratingCount: "17k",
    seller: "Lucky Supermarket",
    image: "/images/thumbs/product-two-img9.png",
    href: "/product-details-two",
    shopHref: "/cart",
  },
  {
    id: 6,
    title: "Taylor Farms Broccoli Florets Vegetables",
    discountPercent: 48,
    price: 14.99,
    oldPrice: 28.99,
    sold: "18",
    totalStock: 35,
    rating: 4.8,
    ratingCount: "17k",
    seller: "Lucky Supermarket",
    image: "/images/thumbs/product-two-img10.png",
    href: "/product-details-two",
    shopHref: "/cart",
  },
  {
    id: 7,
    title: "Taylor Farms Broccoli Florets Vegetables",
    discountPercent: 48,
    price: 14.99,
    oldPrice: 28.99,
    sold: "18",
    totalStock: 35,
    rating: 4.8,
    ratingCount: "17k",
    seller: "Lucky Supermarket",
    image: "/images/thumbs/product-two-img8.png",
    badge: "Best Sale",
    href: "/product-details-two",
    shopHref: "/cart",
    isFeatured: true,
  },
];
