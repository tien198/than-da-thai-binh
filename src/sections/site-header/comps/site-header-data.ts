export type ActivePage = "about" | "home";

export type MobileMenuState = "closed" | "closing" | "open";

export const navigationItems = [
  {
    key: "products",
    label: "SẢN PHẨM THAN",
    href: "/#san-pham",
    dropdown: true,
  },
  { key: "about", label: "GIỚI THIỆU", href: "/gioi-thieu" },
  {
    key: "capacity",
    label: "NĂNG LỰC CUNG ỨNG",
    href: "/gioi-thieu#nang-luc",
  },
  {
    key: "pricing",
    label: "BÁO GIÁ & VẬN CHUYỂN",
    href: "/gioi-thieu#lien-he",
  },
  {
    key: "contact",
    label: "LIÊN HỆ",
    href: "/gioi-thieu#lien-he",
  },
] as const;
