export interface DealProduct {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviews: string;
  progress: number;
  sold: string;
  oldPrice: string;
  newPrice: string;
  badge?: {
    label: string;
    type: "success" | "danger" | "warning";
  };
}

export const dealsOfWeek: DealProduct[] = [
  {
    id: 1,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img1.png",
    rating: 4.8,
    reviews: "17k",
    progress: 35,
    sold: "18/35",
    oldPrice: "$28.99",
    newPrice: "$14.99",
  },
  {
    id: 2,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img2.png",
    rating: 4.8,
    reviews: "17k",
    progress: 35,
    sold: "18/35",
    oldPrice: "$28.99",
    newPrice: "$14.99",
    badge: {
      label: "Best Sale",
      type: "success",
    },
  },
  {
    id: 3,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img3.png",
    rating: 4.8,
    reviews: "17k",
    progress: 35,
    sold: "18/35",
    oldPrice: "$28.99",
    newPrice: "$14.99",
  },
  {
    id: 4,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img4.png",
    rating: 4.8,
    reviews: "17k",
    progress: 35,
    sold: "18/35",
    oldPrice: "$28.99",
    newPrice: "$14.99",
    badge: {
      label: "Sale 50%",
      type: "danger",
    },
  },
  {
    id: 5,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img5.png",
    rating: 4.8,
    reviews: "17k",
    progress: 35,
    sold: "18/35",
    oldPrice: "$28.99",
    newPrice: "$14.99",
  },
  {
    id: 6,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img6.png",
    rating: 4.8,
    reviews: "17k",
    progress: 35,
    sold: "18/35",
    oldPrice: "$28.99",
    newPrice: "$14.99",
  },
  {
    id: 7,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img9.png",
    rating: 4.8,
    reviews: "17k",
    progress: 35,
    sold: "18/35",
    oldPrice: "$28.99",
    newPrice: "$14.99",
    badge: {
      label: "New",
      type: "warning",
    },
  },
];
