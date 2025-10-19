export interface BestSellProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice: number;
  badge?: string;
  rating: number;
  reviews: string;
  sellerName?: string;
  sold: {
    current: number;
    total: number;
  };
  countdownTarget: string;
}

export const bestSells: BestSellProduct[] = [
  {
    id: 1,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/best-sell1.png",
    price: 14.99,
    oldPrice: 28.99,
    badge: "Sale 50%",
    rating: 4.8,
    reviews: "17k",
    sellerName: "Lucky Supermarket",
    sold: {
      current: 18,
      total: 35,
    },
    countdownTarget: "2027-11-30T23:59:59",
  },
  {
    id: 2,
    title: "Another Product Example",
    image: "/images/thumbs/best-sell2.png",
    price: 14.99,
    oldPrice: 28.99,
    badge: "Sale 50%",
    rating: 4.5,
    reviews: "12k",
    sellerName: "Super Store",
    sold: {
      current: 10,
      total: 25,
    },
    countdownTarget: "2026-12-30T23:59:59",
  },
  {
    id: 3,
    title: "Third Product Example",
    image: "/images/thumbs/best-sell3.png",
    price: 14.99,
    oldPrice: 28.99,
    badge: "Sale 50%",
    rating: 4.2,
    reviews: "9k",
    sellerName: "Market Plus",
    sold: {
      current: 5,
      total: 15,
    },
    countdownTarget: "2025-12-30T23:59:59",
  },
  {
    id: 4,
    title: "Fourth Product Example",
    image: "/images/thumbs/best-sell4.png",
    price: 14.99,
    oldPrice: 28.99,
    badge: "Sale 50%",
    rating: 4.7,
    reviews: "14k",
    sellerName: "Fresh Mart",
    sold: {
      current: 20,
      total: 40,
    },
    countdownTarget: "2027-12-30T23:59:59",
  },
];
