export interface CartItem {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  quantity: number;
  tags: string[];
}

export const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img1.png",
    rating: 4.8,
    reviews: 128,
    price: 125.0,
    quantity: 1,
    tags: ["Camera", "Videos"],
  },
  {
    id: 2,
    name: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img2.png",
    rating: 4.8,
    reviews: 128,
    price: 125.0,
    quantity: 1,
    tags: ["Camera", "Videos"],
  },
  {
    id: 3,
    name: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img3.png",
    rating: 4.8,
    reviews: 128,
    price: 125.0,
    quantity: 1,
    tags: ["Camera", "Videos"],
  },
  {
    id: 4,
    name: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img4.png",
    rating: 4.8,
    reviews: 128,
    price: 125.0,
    quantity: 1,
    tags: ["Camera", "Videos"],
  },
];
