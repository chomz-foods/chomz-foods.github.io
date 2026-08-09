export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  name: string;
  items: MenuItem[];
};

// Placeholder menu — swap in real items and prices any time.
export const MENU: MenuCategory[] = [
  {
    name: "Beef Choma",
    items: [
      {
        name: "Classic Beef Choma (KG)",
        description: "Traditional charcoal-grilled beef — smoky and tender, no frills.",
        price: "KSh 1,000",
      },
      {
        name: "Marinated Beef Choma (KG)",
        description: "Beef marinated in our house spice blend, then char-grilled to order.",
        price: "KSh 1,100",
      },
    ],
  },
  {
    name: "Chicken Choma",
    items: [
      {
        name: "Classic Chicken Choma (KG)",
        description: "Traditional charcoal-grilled chicken — simple and smoky.",
        price: "KSh 900",
      },
      {
        name: "Marinated Chicken Choma (KG)",
        description: "Chicken marinated in our house spice blend, grilled fresh.",
        price: "KSh 1,000",
      },
    ],
  },
  {
    name: "Goat Choma",
    items: [
      {
        name: "Classic Goat Choma (KG)",
        description: "Traditional charcoal-grilled goat, bone-in and smoky.",
        price: "KSh 1,200",
      },
      {
        name: "Marinated Goat Choma (KG)",
        description: "Goat marinated in our house spice blend, then char-grilled to order.",
        price: "KSh 1,300",
      },
    ],
  },
  {
    name: "Sides & Extras",
    items: [
      {
        name: "Ugali",
        description: "Fresh, made to order.",
        price: "KSh 50",
      },
      {
        name: "Kachumbari",
        description: "Tomato & onion salad.",
        price: "KSh 50",
      },
      {
        name: "Fries",
        description: "Golden and crispy.",
        price: "KSh 150",
      },
    ],
  },
];
