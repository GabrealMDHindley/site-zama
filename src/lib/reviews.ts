// Real, verbatim testimonials — from clients/zama/assets/reviews.md.
// Do not paraphrase, alter, or add to this list.

export type Review = {
  name: string;
  platform: string;
  rating?: number;
  timeAgo: string;
  quote: string;
};

export const reviews: Review[] = [
  {
    name: "Katherine Cerda",
    platform: "Google",
    rating: 5,
    timeAgo: "~7 months ago",
    quote:
      "We came to Zama San Diego for a bachelorette celebration, and the experience exceeded our expectations! The atmosphere was lively and beautiful, the food was delicious, and it was the perfect spot for a special night out. What truly made the night unforgettable was our waiter, Alex... If you're visiting Zama, ask for Alex, he is truly one of a kind. We will absolutely be back!",
  },
  {
    name: "Yuezhe Li",
    platform: "Google",
    rating: 5,
    timeAgo: "~3 months ago",
    quote:
      "The food is good. The lamb lollipop is tasty. The Royce Roy roll's flavor is heavy on the wagyu beef on top of roll. The fatty flavor and the melt-in-mouth feeling is amazing. It's balanced out well by the onion tempura... not greasy, and a great palette cleaner between pieces.",
  },
  {
    name: "Lily P",
    platform: "Google",
    rating: 5,
    timeAgo: "~3 months ago",
    quote:
      "Solange was our server for Happy Hour and she was really sweet from the beginning. Atmosphere was great here and accommodating since we had our child with us. Happy hour is definitely worth it and the drinks were surprisingly really well crafted... Would recommend the lamb for sure!",
  },
  {
    name: "Federico",
    platform: "OpenTable",
    timeAgo: "~2 weeks ago",
    quote:
      "I come to Zama pretty often and it never disappoints!... Definitely one of my favorite spots!",
  },
  {
    name: "LaQueda",
    platform: "OpenTable",
    rating: 5,
    timeAgo: "~1 year ago",
    quote:
      "Probably the best lamb and short ribs I've ever had!!! The customer service was A-1!",
  },
  {
    name: "Tarciana",
    platform: "OpenTable",
    timeAgo: "~1 year ago",
    quote:
      "The food is outstanding, great service and ambient. On Fridays and Saturdays, they have entertainment with dancers and Dj.",
  },
  {
    name: "Alex",
    platform: "OpenTable",
    rating: 5,
    timeAgo: "~6 months ago",
    quote:
      "Some of the best sushi I've ever had!! Great service. Friendly and knowledgable.",
  },
  {
    name: "Millie",
    platform: "OpenTable",
    rating: 5,
    timeAgo: "~2 weeks ago",
    quote:
      "Every staff member was so attentive... The ambience was fun and amazing! Food was delicious and creative.",
  },
];
