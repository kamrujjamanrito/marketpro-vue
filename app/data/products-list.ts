export type Product = {
  id: number;
  title: string;
  image: string;
  badge?: {
    text: string;
    color: string;
  };
  rating: number;
  reviews: string;
  progress: {
    sold: number;
    total: number;
  };
  price: {
    original: number;
    sale: number;
    unit: string;
  };
  link: string;
};

export const productList: Product[] = [
  {
    id: 1,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img1.png",
    badge: {
      text: "Best Sale",
      color: "primary-600",
    },
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    link: "/product-details",
  },
  {
    id: 2,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img2.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    link: "/product-details",
  },
  {
    id: 3,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img3.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    link: "/product-details",
  },
  {
    id: 4,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img4.png",
    badge: {
      text: "Sale 50%",
      color: "danger-600",
    },
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    link: "/product-details",
  },
  {
    id: 5,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img5.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    link: "/product-details",
  },
  {
    id: 6,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img6.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    link: "/product-details",
  },
  {
    id: 7,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img7.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    link: "/product-details",
  },
  {
    id: 8,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img8.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    link: "/product-details",
  },
  {
    id: 9,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img9.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    badge: {
      text: "Sale 50%",
      color: "danger",
    },
    link: "/product-details",
  },
  {
    id: 10,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img10.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    link: "/product-details",
  },
  {
    id: 11,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img11.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    link: "/product-details",
  },
  {
    id: 12,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img12.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    badge: {
      text: "New",
      color: "warning",
    },
    link: "/product-details",
  },
  {
    id: 13,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img13.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    link: "/product-details",
  },
  {
    id: 14,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img14.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    link: "/product-details",
  },
  {
    id: 15,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img15.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    badge: {
      text: "Best Sale",
      color: "primary",
    },
    link: "/product-details",
  },
  {
    id: 16,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img15.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    badge: {
      text: "New",
      color: "warning",
    },
    link: "/product-details",
  },
  {
    id: 17,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img1.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    badge: {
      text: "Best Sale",
      color: "primary",
    },
    link: "/product-details",
  },
  {
    id: 18,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img2.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    link: "/product-details",
  },
  {
    id: 19,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img3.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    link: "/product-details",
  },
  {
    id: 20,
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: "/images/thumbs/product-two-img4.png",
    rating: 4.8,
    reviews: "17k",
    progress: {
      sold: 18,
      total: 35,
    },
    price: {
      original: 28.99,
      sale: 14.99,
      unit: "/Qty",
    },
    badge: {
      text: "Sale 50%",
      color: "danger",
    },
    link: "/product-details",
  },
];
