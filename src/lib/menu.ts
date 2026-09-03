// Real menu content — verbatim from clients/zama/intake.md "Found by the agents
// > Menu" section. Only items with a published price show one; do not invent
// prices for press-sourced signature dishes.

export type MenuItem = {
  name: string;
  price?: string;
  description: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "rolls",
    title: "Sushi Rolls",
    items: [
      {
        name: "Tunalicious Roll",
        price: "$23",
        description:
          "Light spicy tuna, cucumber, tuna strip, jalapeño, cilantro cream, micro bull's blood, topped with ahi tuna strips.",
      },
      { name: "Leyenda De Zama Roll", price: "$26", description: "" },
      { name: "Vegetariano Roll", price: "$20", description: "" },
      { name: "Tropical Roll", price: "$24", description: "" },
      { name: "Pom Passion Roll", price: "$23", description: "" },
      { name: "Crispy Roll", price: "$22", description: "" },
    ],
  },
  {
    id: "ceviche",
    title: "Ceviche & Appetizers",
    items: [
      {
        name: "Ceviche",
        description:
          "Fresh yellowtail cured in fresh citrus, lemon oil, cherry tomatoes, leche de tigre.",
      },
      {
        name: "Trio of Ceviche",
        description: "A tasting of three of Zama's ceviche preparations.",
      },
      {
        name: "Aguachile",
        description:
          "Shrimp ceviche, avocado cream, jalapeño, corn chips.",
      },
      {
        name: "Signature Caesar Salad",
        description:
          "Little gem lettuce, house made caesar, parmesan rain, sliced jalapeño.",
      },
      {
        name: "Calamari",
        description:
          "Flash fried, shishito and togarashi peppers, lime wasabi aioli.",
      },
    ],
  },
  {
    id: "entrees",
    title: "Entrées",
    items: [
      {
        name: "Filet Mignon",
        description:
          "8oz filet, mashed potatoes, broccolini, tempranillo wine reduction.",
      },
      {
        name: "Salmon & Sweet Corn",
        description:
          "Broiled salmon, passion fruit glaze, mashed potatoes, broccolini.",
      },
      {
        name: "Scallops",
        description:
          "Coconut cream rice, guajillo mango sauce, tobiko caviar.",
      },
      {
        name: "Lamb Lollipop",
        description: "A guest favorite among Zama's signature entrées.",
      },
    ],
  },
  {
    id: "sushi-bar",
    title: "Sushi Bar Specialties",
    items: [
      {
        name: "Wagyu Maki",
        description: "Beef tartare, wagyu, truffles.",
      },
      {
        name: "Zama Crudo",
        description: "Sea bass, salmon, scallops.",
      },
      {
        name: "Rolls Royce Maki",
        description: "Shrimp tempura, tuna, jalapeño aioli.",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        name: "Japanese Yuzu Cheesecake",
        description: "Lemon zest, wild berries, vanilla sauce.",
      },
      {
        name: "Hazelnut Mousse",
        description:
          "Chocolate and hazelnut mousse, caramelized walnuts, dark chocolate sauce.",
      },
      {
        name: "Chocolate Sphere",
        description: "Zama's signature tableside chocolate sphere dessert.",
      },
    ],
  },
  {
    id: "cocktails",
    title: "Cocktails",
    items: [
      {
        name: "Junglerita",
        description: "Tequila, pineapple-serrano, lime, curaçao.",
      },
      {
        name: "Zama-Tini",
        description:
          "Tamarindo mezcal, pomegranate, lemon, St. Germain foam, hibiscus.",
      },
      {
        name: "Endless Nights",
        description: "Espresso vodka, coconut whip.",
      },
    ],
  },
];

// Curated set for the Home page's pinned "Signature Dishes" scroller — a mix
// of the priced sushi rolls and the press-sourced signature dishes, all
// pulled verbatim from the categories above.
export const signatureDishes: MenuItem[] = [
  menu[0].items[0], // Tunalicious Roll — $23
  menu[0].items[1], // Leyenda De Zama Roll — $26
  menu[1].items[1], // Trio of Ceviche
  menu[1].items[2], // Aguachile
  menu[2].items[2], // Scallops
  menu[2].items[3], // Lamb Lollipop
  menu[3].items[0], // Wagyu Maki
  menu[5].items[0], // Junglerita
];

export const prixFixe = {
  title: "Restaurant Week — Three-Course Menu",
  price: "$50",
  note: "Offered during San Diego Restaurant Week — confirm current availability when reserving.",
  courses: [
    {
      name: "Appetizer",
      choices: [
        "Ceviche — fresh yellowtail cured in fresh citrus, lemon oil, cherry tomatoes, leche de tigre",
        "Signature Caesar Salad — little gem lettuce, house made caesar, parmesan rain, sliced jalapeño",
        "Calamari — flash fried, shishito and togarashi peppers, lime wasabi aioli",
      ],
    },
    {
      name: "Entrée",
      choices: [
        "Filet Mignon — 8oz, mashed potatoes, broccolini, tempranillo wine reduction",
        "Salmon & Sweet Corn — broiled, passion fruit glaze, mashed potatoes, broccolini",
        "Tunalicious Roll",
      ],
    },
    {
      name: "Dessert",
      choices: [
        "Japanese Yuzu Cheesecake — lemon zest, wild berries, vanilla sauce",
        "Hazelnut Mousse — chocolate and hazelnut mousse, caramelized walnuts, dark chocolate sauce",
      ],
    },
  ],
};
